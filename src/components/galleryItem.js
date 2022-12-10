import React from "react";
import '../css/gallery.css'

function GalleryItem({hero}){

    return(
        <div className="card-container">
            <h3>{hero.name}</h3>
                <img classname = "hero-img" src = {hero.url} alt= {hero.name}/>
        </div>
    )
}

export default GalleryItem;