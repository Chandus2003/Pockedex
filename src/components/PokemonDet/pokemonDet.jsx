// css imports
import { useParams,Link } from 'react-router-dom';
import './PokemonDet.css';
import { useEffect, useState } from 'react';
import { FaHome } from "react-icons/fa";


import axios from 'axios'
function PokemonDet({pokemonName}) {

    const URL = 'https://pokeapi.co/api/v2/pokemon/'
    const { id } = useParams();
    const [Pokemon, SetPokemon] = useState({});

    async function Download_Pokemon() {
        const nameOrId = pokemonName || id;
        const response = await axios.get(URL + nameOrId)
        console.log(response);
        const Pokemon = response.data;
        console.log(Pokemon);
        SetPokemon({
            name: Pokemon.name,
            height: Pokemon.height,
            weight: Pokemon.weight,
            types: Pokemon.types,
            image: Pokemon.sprites.other.dream_world.front_default,

        })


    }
    useEffect(() => {
        async function fetchData() {
            await Download_Pokemon();
        }
        fetchData();
    }, [pokemonName,id]);


    return (
        <> 
         
            <div className='Wrapper'>
            <Link to="/"><FaHome /></Link>
                <div className='Pokemon_Name'>
                    {Pokemon.name}
                </div>
                <div className='Pokemon_Image'>
                    <img src={Pokemon.image} alt="" />
                </div>
                <div className='details'>
                <h4>Height: {Pokemon.height}</h4>
                <h4>Weight: {Pokemon.weight}</h4>
                </div>
                <div>
                    
                    <h3 className='types'>
                        Types: {Pokemon.types ?.map(t=> <span className='type' key={t.type.name}> {t.type.name}</span> ) || "Unknown"}
                    </h3>

                </div>
            </div>
        </>
    )
}

export default PokemonDet;
