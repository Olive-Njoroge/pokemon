fetchData();

async function fetchdata(){
    try{
        const pokemonName = document.getElementById("pokemonName").ariaValueMax.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    }
}