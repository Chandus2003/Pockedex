// css imports
import { useParams,Link } from 'react-router-dom';
import './PokemonDet.css';
import { useEffect, useState } from 'react';
import { FaHome } from "react-icons/fa";


import axios from 'axios'
import { HiH2 } from 'react-icons/hi2';
function PokemonDet({pokemonName}) {

    const URL = 'https://pokeapi.co/api/v2/pokemon/'
    const { id } = useParams();
    const [Pokemon, SetPokemon] = useState({});

    async function Download_Pokemon() {
      try{
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
      catch(e){
        console.log("Error in fetching pokemon")
        SetPokemon(null);
      }


    }
    useEffect(() => {
        async function fetchData() {
            await Download_Pokemon();
        }
        fetchData();
    }, [pokemonName,id]);


    return (
        <> 
         
            
            
            {
                Pokemon ? (
                <div>
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
                </div>
                ) : 
                ( <h2>Pokeon not found : Try again</h2>)
            }
                
          
        </>
    )
}

export default PokemonDet;
