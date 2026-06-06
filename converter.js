import promptSync from 'prompt-sync';

const prompt = promptSync();

const API_URL = 'https://open.er-api.com/v6/latest/RUB';

const CURRENCIES = ['USD', 'EUR', 'KZT'];

async function fetchRates() {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);

    try {
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) throw new Error('Error while retrieving exchange rates');

        const data = await response.json();
        return Object.fromEntries(CURRENCIES.map(cur => [cur, data.rates[cur]]));
    } finally {
        clearTimeout(timer);
    }
}

function convertFromRub(amount, rate) {
    return amount * rate;
}

function convertToRub(amount, rate) {
    return amount / rate;
}

function promptNumber(message, { min = -Infinity, max = Infinity } = {}) {
    const value = Number(prompt(message));
    if (isNaN(value) || value < min || value > max) {
        throw new Error(`Invalid input: expected a number between ${min} and ${max}`);
    }
    return value;
}

function promptCurrency(label) {
    console.log(`\nConvert ${label}:`);
    CURRENCIES.forEach((cur, i) => console.log(`  ${i + 1} - ${cur}`));

    const choice = promptNumber('\nChoose currency: ', { min: 1, max: CURRENCIES.length });
    return CURRENCIES[choice - 1];
}

function printRates(rates) {
    console.log('\n======================');
    console.log(' Currency Converter CLI');
    console.log('======================');
    console.log('\nCurrent rates (1 RUB):');
    CURRENCIES.forEach(cur => console.log(`  ${cur}: ${rates[cur].toFixed(cur === 'KZT' ? 2 : 4)}`));
}

function printResult(amount, from, result, to) {
    console.log(`\nResult: ${amount.toFixed(2)} ${from} = ${result.toFixed(2)} ${to}`);
}

function runConverter(rates) {
    printRates(rates);

    console.log('\n  0 - Exit');
    console.log('  1 - RUB => USD/EUR/KZT');
    console.log('  2 - USD/EUR/KZT => RUB');

    const action = promptNumber('\nChoose an action: ', { min: 0, max: 2 });

    if (action === 0) {
        console.log('\nProgram closed. Come back anytime!');
        return;
    }

    const isFromRub = action === 1;
    const currency = promptCurrency(isFromRub ? 'RUB =>' : '=> RUB');
    const amount = promptNumber('\nEnter the amount: ', { min: 0 });

    const result = isFromRub
        ? convertFromRub(amount, rates[currency])
        : convertToRub(amount, rates[currency]);

    const [from, to] = isFromRub ? ['RUB', currency] : [currency, 'RUB'];
    printResult(amount, from, result, to);
}

async function main() {
    try {
        const rates = await fetchRates();
        runConverter(rates);
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('The request took more than 5 seconds to complete.');
        } else {
            console.log('Error:', error.message);
        }
    }
}

main();