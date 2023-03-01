/* eslint-disable indent */
import { sortPokemon, sortReverse, filterType, filteredData, averageData } from "./data.js";
import data from "./data/pokemon/pokemon.js";
/*

const ordenar = document.getElementById("btn-filtrar");
const button = document.getElementById("btn-validar");
const container = document.getElementById("container");*/

const dataPokemons = data.pokemon.slice(0, 250);
const pokemonCards = document.querySelector(".cardContainer");
const errorContainer = document.querySelector(".error");
//const operationContainer = document.getElementById("operation");
//const constContainer = document.querySelector(".resultContainer");


const templateCard = (pokemones) => {
  pokemonCards.innerHTML = "";
  let htmlCode = ``;
  pokemones.forEach((fiftyPokemonArray) => {
    htmlCode += `
      <div class="card">
      <img src="${fiftyPokemonArray.img}"> 
      <div class="contenido">
        <h3>${fiftyPokemonArray.name}</h3>
        <p>Número: ${fiftyPokemonArray.num} </p>
          <p>Tipo: ${fiftyPokemonArray.type}</p>
         <p>Altura: ${fiftyPokemonArray.size.height}</p>
          <p>Peso: ${fiftyPokemonArray.size.weight}</p>
        </p>
      </div>
    </div>`;
    
  });
  pokemonCards.innerHTML = htmlCode;
};
templateCard(dataPokemons);

const sortingList = document.querySelector("#selectSort");
sortingList.addEventListener("change", (e) => {
  const valueOption = e.target.value;
  if (valueOption === "1") {
    const dataSortAZ = sortPokemon(dataPokemons);
    templateCard(dataSortAZ);
  }
  if (valueOption === "2") {
    const dataSortZA = sortReverse(dataPokemons);
    templateCard(dataSortZA);
  }
});


const templatePromedio = (data) => {
  errorContainer.innerHTML = "";
  let htmlCode = ``;
 
    htmlCode += `
    <p class="averageBox averageText"> ¿Sabías que? &#128269	
    <br>
    En promedio el ataque de este tipo de pokémon es de ${data}?<p>  
    `;
  errorContainer.innerHTML = htmlCode;
};

const sortingType = document.querySelector("#selectType");
sortingType.addEventListener("change", (b) => {
  const valueOptionType = b.target.value;
  const poisonType = filterType(dataPokemons, valueOptionType);
  templateCard(poisonType);
  console.log("poison Function",poisonType)
  const finalAverage = averageData(poisonType);
  templatePromedio(finalAverage);
});



const inputValue = document.getElementById("inputTextBox");
inputValue.addEventListener("input", (g) => {
  const valueInputText = g.target.value;
  const filterAndData = filteredData(dataPokemons, valueInputText);
  if (valueInputText.length > 0) {
    errorContainer.innerHTML = "";
    if (filterAndData.length === 0) {
      const htmlCode = `
    <p class="noResult errorText">No se encontró ningún pokémon que coincida con la búsqueda
    <br> Intenta con otro nombre<p>
    `;
    errorContainer.innerHTML = htmlCode;
    }
    if (filterAndData.length > 0) {
      templateCard(filterAndData);
    }
  }
});

const returnButton = document.getElementById("clear");
returnButton.addEventListener("click", () => {
  //función que va a borrar la búsqueda y regresarnos
  errorContainer.innerHTML = "";
  templateCard(dataPokemons);
});

/*const operationSection = document.querySelector(".btnOperation");
operationSection.addEventListener("click", function () {
  const htmlCodeOperation = `
  <br>
  <input placeholder= "Ingresa tu altura en metros" class="inputOperation" id="inputOperation"></input>
  `;
  operationContainer.innerHTML = htmlCodeOperation;
  const inputTextOperation = document.getElementById("inputOperation");
  inputTextOperation.addEventListener("input", (h) => {
    const valueInputOperation = h.target.value;
    const computedData = heightOperation(dataPokemons, valueInputOperation);
    //  templateCard(computedData);
  })
});

/*document.getElementById("btn-sort").addEventListener("click", function () {
    const dataSort = sortPokemon(dataPokemons);
    templateCard(dataSort);
});*/
