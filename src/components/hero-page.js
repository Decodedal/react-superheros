import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BarChart from "./chart";


function HeroPage(){

const[hero, setHero] = useState({})
    
let{id} = useParams()

    useEffect(()=>{
        async function fetch_heros(id){
           const response = await fetch(`http://localhost:4000/${id}`) 
           const resData = await response.json();
           setHero(resData)
           }
           fetch_heros(id)
   },[])

// console.log(hero.biography["place-of-birth"])

    return(
        <div>
            <h1>HeroPage</h1>
            <h2>{hero.name}</h2>
            {/* <p>{hero.biography.place-of-birth}</p> */}
            <div className="hero">
            <img src={hero.image["url"]} alt={hero.name}/>

            </div>
           
          
        </div>
    )
}

export default HeroPage;