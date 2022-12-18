import React from "react";
import Gallery from "./gallery";
import {Link} from "react-router-dom"
import "../css/home.css"

function Home(){

return(
    <div>
        <p style={{display:'none'}}>{document.title = "Superhero Homepage"}</p>
        <nav>
        <div className="home-nav">
            <div></div>
        <h1 id = "home-header">The multi-universal index of supers</h1>
        <Link className="about" to = "/about">About</Link>
        </div>
        </nav>
        <Gallery/>
    </div>
)

}


export default Home;