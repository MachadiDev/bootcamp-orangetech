
const PokeApi = {}

//interface que instancia a classe pokemon e recebe as informações para formatar a API novo modelo
function convertPokeApiDetailToPokemon(pokemonDetail) {
    const pokemon = new Pokemon();
    pokemon.name = pokemonDetail.name
    pokemon.numero = pokemonDetail.id

    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name) //variavel com os types do pokemon
    const [type] = types    //transforma os types em uma lista

    pokemon.types = types //type principal
    pokemon.type = type

    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default

    const abilities = pokemonDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
    const [ability] = abilities

    pokemon.abilities = abilities
    pokemon.ability = ability

    return pokemon

}

PokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json()) //convertendo a requisição de detail em um json
    .then(convertPokeApiDetailToPokemon)
}

PokeApi.getPokemons = (offset = 0, limit = 5) => {

    var url =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response) => response.json()) //transforma a response da promise em um json
    .then((jsonBody) => jsonBody.results) //Aba de results da requisição da API
    .then((pokemons) => pokemons.map(PokeApi.getPokemonsDetail)) //transformando lista em uma nova lista de promessas de detalhe do pokemon
    .then((detailRequests) => Promise.all(detailRequests)) //terminar todas as requisições
    .then((pokemonDetails) => pokemonDetails) //requisição dos detalhes de cada pokemon
    .catch((error) => console.error(error))
}


//RECEBE UMA LISTA DE PROMESSAS, REQUISIÇÕES PARA A API

