const pokemonName = document.querySelector('.pokemon__name')
const pokemonNumber = document.querySelector('.pokemon__number')
const pokemonImage = document.querySelector('.pokemon__image')
const form = document.querySelector('.form')
const input = document.querySelector('.input__search')
const prev = document.querySelector('.btn-prev')
const next = document.querySelector('.btn-next')
const tipo = document.querySelector('.tipoPokemon')
const tipo2 = document.querySelector('.tipoPokemon2')


let searchPokemon = 1

const fetchPokemon = async (pokemon) => {

  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  if (APIResponse.status == 200){
    const data = await APIResponse.json()
    return data
  } 
}

const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = "Loading..."
  const data = await fetchPokemon(pokemon)

  if(data){
    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    input.value = ""
    pokemonImage.style.display = 'flex'
    searchPokemon = data.id
   
    console.log()
    if(data.types[0].type.name == 'electric'){
      tipo.src = 'img/tipos/GO_Electric.png'
      }else if(data.types[0].type.name == 'fire') {
        tipo.src = 'img/tipos/GO_Fire.png'
      } else if(data.types[0].type.name == 'water') {
        tipo.src = 'img/tipos/GO_Water.png'
      } else if(data.types[0].type.name == 'bug') {
        tipo.src = 'img/tipos/GO_Bug.png'
      } else if(data.types[0].type.name == 'dark') {
        tipo.src = 'img/tipos/GO_Dark.png'
      } else if(data.types[0].type.name == 'dragon') {
        tipo.src = 'img/tipos/GO_Dragon.png'
      } else if(data.types[0].type.name == 'fairy') {
        tipo.src = 'img/tipos/GO_Fairy.png'
      } else if(data.types[0].type.name == 'fighting') {
        tipo.src = 'img/tipos/GO_Fighting.png'
      } else if(data.types[0].type.name == 'flying') {
        tipo.src = 'img/tipos/GO_Flying.png'
      } else if(data.types[0].type.name == 'ghost') {
        tipo.src = 'img/tipos/GO_Ghost.png'
      } else if(data.types[0].type.name == 'grass') {
        tipo.src = 'img/tipos/GO_Grass.png'
      } else if(data.types[0].type.name == 'ground') {
        tipo.src = 'img/tipos/GO_Ground.png'
      } else if(data.types[0].type.name == 'ice') {
        tipo.src = 'img/tipos/GO_Ice.png'
      } else if(data.types[0].type.name == 'normal') {
        tipo.src = 'img/tipos/GO_Normal.png'
      } else if(data.types[0].type.name == 'poison') {
        tipo.src = 'img/tipos/GO_Poison.png'
      } else if(data.types[0].type.name == 'psychic') {
        tipo.src = 'img/tipos/GO_Psychic.png'
      } else if(data.types[0].type.name == 'rock') {
        tipo.src = 'img/tipos/GO_Rock.png'
      } else if(data.types[0].type.name == 'steel') {
        tipo.src = 'img/tipos/GO_Steel.png'
      } else {
        tipo.style.display = 'none'
      }
      
      tipo2.style.display = 'none'

      if(data.types[1].type.name == 'electric'){
        tipo2.style.display = 'flex'
        tipo2.src = 'img/tipos/GO_Electric.png'
        }else if(data.types[1].type.name == 'fire') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Fire.png'
        } else if(data.types[1].type.name == 'water') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Water.png'
        } else if(data.types[1].type.name == 'bug') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Bug.png'
        } else if(data.types[1].type.name == 'dark') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Dark.png'
        } else if(data.types[1].type.name == 'dragon') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Dragon.png'
        } else if(data.types[1].type.name == 'fairy') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Fairy.png'
        } else if(data.types[1].type.name == 'fighting') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Fighting.png'
        } else if(data.types[1].type.name == 'flying') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Flying.png'
        } else if(data.types[1].type.name == 'ghost') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Ghost.png'
        } else if(data.types[1].type.name == 'grass') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Grass.png'
        } else if(data.types[1].type.name == 'ground') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Ground.png'
        } else if(data.types[1].type.name == 'ice') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Ice.png'
        } else if(data.types[1].type.name == 'normal') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Normal.png'
        } else if(data.types[1].type.name == 'poison') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Poison.png'
        } else if(data.types[1].type.name == 'psychic') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Psychic.png'
        } else if(data.types[1].type.name == 'rock') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Rock.png'
        } else if(data.types[1].type.name == 'steel') {
          tipo2.style.display = 'flex'
          tipo2.src = 'img/tipos/GO_Steel.png'
        } else {
          tipo2.style.display = 'flex'
          tipo2.style.display = 'none'
        }

  } else {
    pokemonName.innerHTML = "not found"
    pokemonNumber.innerHTML = ""
    pokemonImage.style.display = 'none'
    input.value = ""
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  renderPokemon(input.value.toLowerCase())

})

prev.addEventListener('click', () => {
  searchPokemon -= 1
  renderPokemon(searchPokemon)
  if(searchPokemon <= 0){
    searchPokemon = 1
    renderPokemon(searchPokemon)
  }
})
next.addEventListener('click', () => {
  searchPokemon += 1
  renderPokemon(searchPokemon)
  if(searchPokemon >= 649){
    searchPokemon = 649
    renderPokemon(searchPokemon)
  }
})

const pokemonList = document.getElementById('pokemon-list');

fetch('https://pokeapi.co/api/v2/pokemon?limit=649')
  .then(response => response.json())
  .then(data => {
    data.results.forEach((pokemon, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = pokemon.name;
      pokemonList.appendChild(listItem);

      listItem.addEventListener('click', () => {
        renderPokemon(index + 1);
      });
    });
  })

  renderPokemon(searchPokemon)