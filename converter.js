import promptSync from 'prompt-sync';

const prompt = promptSync();

const main = async () => {
    try {
        const controller = new AbortController();

        const responseTimer = setTimeout(() => {
            controller.abort();
        }, 5000);

        const response = await fetch('https://open.er-api.com/v6/latest/RUB', {
            signal: controller.signal
        });

        clearTimeout(responseTimer);

        if (!response.ok) {
            console.log('Error while retrieving exchange rates');
            return;
        }

        const data = await response.json();

        const rateUSD = data.rates.USD;
        const rateEUR = data.rates.EUR;
        const rateKZT = data.rates.KZT;

        console.log('======================');
        console.log('Currency Converter CLI');
        console.log('======================');

        console.log('\nCurrent rate')
        console.log(`1 RUB = ${rateUSD.toFixed(4)}`);
        console.log(`1 RUB = ${rateEUR.toFixed(4)}`);
        console.log(`1 RUB = ${rateKZT.toFixed(2)}`);

        console.log('\n0 - Exit');
        console.log('1 - RUB => USD, EUR, KZT');
        console.log('2 - USD, EUR, KZT => RUB');

        const conversionType = Number(prompt('\nChoose an action: '))

        if (conversionType < 0 || conversionType > 2) {
            console.log('\nExiting program.');
            throw new Error('Please enter a correct action');
        }

        if (conversionType === 0) {
            console.log('Program closed. Come back anytime!');
            return;
        }

        if (conversionType === 1) {
            console.log('1 - RUB => USD')
            console.log('2 - RUB => EUR')
            console.log('3 - RUB => KZT')

            const targetCurrencyChoice = Number(prompt('\nChoose an action: '))

            if (targetCurrencyChoice < 1 || targetCurrencyChoice > 3) {
                console.log('\nExiting program.');
                throw new Error('Invalid input');
            } else if (targetCurrencyChoice === 1) {
                const amount = Number(prompt('\nEnter the amount: '))

                if (amount < 0) {
                    console.log('\nExiting program.');
                    throw new Error('Invalid amount');
                } else {
                    const result = amount * rateUSD
                    console.log('Result:', result.toFixed(2))
                    return;
                }

            } else if (targetCurrencyChoice === 2) {
                const amount = Number(prompt('\nEnter the amount: '))

                if (amount < 0) {
                    console.log('\nExiting program.');
                    throw new Error('Invalid amount');
                } else {
                    const result = amount * rateEUR
                    console.log('Result:', result.toFixed(2))
                    return;
                }

            } else if (targetCurrencyChoice === 3) {
                const amount = Number(prompt('\nEnter the amount: '))

                if (amount < 0) {
                    console.log('\nExiting program.');
                    throw new Error('Invalid amount');
                } else {
                    const result = amount * rateKZT
                    console.log('Result:', result.toFixed(2))
                    return;
                }
            }

        }

        if (conversionType === 2) {
            console.log('1 - USD => RUB')
            console.log('2 - EUR => RUB')
            console.log('3 - KZT => RUB')

            const sourceCurrencyChoice = Number(prompt('\nChoose an action: '))

            if (sourceCurrencyChoice < 1 || sourceCurrencyChoice > 3) {
                console.log('\nExiting program.');
                throw new Error('Invalid input');
            } else if (sourceCurrencyChoice === 1) {
                const amount = Number(prompt('\nEnter the amount: '));

                if (amount < 0) {
                    console.log('\nExiting program.');
                    throw new Error('Invalid amount');
                } else {
                    const result = amount / rateUSD
                    console.log('Result:', result.toFixed(2))
                    return
                }
            } else if (sourceCurrencyChoice === 2) {
                const amount = Number(prompt('\nEnter the amount: '));

                if (amount < 0) {
                    console.log('\nExiting program.');
                    throw new Error('Invalid input');
                } else {
                    const result = amount / rateEUR
                    console.log('Result:', result.toFixed(2))
                    return
                }
            } else if (sourceCurrencyChoice === 3) {
                const amount = Number(prompt('\nEnter the amount: '));

                if (amount < 0) {
                    console.log('\nExiting program.');
                    throw new Error('Invalid input');
                } else {
                    const result = amount / rateKZT
                    console.log('Result:', result.toFixed(2))
                    return;
                }
            }
        }

    } catch (error) {
        if (error.name ==='AbortError') {
            console.log('The request took more than 5 seconds to complete.')
            return;
        }

        console.log('Error:', error.message);
    }
}

main()