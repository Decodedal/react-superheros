import React from "react";
import '../css/gallery.css'
import {Link} from "react-router-dom"

function GalleryItem({hero, key}){
    return(
        <div key={key} className="card-container">
            <h3><u>{hero.name}</u></h3>
            <Link to={`/${hero.id}`}>
                <img classname = "hero-img" src = { hero.url == null ? hero.image.url : hero.url} alt= {hero.name}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src="https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg";
                }}/>
            </Link>  
        </div>
    )
}

export default GalleryItem;