async function getWeather() {
    //Criar uma variável para pegar o valor do input cidade
    var cidade = document.getElementById('city').value

    //Conectar com API
    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    //Variável para consumir o JSON
    var tempCelsius = resposta.data.main.temp

    //Imprimir no FRONT END
    document.getElementById('temperatura').innerHTML = `A Temperatura atual da cidade ${cidade} é de: ${tempCelsius.toFixed(0)} °C `;
}

//Chamar a função
getWeather();