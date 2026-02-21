# ЛОК VERA / ВЕРА - Готово к развертыванию на Cloudflare Pages

## 🚀 Что сделано

✅ **Фронтенд**: Next.js проект с SSR (все страницы рендерятся на сервере Cloudflare Pages)  
✅ **API**: Cloudflare Worker Function для обработки форм (`functions/api/lead.ts`)  
✅ **Telegram**: Интеграция отправки заявок в Telegram через worker  
✅ **SEO**: Подключены мета-теги Яндекс и Google Search Console  
✅ **Аналитика**: Яндекс Метрика (ID: 106879303)  

## 📋 Пошаговая инструкция развертывания

### Шаг 1: Создайте Telegram Bot

1. Откройте чат [@BotFather](https://t.me/botfather) в Telegram
2. Введите `/newbot`
3. Скопируйте **Bot Token** (выглядит как `123456789:ABCDEFghijklmnopqrstuvwxyz`)
4. Сохраните его - понадобится позже

### Шаг 2: Получите Chat ID

1. Отправьте любое сообщение созданному боту
2. В браузере откройте:
```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```
3. Найдите `"chat":{"id": <ЧИСЛО>}` - это ваш **Chat ID**
4. Сохраните его

### Шаг 3: Подключите к Cloudflare Pages

**Если вы уже развернули на gk-vera3.pages.dev:**

1. Откройте https://dash.cloudflare.com/pages
2. Выберите проект **lok-vera** (или как вы его назвали)
3. **Зайдите в Settings → Environment variables**
4. Добавьте через кнопку "Add variable":
   - **Имя**: `TELEGRAM_BOT_TOKEN`
   - **Значение**: `<ваш_bot_token>`
   - **Окружение**: выберите оба (Production + Preview)
   - **Тип**: **Secret** (обязательно!)
5. Повторите для `TELEGRAM_CHAT_ID`

### Шаг 4: Проверьте что всё работает

1. Откройте сайт
2. Заполните форму "Получить презентацию"
3. Нажмите отправить
4. Проверьте что пришла заявка в Telegram

## 🔧 Если форма всё ещё не работает

**Проверьте в Cloudflare dashboard:**

1. **Real-Time Logs**: Workers & Pages → LOG → посмотрите ошибки
2. **DevTools браузера (F12)**:
   - Откройте Network tab
   - Заполните форму
   - Посмотрите response на POST запрос к `/api/lead`
   - Должен быть статус **200** (успех) или **405** (worker не подключен)

**Если видите 405 Method Not Allowed:**
- Убедитесь что файл `functions/api/lead.ts` синхронизирован на Cloudflare
- Попробуйте пересоздать проект или реdeployить

**Если видите 500 Error:**
- Проверьте консоль Cloudflare (Real-Time Logs)
- Убедитесь что TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID установлены в Settings → Environment variables

## 📱 Тестирование Telegram

Перед развертыванием на продакшене протестируйте токен:

```bash
# В терминале (замените ТОКЕН и CHAT_ID)
curl -X POST https://api.telegram.org/bot<ТОКЕН>/sendMessage \
  -H "Content-Type: application/json" \
  -d '{"chat_id":"<CHAT_ID>","text":"Тест"}'
```

Если видите `"ok":true` - токен работает ✅

## 📂 Структура файлов

```
.
├── functions/
│   └── api/
│       └── lead.ts              ← Cloudflare Worker (обрабатывает формы)
├── src/
│   ├── app/                     ← Next.js приложение
│   │   ├── layout.tsx           ← Мета-теги (Яндекс, Google)
│   │   ├── page.tsx             ← Главная страница
│   │   ├── contacts/            ← Страница контактов
│   │   └── ...
│   ├── components/
│   │   ├── LeadForm.tsx          ← Форма заявок (отправляет на /api/lead)
│   │   └── AnalyticsScripts.tsx  ← Яндекс Метрика
│   └── lib/
│       └── sendLead.ts          ← (уже не используется - всё в worker)
├── public/                      ← Изображения
├── wrangler.toml                ← Конфиг Cloudflare
├── next.config.mjs              ← Конфиг Next.js
└── package.json
```

## 🌐 Домены

Установлено везде:
- Domain: `гк-вера.рф`
- Яндекс Вебмастер: `992960db424cb750`
- Google Search Console: `nKqfK65TqGwbS3-_vq9p-0otyJe1tsUBzefUQlXbvng`

Все мета-теги автоматически добавляются во все HTML страницы.

## ⚙️ Переменные окружения (Environment Variables)

На Cloudflare Pages установите как **Secrets**:

```env
TELEGRAM_BOT_TOKEN = <bot_token>
TELEGRAM_CHAT_ID = <chat_id>
```

Опционально:
```env
NEXT_PUBLIC_YM_ID = 106879303
```

## 🔐 Безопасность

- ✅ Telegram токен защищен в Secrets (не видны в коде)
- ✅ CORS ограничен на same-origin
- ✅ Валидация обязательных полей на сервере
- ✅ Error handling для всех API вызовов

## 📚 Дополнительные ресурсы

- [Документация Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers Functions](https://developers.cloudflare.com/pages/functions/)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Next.js полный гайд](https://nextjs.org/learn)

---

**Резюме**: Файл `functions/api/lead.ts` будет автоматически работать на Cloudflare Pages после развертывания. Просто установите Telegram credentials через Cloudflare dashboard Settings → Environment Variables и всё заработает! 🎉
