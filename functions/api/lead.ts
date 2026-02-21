export async function onRequest(context: { request: Request; env: any }) {
  const { request, env } = context

  // Handle CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    })
  }

  // Only allow POST
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  }

  try {
    const payload = await request.json() as any

    // Validate required fields
    if (!payload.phone) {
      return new Response(
        JSON.stringify({ ok: false, error: "Телефон обязателен" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
    }

    // Send to Telegram if credentials are available
    let telegramOk = true
    if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
      telegramOk = await sendTelegram(payload, env.TELEGRAM_BOT_TOKEN, env.TELEGRAM_CHAT_ID)
    }

    return new Response(
      JSON.stringify({
        ok: true,
        message: "Заявка отправлена успешно",
        telegramSent: telegramOk,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
  } catch (error) {
    console.error("Error processing lead:", error)
    return new Response(
      JSON.stringify({
        ok: false,
        error: error instanceof Error ? error.message : "Неизвестная ошибка",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
  }
}

async function sendTelegram(
  payload: any,
  token: string,
  chatId: string
): Promise<boolean> {
  const lines = [
    "🎯 Новая заявка ЛОК VERA / ВЕРА",
    "",
    payload.name ? `👤 Имя: ${payload.name}` : "👤 Имя: не указано",
    `📞 Телефон: ${payload.phone}`,
    `💬 Способ связи: ${payload.contact_method || "не указано"}`,
    payload.message ? `📝 Комментарий: ${payload.message}` : undefined,
    payload.page_url ? `🔗 Страница: ${payload.page_url}` : undefined,
    "",
    payload.utm_source || payload.utm_medium || payload.utm_campaign
      ? "📊 UTM параметры:"
      : undefined,
    payload.utm_source ? `  • utm_source: ${payload.utm_source}` : undefined,
    payload.utm_medium ? `  • utm_medium: ${payload.utm_medium}` : undefined,
    payload.utm_campaign ? `  • utm_campaign: ${payload.utm_campaign}` : undefined,
    payload.utm_term ? `  • utm_term: ${payload.utm_term}` : undefined,
    payload.utm_content ? `  • utm_content: ${payload.utm_content}` : undefined,
    "",
    payload.communication ? "✅ Согласен на коммуникации" : "❌ Не согласен на коммуникации",
  ]
    .filter(Boolean)
    .join("\n")

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: lines,
          disable_web_page_preview: true,
        }),
      }
    )

    if (!response.ok) {
      console.error(`Telegram API error: ${response.status}`)
      const errorData = await response.json()
      console.error("Telegram error details:", errorData)
      return false
    }

    console.log("Telegram message sent successfully")
    return true
  } catch (error) {
    console.error("Error sending to Telegram:", error)
    return false
  }
}
