/* eslint-disable indent */
import { sortPokemon, sortReverse, typeOrder} from "./data.js";
import data from "./data/pokemon/pokemon.js";
/*

const ordenar = document.getElementById("btn-filtrar");
const button = document.getElementById("btn-validar");
const inputText = document.getElementById("caja-texto");
const container = document.getElementById("container");*/


const dataPokemons = data.pokemon.slice(0, 50);
const pokemonCards = document.querySelector(".contenedor-central");

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
  if (valueOption === "3") {
    const dataSortType = typeOrder(dataPokemons);
    templateCard(dataSortType);
  }
});
/*document.getElementById("btn-sort").addEventListener("click", function () {
    console.log("sorteados", sortPokemon(dataPokemons));
    const dataSort = sortPokemon(dataPokemons);
    templateCard(dataSort);
});*/
