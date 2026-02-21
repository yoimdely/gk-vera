export type LeadPayload = {
  name: string
  phone: string
  contact_method: string
  message?: string
  page_url?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  communication?: boolean
}

type TelegramResult = {
  ok: boolean
  status?: number
  skipped?: boolean
}

async function sendTelegram(payload: LeadPayload): Promise<TelegramResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  
  if (!token || !chatId) {
    console.warn("Telegram credentials not configured. Lead would be saved but not sent.")
    console.log("Lead data:", payload)
    return { ok: true, skipped: true }
  }

  const lines = [
    "🎯 Новая заявка ЛОК VERA / ВЕРА",
    "",
    payload.name ? `👤 Имя: ${payload.name}` : "👤 Имя: не указано",
    `📞 Телефон: ${payload.phone}`,
    `💬 Способ связи: ${payload.contact_method}`,
    payload.message ? `📝 Комментарий: ${payload.message}` : undefined,
    payload.page_url ? `🔗 Страница: ${payload.page_url}` : undefined,
    "",
    payload.utm_source || payload.utm_medium || payload.utm_campaign ? "📊 UTM параметры:" : undefined,
    payload.utm_source ? `  • utm_source: ${payload.utm_source}` : undefined,
    payload.utm_medium ? `  • utm_medium: ${payload.utm_medium}` : undefined,
    payload.utm_campaign ? `  • utm_campaign: ${payload.utm_campaign}` : undefined,
    payload.utm_term ? `  • utm_term: ${payload.utm_term}` : undefined,
    payload.utm_content ? `  • utm_content: ${payload.utm_content}` : undefined,
    "",
    payload.communication ? "✅ Согласен на коммуникации" : "❌ Не согласен на коммуникации",
  ].filter(Boolean)

  const text = lines.join("\n")

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    })
    
    if (!response.ok) {
      console.error(`Telegram API error: ${response.status}`)
      const errorData = await response.json()
      console.error("Telegram error details:", errorData)
      return { ok: false, status: response.status }
    }
    
    console.log("Telegram message sent successfully")
    return { ok: response.ok, status: response.status }
  } catch (error) {
    console.error("Error sending to Telegram:", error)
    return { ok: false }
  }
}

export async function sendLead(payload: LeadPayload) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL
  let webhookResult = { ok: true, skipped: true as boolean, status: undefined as number | undefined }

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
    webhookResult = { ok: response.ok, status: response.status, skipped: false }
  }

  const telegramResult = await sendTelegram(payload)

  return {
    ok: webhookResult.ok && telegramResult.ok,
    webhook: webhookResult,
    telegram: telegramResult,
  }
}
