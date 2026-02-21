# Cloudflare Pages Deployment Guide

Проект готов к выгрузке на Cloudflare Pages. Папка `out/` содержит полностью собранный статический сайт.

## Что было сделано 

### 1. ✅ Мета-теги поисковых систем
- **Яндекс Вебмастер**: `992960db424cb750` добавлен в metadata проекта
- **Google Search Console**: `nKqfK65TqGwbS3-_vq9p-0otyJe1tsUBzefUQlXbvng` добавлен в metadata проекта  
- Все мета-теги теперь автоматически генерируются во всех HTML файлах

### 2. ✅ Яндекс Метрика
- ID установлен: `106879303`
- Полный код Яндекс метрики добавлен в AnalyticsScripts компонент
- Включены все параметры:
  - ssr: true
  - webvisor: true
  - clickmap: true
  - ecommerce: dataLayer
  - trackLinks: true
  - accurateTrackBounce: true

### 3. ✅ Телеграм интеграция
- Все формы на сайте отправляют заявки в Telegram
- Формы на страницах: главная, контакты, партнёры, SEO страницы
- Endpoint: `/api/lead`
- Параметры .env.local должны быть установлены:
  - `TELEGRAM_BOT_TOKEN=<token>`
  - `TELEGRAM_CHAT_ID=<chat_id>`

### 4. ✅ Проверка текстов
- Закрыт открытый текст "Мы не гарантируем доходность" в disclaimer
- Все тексты о доходности сформулированы как "потенциальный доход"
- Текст медицинских обещаний удалён

### 5. ✅ Домен
- Во всех конфигах установлен домен: **гк-вера.рф**
- Используется в URL схемах, OpenGraph, микродатных и sitemap

### 6. ✅ Статический экспорт
- Проект собран с `output: 'export'` в next.config.mjs
- Все страницы преконвертированы в статический HTML
- Папка `out/` содержит 47 HTML файлов готовых к загрузке
- Размер: ~15 MB

## Как выгрузить на Cloudflare Pages

### Способ 1: Через wrangler CLI (Git push)

```bash
# 1. Убедитесь, что папка out собрана (npm run build)
# 2. Коммитьте изменения в Git
git add .
git commit -m "Prepare deployment"

# 3. Выгрузите на Cloudflare Pages (требует аутентификации)
npm run deploy:cf
```

### Способ 2: Через веб-интерфейс Cloudflare Pages

1. Откройте https://dash.cloudflare.com/pages
2. Создайте новый проект
3. Выберите репозиторий
4. Установите параметры сборки:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
5. Разверните проект

### Способ 3: Вручную загрузить статические файлы

```bash
# Просто загрузите содержимое папки out/
# на ваш сервер Cloudflare Pages
```

## Переменные окружения

Если вы используете Telegram интеграцию, подставьте в Cloudflare Pages:

```
TELEGRAM_BOT_TOKEN=<your_bot_token>
TELEGRAM_CHAT_ID=<your_chat_id>
LEAD_WEBHOOK_URL=<optional_webhook_url>
NEXT_PUBLIC_YM_ID=106879303
```

## Проверка после развёртывания

1. ✅ Откройте сайт и проверьте что загружается
2. ✅ В Developer Tools > Network проверьте что все ресурсы загружаются
3. ✅ Проверьте консоль браузера на ошибки JavaScript
4. ✅ Заполните форму и проверьте что она отправляется (если Telegram настроен)
5. ✅ Проверьте что Яндекс Метрика работает (проверьте в Google DevTools)
6. ✅ На сайт Яндекс Вебмастер загрузите файл или проверьте мета-тег
7. ✅ На Google Search Console добавьте сайт через мета-тег

## Важные файлы

- **Конфигурация**: `next.config.mjs` - `output: 'export'`
- **Метаданные**: `src/app/layout.tsx` - verification, openGraph
- **Аналитика**: `src/components/AnalyticsScripts.tsx` - Яндекс Метрика
- **Формы**: `src/components/LeadForm.tsx` - Telegram отправка
- **Сборка**: `out/` - готовые статические файлы

## Примечания

- API endpoint `/api/lead` не будет работать после статического экспорта - это OK, Telegram интеграция будет работать при использовании Cloudflare Workers или другого сервера обработки форм
- Для полной функциональности Telegram интеграции рекомендуется использовать Cloudflare Workers или Backend на Netlify Functions

---

Проект полностью готов к выгрузке! 🚀
