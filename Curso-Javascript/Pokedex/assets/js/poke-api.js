
const PokeApi = {}

PokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json()); //convertendo a requisição de detail em um json
}

PokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response) => response.json()) //transforma a response da promise em um json
    .then((jsonBody) => jsonBody.results) //Aba de results da requisição da API
    .then((pokemons) => pokemons.map(PokeApi.getPokemonsDetail)) //transformando lista em uma nova lista de promessas de detalhe do pokemon
    .then((detailRequests) => Promise.all(detailRequests)) //terminar todas as requisições
    .then((pokemonDetails) => pokemonDetails) //requisição dos detalhes de cada pokemon
    .catch((error) => console.error(error))
}

//RECEBE UMA LISTA DE PROMESSAS, REQUISIÇÕES PARA A API

