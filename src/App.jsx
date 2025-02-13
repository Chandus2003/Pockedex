
import Pokedex from './components/Pokedex/Pokedex.jsx';  // or '.js' if the file extension is .js
import PokemonDet from './components/PokemonDet/PokemonDet.jsx';  // or '.js' if the file extension is .js
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
