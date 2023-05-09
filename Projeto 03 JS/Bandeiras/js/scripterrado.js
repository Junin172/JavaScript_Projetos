let searchBtn = document.getElementById("search-btn");
let countryInp= document.getElementById("country-inp");
searchBtn.addEventListener('click',()=>{
let countryName = "Brasil";
let finalURL=`https://restcountries.com/v3.1/name/${countryInp.value}?fullText=true`;

console.log(finalURL);
fetch(finalURL).then((response)=>response.json()).then((data)=>{
    console.log(data[0]);
    console.log(data[0].capital[0]);
    console.log(data[0].flags.svg);
    console.log(data[0].name.coomon);
    console.log(data[0].conttinents[0]);
    console.log(Object.keys(data[0].currencies)[0]);
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    console.log(Object.values(data[0].languages).tostring().split(",").join(", ")
    );
    result.innerHTML = `
    <img src="${data[0].flags.svg}"
    class="flag=img"> 
    <h2>${data[0].name.common}</h2>
    <div class"data-wrapper">
        <h4>Capital:</h4>
        <span>${data[0].capital[0]}</span>
    </div>
    `;

});


});