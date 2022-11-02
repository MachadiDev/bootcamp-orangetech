const pokemonList = document.getElementById('pokemonList') //acessando a lista do HTML e atribuindo a variável
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10;
let offset = 0;
const maxRecords = 151;



function loadPokemonItens(offset, limit) {

    function convertPokemonToHTML(pokemon) {
        return `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.numero}</span>
                <span class="name">${pokemon.name}</span>
    
                <div class="detail">
                    <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
    
                <img src="${pokemon.photo}" 
                alt="${pokemon.name}">
    
                </div>
             
                
            </li>    
        `
    }

    PokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHTML).join('')
        pokemonList.innerHTML += newHtml;
    })
}


loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }else {
    loadPokemonItens(offset, limit);
    }
})


//        const listItems = []; //lista para os itens de pokemons

        
//        for (let i = 0; i < pokemons.length; i++) {
//            const pokemon = pokemons[i];
//            console.log(convertPokemonToHTML(pokemon)); carrega a lista de pokemon em forma HTML
//            listItems.push(convertPokemonToHTML(pokemon));
            
//       }
//    
//    }) printando o body convertido 
    





