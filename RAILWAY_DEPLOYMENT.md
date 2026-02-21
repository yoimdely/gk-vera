# Deploy on Railway via GitHub

## What is already configured

- Next.js runs in server mode (`next.config.mjs` no longer uses `output: "export"`).
- API endpoint for leads is available at `src/app/api/lead/route.ts`.
- `railway.toml` is added with start command and healthcheck.

## GitHub and Railway steps

1. Push this project to GitHub.
2. In Railway: `New Project` -> `Deploy from GitHub repo`.
3. Select repository and branch.
4. In Railway `Variables`, set:
   - `LEAD_WEBHOOK_URL`
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `NEXT_PUBLIC_GA_ID` (optional)
   - `NEXT_PUBLIC_YM_ID` (optional)
5. Click `Deploy`.

## Build and start on Railway

- Build: `npm run build`
- Start: `npx next start -H 0.0.0.0 -p $PORT` (from `railway.toml`)
