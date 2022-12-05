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
                <RingLoader
                color="#0000FF"
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
                :
            <div>
            <h1>{hero.name}</h1>
            {/* <p>{hero.biography["place-of-birth"]}</p> */}
            <div className="hero">
            <img id="hero-img" src={hero.image["url"]} alt={hero.name}/>
            <div className="identity">
            <h2><u>{hero.biography.alignment == "good" ? "Hero" : "Villian"}</u></h2>
            <ul>
                <li>Full Name : {hero.biography["full-name"]}</li>
                <li>Eye color : {hero.appearance["eye-color"]}</li>
                <li>Height: {hero.appearance.height.length > 1 ? hero.appearance.height.join(" Ft, ") : hero.appearance.height}</li>
                {/* hero.appearance.height.join(" Ft, ") */}
            </ul>
            </div>
            </div>
            </div>
           
        }  
        </div>
    )
}

export default HeroPage;