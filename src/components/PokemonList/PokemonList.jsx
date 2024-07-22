// Css imports
import './PokemonList.css'

import axios from 'axios';
import { useEffect, useState } from 'react'


function PokemonList() {
    const Pokedex_url ="https://pokeapi.co/api/v2/pokemon";

    async function downloadPokemons(){
        const response =await axios.get(Pokedex_url);
        const PokemonResult= response.data.results;
        const PokemonPromise=PokemonResult.map((Pokemon)=> Pokemon.url);
        console.log(PokemonPromise)

    }


    useEffect(()=>{

        downloadPokemons();
    },[]);




    return (

        <div>
           <button>ok</button>


        </div>
    )
}

export default PokemonList