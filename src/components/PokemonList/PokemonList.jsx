// Css imports
import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon';

import axios from 'axios';
import { useEffect, useState } from 'react'


function PokemonList() {
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

    const [Pokedex_url, setPokedex_url] = useState(DEFAULT_URL);
    const [Next, setNext] = useState(DEFAULT_URL)
    const [Prev, setPrev] = useState(DEFAULT_URL)

    const [pokemonList, setPokemonList] = useState([])

    async function downloadPokemons() {
        const response = await axios.get(Pokedex_url ? Pokedex_url:DEFAULT_URL );
        const PokemonResult = response.data.results;
        setNext(response.data.next);
        setPrev(response.data.previous);

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
    }, [Pokedex_url]);




    return (

        <div className='Pokemon-list-wrapper'>
            <div className='heading'>POKEMON  LIST</div>
            <div className='Page-Control'>
                <button onClick={() => setPokedex_url(Prev)} >Prev</button>
                <button onClick={() => setPokedex_url(Next)} >Next</button>
            </div>

            <div className='Pokeon-conatiner'>
                {pokemonList.map(pokemon => <Pokemon name={pokemon.name} key={pokemon.id} id={pokemon.id} url={pokemon.image} />)}
            </div>




        </div>
    )
}

export default PokemonList