# Развертывание на Cloudflare Pages

## Быстрая настройка

### 1. Проверьте что установлены зависимости
```bash
npm install
```

### 2. Установите Telegram credentials

Отредактируйте `.env.local`:
```
TELEGRAM_BOT_TOKEN=<ваш_bot_token>
TELEGRAM_CHAT_ID=<ваш_chat_id>
```

Или установите их через Cloudflare dashboard после развертывания.

### 3. Развертывание

#### Вариант A: Через Git (Рекомендуется)
```bash
# 1. Залогинитесь в Cloudflare
npm exec wrangler@latest login

# 2. Создайте Pages проект
npm exec wrangler@latest pages project create lok-vera

# 3. Выполните коммит и push в Git репозиторий
git add .
git commit -m "Setup Cloudflare Pages with Workers"
git push

# 4. Cloudflare автоматически разберет ваш git репозиторий
# Зайдите на https://dash.cloudflare.com/pages
```

#### Вариант B: Прямое развертывание через wrangler
```bash
# Собираем проект
npm run build

# Развертываем Pages с functions
npm exec wrangler@latest pages deploy . --project-name=lok-vera
```

### 4. Установка Secrets в Cloudflare Pages

После развертывания зайдите в Cloudflare Dashboard:

1. Откройте **Workers & Pages** → **Pages** → выбрать проект **lok-vera**
2. Перейдите в **Settings** → **Environment variables**
3. Добавьте следующие переменные:

```
TELEGRAM_BOT_TOKEN = <ваш_bot_token>
TELEGRAM_CHAT_ID = <ваш_chat_id>
```

Убедитесь что отметили их как **Secrets** а не обычные переменные!

## Как получить Telegram credentials?

### Шаг 1: Создайте Telegram Bot
1. Откройте чат с [@BotFather](https://t.me/botfather) в Telegram
2. Введите `/newbot`
3. Следуйте инструкциям
4. Скопируйте полученный **Bot Token** (выглядит как `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)

### Шаг 2: Получите Chat ID
1. Отправьте сообщение вашему боту
2. Откройте в браузере: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Найдите `"chat":{"id": <CHAT_ID>}` - это ваш Chat ID

Пример API ответа:
```json
{
  "ok": true,
  "result": [
    {
      "update_id": 123456789,
      "message": {
        "message_id": 1,
        "chat": {
          "id": 987654321
        }
      }
    }
  ]
}
```

## Проверка что всё работает

1. Откройте сайт: `https://гк-вера.рф` (или ваш Cloudflare Pages URL)
2. Заполните форму "Получить презентацию"
3. Нажмите кнопку
4. Проверьте что пришла заявка в Telegram

## Структура проекта для Cloudflare Pages

```
project/
├── functions/
│   └── api/
│       └── lead.ts         ← Cloudflare Worker function
├── src/
│   └── app/                ← Next.js приложение (static export)
├── public/                 ← Статические файлы
├── wrangler.toml           ← Конфигурация Cloudflare
└── next.config.mjs         ← Конфигурация Next.js
```

## Если возникают проблемы

### API возвращает 404
- Убедитесь что файл находится в `functions/api/lead.ts`
- Проверьте что Cloudflare видит функцию в dashboard

### API возвращает 500
- Проверьте консоль Cloudflare (Real-Time Logs)
- Убедитесь что TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID установлены
- Проверьте что токен и chat ID корректные

### Telegram не получает сообщения
- Убедитесь что TELEGRAM_BOT_TOKEN корректный
- Убедитесь что TELEGRAM_CHAT_ID корректный
- Отправьте тестовое сообщение боту в Telegram перед использованием

## Загрузка изображений

Убедитесь что все изображения находятся в папке `public/images/` и правильно путях в коде.

## Безопасность

- ✅ Telegram токен защищен в Secrets
- ✅ CORS ограничен на same-origin
- ✅ Валидация обязательных полей
- ✅ Error handling для всех API вызовов

---

Всё должно работать! Если есть вопросы - проверьте Cloudflare dashboard и консоль браузера.
