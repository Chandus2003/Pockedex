import Pokedex from './components/Pokedex/Pokedex';  
import PokemonDet from './components/PokemonDet/PokemonDet';

import './App.css';
import { Route, Routes } from 'react-router-dom';


function App() {


  return (
   <Routes>
    <Route path= "/" element={<Pokedex/>} />
    <Route path= "/pokemon/:id" element={<PokemonDet/>} />
    <Route path= "*" element={<div><h1>Error no such url is found</h1></div>} />

   </Routes>

  )
}

export default App
