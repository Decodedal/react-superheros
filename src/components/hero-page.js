import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import BarChart from "./chart";
import "../css/hero-page.css"


function HeroPage(){

const[hero, setHero] = useState({})
const[loading, setLoading] = useState(true)
    
let{id} = useParams()


// triggers loader while fetching info then turns it off after setting state for hero.
    useEffect(()=>{
        async function fetch_heros(id){
            const response = await fetch(`http://localhost:4000/${id}`) 
            const resData = await response.json();
            setHero(resData)
            setLoading(false)
            }
           
            fetch_heros(id)
           
   },[])


console.log(hero)

    return(
        <div>
            {
                loading ? 
                <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <RingLoader
                color="#0000FF"
                loading={loading}
                size={150}
                margin = "0 auto"
                aria-label="Loading Spinner"
                data-testid="loader"
                />
                </div>
                :  
            <main>
            <h1>{hero.name}</h1>
            {/* <p>{hero.biography["place-of-birth"]}</p> */}
            <div className="hero">
            <img id="hero-img" src={hero.image["url"]} alt={hero.name}/>
            <div className="identity">
            <div className="list">
            <h2><u>{hero.biography.alignment == "good" ? "Hero" : "Villian"}</u></h2>
            <ul>
                <li>Secret identity : {hero.biography["full-name"] == "" ? "none": hero.biography["full-name"] }</li>
                <li>Aliases: {hero.biography.aliases.join(", ")}</li>
                <li>Eye color : {hero.appearance["eye-color"]}</li>
                <li>Height: {hero.appearance.height[0] == "-" ? hero.appearance.height[1] : hero.appearance.height.join(" Ft, ")  }</li>
                <li>Weight: {hero.appearance.weight.join(', ')}</li>
                <li>Race: {hero.appearance.race}</li>
                <li>Gender: {hero.appearance.gender}</li>
            </ul>
            </div>
            
            <div className="list">
                <p>list here</p>
                
            </div>
            </div>
            </div>
            </main>
           
        }  
        </div>
    )
}

export default HeroPage;