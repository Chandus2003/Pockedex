import { useState } from 'react';
// css imports
import './Search.css'

function Search ({updateSearch}){
         
        const handleChanges=(event)=>{
            updateSearch(event.target.value);    
    }

    return(
        <div>
            <input 
            id='Search-Pokemon'
            type="text"
             placeholder='Which Pokemon u are looking for' 
              onChange={handleChanges}
             />
             
        </div>
    )
}

export default Search;