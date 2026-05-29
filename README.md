# 💱 Currency Converter CLI

A Node.js console application that fetches live exchange rates and converts between RUB, USD, EUR, and KZT right in your terminal.

---

## Demo

```
╔══════════════════════════════╗
║     Currency Converter CLI   ║
╚══════════════════════════════╝

Select conversion direction:
  1. RUB → USD
  2. RUB → EUR
  3. RUB → KZT
  4. USD → RUB
  5. EUR → RUB
  6. KZT → RUB
  0. Exit

Your choice: 1
Enter amount in RUB: 10000

✔ 10 000 RUB = 109.45 USD
  (Rate: 1 USD = 91.36 RUB — updated just now)
```

---

## Features

- Live exchange rates via [Exchange Rate API](https://www.exchangerate-api.com)
- Converts RUB ↔ USD, RUB ↔ EUR, RUB ↔ KZT
- Interactive terminal menu (no flags to memorize)
- Graceful error handling and configurable request timeout

---

## Requirements

- [Node.js](https://nodejs.org) v16 or higher
- npm (comes with Node.js)

```bash
node -v   # v16.0.0 or higher
npm -v
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your API key

Get a free key at [exchangerate-api.com](https://www.exchangerate-api.com), then create a `.env` file in the project root:

```bash
cp .env.example .env
```

Open `.env` and paste your key:

```
EXCHANGE_RATE_API_KEY=your_api_key_here
```

> **Note:** The free plan allows 1 500 requests per month. For personal use this is more than enough.

---

## Usage

```bash
node converter.js
```

Or via npm script:

```bash
npm start
```

Follow the interactive menu to choose a conversion direction and enter an amount.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Node.js | Runtime |
| [prompt-sync](https://www.npmjs.com/package/prompt-sync) | Synchronous terminal input |
| [Exchange Rate API](https://www.exchangerate-api.com) | Live exchange rate data |
| dotenv | API key management via `.env` |

---

## License

[MIT](./LICENSE) © 2024 your-name

---

# 💱 Currency Converter CLI (на русском)

Консольное приложение на Node.js для конвертации валют в реальном времени. Получает актуальные курсы через API и предоставляет удобное интерактивное меню прямо в терминале.

---

## Демо

```
╔══════════════════════════════╗
║     Currency Converter CLI   ║
╚══════════════════════════════╝

Выберите направление конвертации:
  1. RUB → USD
  2. RUB → EUR
  3. RUB → KZT
  4. USD → RUB
  5. EUR → RUB
  6. KZT → RUB
  0. Выход

Ваш выбор: 1
Введите сумму в RUB: 10000

✔ 10 000 RUB = 109.45 USD
  (Курс: 1 USD = 91.36 RUB — только что обновлено)
```

---

## Возможности

- Актуальные курсы валют через [Exchange Rate API](https://www.exchangerate-api.com)
- Конвертация RUB ↔ USD, RUB ↔ EUR, RUB ↔ KZT
- Интерактивное меню — никаких флагов запоминать не нужно
- Обработка ошибок и таймаут запроса к API

---

## Требования

- [Node.js](https://nodejs.org) версии 16 и выше
- npm (устанавливается вместе с Node.js)

```bash
node -v   # v16.0.0 или выше
npm -v
```

---

## Быстрый старт

### 1. Клонировать репозиторий

```bash
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
```

### 2. Установить зависимости

```bash
npm install
```

### 3. Настроить API-ключ

Получите бесплатный ключ на [exchangerate-api.com](https://www.exchangerate-api.com), затем создайте файл `.env` в корне проекта:

```bash
cp .env.example .env
```

Откройте `.env` и вставьте ключ:

```
EXCHANGE_RATE_API_KEY=ваш_ключ_здесь
```

> **Примечание:** Бесплатный план позволяет делать 1 500 запросов в месяц — для личного пользования этого более чем достаточно.

---

## Запуск

```bash
node converter.js
```

Или через npm-скрипт:

```bash
npm start
```

Следуйте интерактивному меню: выберите направление конвертации и введите сумму.

---

## Технологии

| Инструмент | Назначение |
|---|---|
| Node.js | Среда выполнения |
| [prompt-sync](https://www.npmjs.com/package/prompt-sync) | Синхронный ввод в терминале |
| [Exchange Rate API](https://www.exchangerate-api.com) | Актуальные курсы валют |
| dotenv | Управление API-ключом через `.env` |

---

## Лицензия

[MIT](./LICENSE) © 2024 your-name
