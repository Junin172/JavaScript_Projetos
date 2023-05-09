let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.getElementById("result");

// Adiciona evento de clique no botão de pesquisa
searchBtn.addEventListener('click', () => {
    searchCountry();
});

// Adiciona evento de teclado no campo de entrada
countryInp.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) { // 13 é o código da tecla "Enter"
        searchCountry();
    }
});

// Função para buscar informações do país
function searchCountry() {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data[0]);
            // console.log(data[0].capital[0]);
            // console.log(data[0].flags.svg);
            // console.log(data[0].name.common);
            // console.log(data[0].continents[0]);
            // console.log(Object.keys(data[0].currencies)[0]);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            // console.log(Object.values(data[0].languages).toString().split(",").join(", "));

            result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img"> 
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div"data-wrapper">
                <h4>Capital: </h4><span>${data[0].capital[0]}</span>
        </div>
        </div>

        <div class="wrapper">
            <div"data-wrapper">
                <h4>Continente: </h4><span>${data[0].continents[0]}</span>
        </div>
        </div>

        <div class="wrapper">
            <div"data-wrapper">
                <h4>População: </h4><span>${data[0].population}</span>
        </div>
        </div>

        <div class="wrapper">
            <div"data-wrapper">
                <h4>Moeda: </h4><span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
        </div>
        </div>

        <div class="wrapper">
            <div"data-wrapper">
                <h4>Principais Idiomas: </h4><span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
        </div>
        </div>
      `;
        }).catch(()=>{
            if(countryName.length == 0){
            result.innerHTML = `<h3>O campo de entrada não pode estar vazio</h3>`;
        }
        else{
            result.innerHTML = `<h3>Por favor insira um nome corretamente de um país (em inglês). </h3>`;
        }
        });
    }