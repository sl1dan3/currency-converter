# Currency Converter CLI

## Русский

Currency Converter CLI — это консольная программа на Node.js для конвертации валют.

Программа получает актуальный курс валют через API и позволяет конвертировать:

* RUB → USD
* RUB → EUR
* RUB → KZT
* USD → RUB
* EUR → RUB
* KZT → RUB

## Что должно быть установлено

Для запуска программы на компьютере должны быть установлены:

* Node.js
* npm

Проверить установку можно командами:

```bash
node -v
npm -v
```

## Установка

Склонируйте репозиторий:

```bash
git clone <ссылка-на-репозиторий>
```

Перейдите в папку проекта:

```bash
cd currency-converter
```

Установите зависимости:

```bash
npm install
```

## Запуск

Запустите программу командой:

```bash
node converter.js
```

Если в `package.json` добавлен скрипт `start`, можно запускать так:

```bash
npm start
```

## Возможности

* получение актуального курса валют;
* конвертация рублей в USD, EUR и KZT;
* конвертация USD, EUR и KZT в рубли;
* обработка ошибок при запросе к API;
* таймаут запроса;
* интерактивное меню в терминале.

## English

Currency Converter CLI is a Node.js console application for currency conversion.

The program fetches current exchange rates from an API and allows you to convert:

* RUB → USD
* RUB → EUR
* RUB → KZT
* USD → RUB
* EUR → RUB
* KZT → RUB

## Requirements

To run this program, you need to have installed:

* Node.js
* npm

You can check them with:

```bash
node -v
npm -v
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Go to the project folder:

```bash
cd currency-converter
```

Install dependencies:

```bash
npm install
```

## Usage

Run the program:

```bash
node converter.js
```

If the `start` script is added to `package.json`, you can run:

```bash
npm start
```

## Features

* fetches current exchange rates;
* converts RUB to USD, EUR and KZT;
* converts USD, EUR and KZT to RUB;
* handles API request errors;
* request timeout;
* interactive terminal menu.

## Technologies

* JavaScript
* Node.js
* prompt-sync
* Exchange Rate API
