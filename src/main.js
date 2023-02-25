/* eslint-disable indent */
import { sortPokemon, sortReverse, filterType, filteredData } from "./data.js";
import data from "./data/pokemon/pokemon.js";
/*

const ordenar = document.getElementById("btn-filtrar");
const button = document.getElementById("btn-validar");
const container = document.getElementById("container");*/

const dataPokemons = data.pokemon.slice(0, 250);
const pokemonCards = document.querySelector(".contenedor-central");
//const resultContainer = document.querySelector(".card-contenedor");

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
         <p>Resistencia: ${fiftyPokemonArray.resistant}</p>
          <p>Debilidades: ${fiftyPokemonArray.weaknesses}</p>
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

const sortingType = document.querySelector("#selectType");
sortingType.addEventListener("change", (b) => {
  const valueOptionType = b.target.value;
  const poisonType = filterType(dataPokemons, valueOptionType);
  templateCard(poisonType);
});

const inputValue = document.getElementById("inputTextBox");
inputValue.addEventListener("input", (g) => {
  const valueInputText = g.target.value;
  const filterAndData = filteredData(dataPokemons, valueInputText);
  if (valueInputText.length > 0) {
    templateCard(filterAndData);
  }
  /*if (valueInputText.length === 0) {
    const htmlCode = `
    <p class="noResult errorText">Ingresa un nombre para poder buscar tu pokémon<p>
    `;
    resultContainer.innerHTML = htmlCode;
  } */
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  //función que va a borrar la búsqueda y regresarnos
  templateCard(dataPokemons);
});

/*document.getElementById("btn-sort").addEventListener("click", function () {
    const dataSort = sortPokemon(dataPokemons);
    templateCard(dataSort);
});*/
