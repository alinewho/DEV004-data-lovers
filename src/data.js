/*const slicedPokemons = Object.fromEntries(   //Función que separa el objeto tipo array, elegimos 50 pokemones
  Object.entries(dataPokemon.pokemon).slice(0, 50)
);*/
export const sortPokemon = (data) => {
  const sortedPokemons = data.sort( (a, b) => {
    return a.name.localeCompare(b.name);
    /*if (a.name > b.name) {   //use later
      return 1; 
    }
    /*if (a.name > b.name) {
      return 1;
    }*/
  });
  return sortedPokemons;
}

export const sortReverse = (data) => {
  const sortedZA = data.sort(function (a, b) {
    return b.name.localeCompare(a.name);
    /* if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;*/
  });
  return sortedZA;
} 

export const filterType = (data, typeInPokemon) => {
  const typesOfPokemon = data.filter(types => types.type.includes(typeInPokemon));
  return typesOfPokemon;
}
 
export const filteredData =  (data, inputText) => {
  if (inputText && inputText.trim().length > 0){
    inputText = inputText.trim().toLowerCase()
    const filtrating = data.filter(names => names.name.includes(inputText))
    return filtrating
  }
}
