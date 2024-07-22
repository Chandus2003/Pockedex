//Css import
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.css'

function Pokedex(){

    return(
        <div className='Pokedex-Wrapper'>
            <h1>Pockedex </h1>
            <Search/>
            <PokemonList/>
        </div>
    )
}

export default Pokedex;