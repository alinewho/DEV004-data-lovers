import { sortPokemon, filteredData, sortReverse, filterType, averageData } from '../src/data.js';

const data = [
  {"name": "bulbasaur",
    "type": [
      "grass",
      "poison"
    ],
    "stats": {
      "base-attack": "118"}
  },
  {"name": "wartortle",
    "type": [
      "water"
    ],
    "stats": {
      "base-attack": "126"}
  },
  {"name": "pidgey",
    "type": [
      "normal",
      "flying"
    ],
    "stats": {
      "base-attack": "85"}
  },
  { "name": "rattata",
    "type": [
      "normal"
    ],
    "stats": {
      "base-attack": "103"}
  }
]

describe("Esta es la función sobre ordenar alfabeticamente", () => {
  it('sortPokemon es una función', () => {
    expect(typeof sortPokemon).toBe('function');
  });

  it('sortPokemon ordena la data A-Z ', () => { 
    const resultOrder = [
      {"name": "bulbasaur",
        "type": [
          "grass",
          "poison"
        ],
        "stats": {
          "base-attack": "118"}
      },
      {"name": "pidgey",
        "type": [
          "normal",
          "flying"
        ],
        "stats": {
          "base-attack": "85"}
      },
      { "name": "rattata",
        "type": [
          "normal"
        ],
        "stats": {
          "base-attack": "103"}
      },
      {"name": "wartortle",
        "type": [
          "water"
        ],
        "stats": {
          "base-attack": "126"}
      }
    ]
    expect(sortPokemon(data)).toEqual(resultOrder);

    /*const savePokemon =  sortPokemon(data);
    expect(savePokemon[0].name).toEqual("bulbasaur");
    expect(savePokemon[1].name).toEqual("pidgey");
    expect(savePokemon[2].name).toEqual("wartortle");*/
  });
});

describe ("Esta función filtra alfabéticamente Z-A (al revés)", () => {
  it ("sortReverse es una función", () => {
    expect(typeof sortReverse).toBe("function");
  });
  it ("sortReverse ordena la data de Z-A", () => {
    const sortedReverseExample = [
      {"name": "wartortle",
        "type": [
          "water"
        ],
        "stats": {
          "base-attack": "126"}
      },
      { "name": "rattata",
        "type": [
          "normal"
        ],
        "stats": {
          "base-attack": "103"}
      },
      {"name": "pidgey",
        "type": [
          "normal",
          "flying"
        ],
        "stats": {
          "base-attack": "85"}
      },
      {"name": "bulbasaur",
        "type": [
          "grass",
          "poison"
        ],
        "stats": {
          "base-attack": "118"}
      }
    ];
    expect (sortReverse(data)).toEqual(sortedReverseExample);
  });
});

describe("filterType filtra los pokemones por tipo", () => {
  it('filterType retorna un array que incluye a "pidgey" y "rattata" cuando se busca el tipo "normal"', () => {
    const typeOrder = [
      {"name": "rattata",
        "type": [
          "normal"
        ],
        "stats": {
          "base-attack": "103"}
      },
      {"name": "pidgey",
        "type": [
          "normal",
          "flying"
        ],
        "stats": {
          "base-attack": "85"}
      }
    ];
    expect (filterType(data, "normal")).toEqual(typeOrder);
  });
  it ('filterType retorna un array  que incluye a "bulbasaur" cuando se busca el tipo "poison"', () => {
    const typeOrder = [
      {"name": "bulbasaur",
        "type": [
          "grass",
          "poison"
        ],
        "stats": {
          "base-attack": "118"}
      }
    ]
    expect(filterType(data, "poison")).toEqual(typeOrder);
  })
  it ('filterType retorna un array vacío cuando no hay ningún pokemon que coincida con el tipo', () => {
    expect(filterType(data, "milk")).toEqual([])
  })
})

describe("Esta es la función que me filtra el nombre de la data", () => {
  it('filteredData es una función', () => {
    expect(typeof filteredData).toBe('function');
  });

  it('filteredData retorna un array vacio cuando no hay un pokemon con ese nombre', () => {
    const obtainSearch = filteredData(data, "piekaachus") 
    expect(obtainSearch).toStrictEqual([]);
  });
  it('filteredData retorna un array que incluye "bulbasaur" cuando se busca "b" ', () => {
    const resultOrder = [
      {"name": "bulbasaur",
        "type": [
          "grass",
          "poison"
        ],
        "stats": {
          "base-attack": "118"}
      }
    ]
    expect(filteredData(data, "b")).toEqual(resultOrder);
  });

  it('filteredData retorna un array que incluye "rattata" cuando se busca "tt" ', () => {
    const resultOrder = [
      {"name": "rattata",
        "type": [
          "normal"
        ],
        "stats": {
          "base-attack": "103"}
      }
    ]
    expect(filteredData(data, "tt")).toEqual(resultOrder);
  });
});

describe("esta función saca el promedio del base attack de un los pokemones", () => {
  it('averageData es una función' , () => {
    expect(typeof averageData).toBe('function');
  });

  it ('averageData debe retornar 108 cuando promedia el base-attack de los pokemones', () => {
    const result = 108.00;
    expect(averageData(data)).toEqual(result);
  });
})
