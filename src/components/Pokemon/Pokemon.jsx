//Css imports
import './Pokemon.css'

function Pokemon({name,url}){
    return(
    //    <div className="main">
         <div className='Pokemon-wraper'>
            <div>{name}</div>
            <img src={url} alt="" />
        {/* </div> */}
       </div>
    )

}
export default Pokemon;