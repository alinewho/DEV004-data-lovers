// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

import pokemon, { default as dataPokemon } from "./data/pokemon/pokemon.js";


//console.log("si está agarrando toda la data de pokemones",dataPokemon);

const slicedPokemons = Object.fromEntries(            //Función que separa el objeto tipo array, elegimos 50 pokemones
  Object.entries(dataPokemon.pokemon).slice(0, 50)
)

let htmlCode = ``;
Object.values(slicedPokemons).forEach(fiftyPokemonArray => {
  
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
</div>`
  console.log("iteracion 50",fiftyPokemonArray);
});

const pokemonCards = document.querySelector(".contenedor-central");
pokemonCards.innerHTML = htmlCode;
export default slicedPokemons;
