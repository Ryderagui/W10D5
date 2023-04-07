
import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';

function GalleryNavigation({galleries}) {
    console.log(galleries,"input to GalleryNav")
    return(
    <nav>
    <h1> Galleries</h1>
    {galleries.map((ele,idx)=>{
       return( <NavLink to={`/galleries/${ele.id}`} key={idx}>Link?</NavLink>)
    })
    
    }
    </nav>)
}

export default GalleryNavigation;