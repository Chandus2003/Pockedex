//Css imports
import './Pokemon.css'
import {Link} from 'react-router-dom'

function Pokemon({ name, url,id }) {
    return (
        //    <div className="main">
        <div className='Pokemon-wraper'  >
            <Link to={`/pokemon/${id}`}>
            <div className='Pokemon-name'>{name}</div>
            <img src={url} alt="" />
            </Link>
        </div>
    )

}
export default Pokemon;