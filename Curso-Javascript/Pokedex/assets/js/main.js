function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}


function convertPokemonToHTML(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>

            <img src="${pokemon.sprites.other.dream_world.front_default}" 
            alt="${pokemon.name}">

            </div>
         
            
        </li>    
    `
}



const pokemonList = document.getElementById('pokemonList') //acessando a lista do HTML e atribuindo a variável


    PokeApi.getPokemons().then((pokemons = []) => {

        pokemonList.innerHTML += pokemons.map(convertPokemonToHTML).join('') //passar uma função transformadora

    })


//        const listItems = []; //lista para os itens de pokemons

        
//        for (let i = 0; i < pokemons.length; i++) {
//            const pokemon = pokemons[i];
//            console.log(convertPokemonToHTML(pokemon)); carrega a lista de pokemon em forma HTML
//            listItems.push(convertPokemonToHTML(pokemon));
            
//       }
//    
//    }) printando o body convertido 
    





