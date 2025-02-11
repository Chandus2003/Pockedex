//Css import
import { useState } from 'react';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import PokemonDet from '../PokemonDet/pokemonDet'
import './Pokedex.css'

function Pokedex(){

    const [searchInput, setSearchInput]= useState('');
    console.log(searchInput)
    return(
        <div className='Pokedex-Wrapper'>
            <h1>Pockedex </h1>
            <Search updateSearch={setSearchInput}/>
            
           {searchInput? <PokemonDet pokemonName={searchInput}/>: <PokemonList/>}
        </div>
    )
}

export default Pokedex;