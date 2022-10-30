const offset = 0;
const limit = 10;
const url =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToHTML(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/pokemon/other/dream-world/1.svg" 
            alt="${pokemon.name}">

            </div>
         
            
        </li>    
    `
}

fetch(url)
    .then((response) => response.json()) //transforma a response da promise em um json
    .then((jsonBody) => jsonBody.results) //Aba de results da requisição da API
    .then((pokemonList) => {
        
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            console.log(convertPokemonToHTML(pokemon)); //carrega a lista de pokemon em forma HTML

            const pokemonList = document.getElementById('pokemonList');
            pokemonList.appendChild('')
            
        }
    
    }) //printando o body convertido 
    
    .catch((error) => console.error(error));





