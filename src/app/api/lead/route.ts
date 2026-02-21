import { NextResponse } from "next/server"

import { sendLead, type LeadPayload } from "@/lib/sendLead"

export const runtime = "nodejs"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  })
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload

    if (!payload?.phone || !payload.phone.trim()) {
      return NextResponse.json(
        { ok: false, error: "Phone is required" },
        { status: 400, headers: corsHeaders }
      )
    }

    const result = await sendLead(payload)

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: "Lead delivery failed", result },
        { status: 502, headers: corsHeaders }
      )
    }

    return NextResponse.json(
      { ok: true, message: "Lead sent successfully" },
      { status: 200, headers: corsHeaders }
    )
  } catch (error) {
    console.error("Lead request failed:", error)
    return NextResponse.json(
      { ok: false, error: "Invalid request payload" },
      { status: 400, headers: corsHeaders }
    )
  }
}
