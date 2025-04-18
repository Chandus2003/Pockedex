//Css import
import { useState } from 'react';
import PokemonList from '../pokemonList/PokemonList';
import Search from '../search/Search';
import PokemonDet from '../pokemonDet/PokemonDet'
import useDebounce from "../../hooks/useDebouncing"; 
 

import './Pokedex.css'

function Pokedex(){

    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    console.log(setSearchTerm)
    return(
        <div className='Pokedex-Wrapper'>
            <h1>Pockedex </h1>
            <Search updateSearch={setSearchTerm}/>
            
           {searchTerm? <PokemonDet pokemonName={debouncedSearchTerm}/>: <PokemonList/>}
        </div>
    )
}

export default Pokedex;