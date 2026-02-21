# ЛОК VERA / ВЕРА — сайт отдела продаж

## Быстрый старт

```bash
npm install
npm run dev
```

Сайт поднимается на `http://localhost:3000`.

## Где менять данные

- Телефон, домен, базовые тексты: `src/content/config.ts`
- SEO-лендинги: `src/content/landingPages.ts`
- Пресс-центр (статьи): `src/content/posts/index.ts`
- Главная страница: `src/app/page.tsx`
- Медицинская концепция: `src/app/medical/page.tsx`
- Инвестиции: `src/app/invest/page.tsx`
- Локация: `src/app/location/page.tsx`

## Заменить изображения

Изображения лежат в `public/images`:

- Рендеры: `public/images/renders`
- Стоки: `public/images/stock`
- Плейсхолдеры: `public/images/placeholders`

Если имена меняются — обновите пути в соответствующих страницах (`src/app/**/page.tsx`).

## Лиды, webhook и Telegram

- Серверная отправка: `src/lib/sendLead.ts`
- API-эндпоинт: `src/app/api/lead/route.ts`

Webhook (CRM/склад заявок):

```
LEAD_WEBHOOK_URL=https://ваш-endpoint
```

Telegram-уведомления:

```
TELEGRAM_BOT_TOKEN=123456:abcdefg
TELEGRAM_CHAT_ID=123456789
```

Форма отправляет поля: `name`, `phone`, `contact_method`, `message`, `page_url`, `utm_*`, `communication`.

## Аналитика

Опционально подключаются GA4 и Яндекс.Метрика через переменные окружения:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXX
NEXT_PUBLIC_YM_ID=12345678
```

События: `submit_lead`, `click_phone`, `click_cta`, `open_modal`.

## SEO

- Метаданные: в `src/app/layout.tsx` и в файлах страниц.
- Schema.org: Organization, WebSite, BreadcrumbList, Article, FAQPage.
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
- RSS: `src/app/press/rss.xml/route.ts`

## Деплой на Cloudflare Pages

### Вариант 1. Через UI Cloudflare
1. Запушьте репозиторий в GitHub/GitLab.
2. Создайте новый проект в Cloudflare Pages и подключите репозиторий.
3. Build command:

```
npm run build:cf
```

4. Output directory:

```
.vercel/output/static
```

### Вариант 2. Через wrangler (из проекта)

1. Авторизуйтесь:

```
wrangler login
```

2. Соберите и задеплойте:

```
npm run build:cf
npm run deploy:cf
```

Если имя проекта в Cloudflare другое — обновите `wrangler.toml` и скрипт `deploy:cf` в `package.json`.

## Примечание

Сайт партнёрский, информация носит справочный характер и не является публичной офертой.
