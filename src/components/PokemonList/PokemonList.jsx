// Css imports
import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon';

import axios from 'axios';
import { useEffect, useState } from 'react'


function PokemonList() {
    const Pokedex_url = "https://pokeapi.co/api/v2/pokemon";
    const [pokemonList, setPokemonList] = useState([])

    async function downloadPokemons() {
        const response = await axios.get(Pokedex_url);
        const PokemonResult = response.data.results;
        const PokemonPromise = PokemonResult.map((Pokemon) => axios.get(Pokemon.url));
        const PokemonListData = await axios.all(PokemonPromise);
        const PokemonFinalList = PokemonListData.map(PokemonData => {
            const Pokemon = PokemonData.data;
            return {
                id: Pokemon.id,
                name: Pokemon.name,
                image: Pokemon.sprites.other.dream_world.front_default,
                type: Pokemon.type,


            }
        })
        setPokemonList(PokemonFinalList);

        console.log(PokemonFinalList)

    }


    useEffect(() => {

        downloadPokemons();
    }, []);




    return (

        <div className='Pokemon-list-wrapper'>
            <div>POKEMON  LIST</div>
             
             <div className='Pokeon-conatiner'>
             {pokemonList.map(pokemon=> <Pokemon name={pokemon.name} id={pokemon.id} url={pokemon.image} />)}
             </div>
            
            


        </div>
    )
}

export default PokemonList