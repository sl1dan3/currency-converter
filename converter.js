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
            console.log('Ошибка при получении курса валют');
            return;
        }

        const data = await response.json();

        const rateUSD = data.rates.USD.toFixed(4);
        const rateEUR = data.rates.EUR.toFixed(4);
        const rateKZT = data.rates.KZT.toFixed(2);

        console.log('======================');
        console.log('    RubKZT Converter');
        console.log('======================');

        console.log('\nCurrent rate')
        console.log(`1 RUB = ${rateUSD}`)
        console.log(`1 RUB = ${rateEUR}`)
        console.log(`1 RUB = ${rateKZT}`)

        console.log('\n0 - Exit')



    } catch (error) {
        if (error.name ==='AbortError') {
            console.log('Запрос выполнялся больше 5 секунд')
            return;
        }

        console.log('Error:' + error.message);
    }

}

main()