/* eslint-disable indent */
import {sortPokemon} from './data.js';
import data from './data/pokemon/pokemon.js';


/*let button = document.getElementById('btn-validar');
let inputText = document.getElementById('caja-texto');
let container = document.getElementById('container');

button.addEventListener('click', function (event) {

});*/

const dataPokemons = data.pokemon.slice(0,50);
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
}
templateCard(dataPokemons);

document.getElementById("btn-sort").addEventListener("click", function () {
    console.log("sorteados", sortPokemon(dataPokemons));
    const dataSort = sortPokemon(dataPokemons);
    templateCard(dataSort);
});


