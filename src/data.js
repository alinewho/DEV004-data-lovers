// estas funciones son de ejemplo
//console.log("si está agarrando toda la data de pokemones",dataPokemon);

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
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return sortedZA;
} 

export const typeOrder = (data) => {
  const orderByType = data.sort(function (a, b) {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  });
  return orderByType;
}