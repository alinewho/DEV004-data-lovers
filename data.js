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
  inputText = inputText.trim().toLowerCase()
  const filtrating = data.filter(names => names.name.includes(inputText))
  return filtrating
}

export const averageData = (data) => {
  const baseAttackValues = (data.map(a => a.stats['base-attack']));
  const baseConverted = baseAttackValues.map(function(str) {
    return parseInt(str);
  });
  const sum = baseConverted.reduce((acc, n) => (acc += n, acc), 0);
  const averageAttack = sum/baseAttackValues.length;
  //const rounded = promAttack.toFixed(2);
  return averageAttack
}


/*for (let index = 0; index < data.length-1; index++) {
    const a = Number(data[index].size.height.slice(0, data[index].size.height.length-1));
    const b = Number(data[index+1].size.height.slice(0, data[index+1].size.height.length-1));
    console.log(a, b);
    inputText = Number(inputText);
    const closest = ((a, b) => {
      console.log((Math.abs(b - inputText)  < Math.abs(a - inputText)) ? b : a);
      return (Math.abs(b - inputText) < Math.abs(a - inputText)) ? b : a;
    });
    return closest(a, b);
  }

/*const closest = data.size.height.reduce((a, b) => {
    return (Math.abs(b - inputText) < Math.abs(a - inputText) ? b : a);
  });
  console.log(closest);
  //return closest;*/