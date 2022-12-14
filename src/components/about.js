import React from "react";
import {Link} from "react-router-dom"
import "../css/about.css"

function About(){

    return(
        <div>
            <nav>
            <div className="home-nav">
            <Link className="about" to={'/'}>Back Home</Link>
            <h1>About</h1>
            <div></div>
            </div>
            </nav>
            <div className="about-card">
            This app was created by Dallas Palumbo, A long time lover of superheros and newly minted full stack dev. 
            To make this app I used the awesome resorce Superhero.api i am fetching all my data from them. 
            The technologies leveraged in this project are.
            <ul>
                <li>React.js</li>
                <li>react-chartjs-2</li>
                <li>React-spinners</li>
                <li>react-router-dom</li>
                <li>Node.js</li>
                <li>node-fetch</li>
                <li>Express.js</li>
            </ul>
            <p>You can checkout the project repo here!</p>
            <a target="_blank" href="https://github.com/Decodedal/react-superheros">Git Hub repo</a>
            </div>
        </div>
    )
}

export default About;