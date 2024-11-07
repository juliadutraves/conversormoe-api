const apiKey = 'fe583598e333a55873863aa4';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;
// Define a chave de API e a URL base para buscar taxas de câmbio

// Função para buscar taxa de câmbio da API
async function getExchageRate(fromCurrency, toCurrency) {
    try {
        // Faz a requisição para a API usando a moeda de origem
        const response = await fetch(`${apiURL}${fromCurrency}`);
        const data = await response.json();

        // Verifica se a resposta da API foi bem-sucedida
        if (data.result === 'success') {
            // Retorna a taxa de câmbio para a moeda de destino
            return data.conversion_rates[toCurrency];
        } else {
            // Lança um erro caso a resposta não seja bem-sucedida
            throw new Error('Error ao buscar a taxa de câmbio');
        }
    } catch (error) {
        // Exibe uma mensagem de erro no console em caso de falha
        console.error("Erro:", error);
        return null;
    }
}

// Adiciona um evento ao formulário para converter o valor ao enviar o formulário
document.getElementById('currencyForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Previne o comportamento padrão do envio de formulário

    // Obtém o valor a ser convertido e as moedas selecionadas
    const valor = parseFloat(document.getElementById('Tamanho').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Busca a taxa de câmbio usando a função getExchageRate
    const exchangeRate = await getExchageRate(fromCurrency, toCurrency);

    if (exchangeRate) {
        // Calcula o valor convertido e exibe o resultado
        const convertedValue = valor * exchangeRate;
        const conversao = document.getElementById('conversao');
        conversao.textContent = `Resultado ${convertedValue.toFixed(2)} ${toCurrency}`;
    } else {
        // Exibe um alerta se houver erro na busca da taxa de câmbio
        alert('Erro de buscar cotação. Tente novamente');
    }
});

const apiKey = '321bb29611b0c54a60e61403';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;
// Define uma nova chave de API e URL base para a segunda busca de taxas de câmbio

// Função para buscar taxa de câmbio da API
async function getExchageRate(fromCurrency, toCurrency) {
    try {
        // Faz a requisição para a API usando a moeda de origem
        const response = await fetch(`${apiURL}${fromCurrency}`);
        const data = await response.json();

        // Verifica se a resposta da API foi bem-sucedida
        if (data.result === 'success') {
            // Retorna a taxa de câmbio para a moeda de destino
            return data.conversion_rates[toCurrency];
        } else {
            // Lança um erro caso a resposta não seja bem-sucedida
            throw new Error('Error ao buscar a taxa de câmbio');
        }
    } catch (error) {
        // Exibe uma mensagem de erro no console em caso de falha
        console.error("Erro:", error);
        return null;
    }
}

// Adiciona um evento ao formulário para converter o valor ao enviar o formulário
document.getElementById('currencyForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Previne o comportamento padrão do envio de formulário

    // Obtém o valor a ser convertido e as moedas selecionadas
    const valor = parseFloat(document.getElementById('Tamanho').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Busca a taxa de câmbio usando a função getExchageRate
    const exchangeRate = await getExchageRate(fromCurrency, toCurrency);

    if (exchangeRate) {
        // Calcula o valor convertido e exibe o resultado
        const convertedValue = valor * exchangeRate;
        const conversao = document.getElementById('conversao');
        conversao.textContent = `Resultado ${convertedValue.toFixed(2)} ${toCurrency}`;
    } else {
        // Exibe um alerta se houver erro na busca da taxa de câmbio
        alert('Erro de buscar cotação. Tente novamente');
    }
});

// Atualiza o símbolo da moeda ao selecionar uma nova moeda
function updateCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const currencySymbol = document.getElementById('currencySymbol');

    // Define o símbolo da moeda com base na moeda selecionada
    if (fromCurrency === "USD") {
        currencySymbol.textContent = "$";
    } else if (fromCurrency === "EUR") {
        currencySymbol.textContent = "€";
    } else if (fromCurrency === "BRL") {
        currencySymbol.textContent = "R$";
    }

    // Atualiza o placeholder do campo de valor
    document.getElementById('Tamanho').placeholder = "Valor";
}
