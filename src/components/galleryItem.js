import React from "react";
import '../css/gallery.css'
import {Link} from "react-router-dom"

function GalleryItem({hero, key}){
console.log(hero)
    return(
        <div key={key} className="card-container">
            <h3>{hero.name}</h3>
            <Link to={`/${hero.id}`}>
                <img classname = "hero-img" src = {hero.url} alt= {hero.name}/>
            </Link>  
        </div>
    )
}

export default GalleryItem;