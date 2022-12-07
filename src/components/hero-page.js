import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import {BarChart} from "./barChart"
import "../css/hero-page.css"


function HeroPage(){

const[hero, setHero] = useState({})
const[loading, setLoading] = useState(true)
    
const {powerstats} = hero
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


// console.log(hero)
// console.log(powerstats.strength)



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
                <li>secret identity : {hero.biography["full-name"] == "" ? "none": hero.biography["full-name"].toLowerCase() }</li>
                <li>aliases: {hero.biography.aliases.join(", ").toLowerCase()}</li>
                <li>eye color : {hero.appearance["eye-color"]}</li>
                <li>height: {hero.appearance.height[0] == "-" ? hero.appearance.height[1] : hero.appearance.height.join(" ft, ")  }</li>
                <li>weight: {hero.appearance.weight.join(' , ')}</li>
                <li>race: {hero.appearance.race.toLowerCase()}</li>
                <li>gender: {hero.appearance.gender}</li>
                <li>universe: {hero.biography.publisher}</li> 
            </ul>
            </div>
            
            <div className="list">
                <p>list here</p>
                
            </div>
            <div className="chart">
            <BarChart data ={
                {
                    labels: ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'],
                    datasets: [
                      {
                        label: 'Power Stats',
                        data: [powerstats.intelligence, powerstats.strength, powerstats.speed, powerstats.durability , powerstats.power, powerstats.combat],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                      },
                    ],
                }
            }/>
            </div>
            </div>
            </div>
      
            </main>
           
        }  
        </div>
    )
}

export default HeroPage;