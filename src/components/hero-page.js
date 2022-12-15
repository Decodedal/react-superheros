import React from "react";
import { useParams, Link } from "react-router-dom";
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
            const response = await fetch(`https://super-backend.onrender.com/${id}`,{
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  }
            }
            
            ) 
            const resData = await response.json();
            setHero(resData)
            setLoading(false)
            }
           
            fetch_heros(id)
           
   },[])



//defines id numbers for next and back buttons
let next = Number(hero.id) + 1
let back = Number(hero.id) -1
let rand = Math.floor(Math.random() * (600 - 1 + 1) + 1)

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
                {document.body.style.backgroundColor = `${hero.biography.alignment == "good"? "#6699ff":"#ff3300"}`}
                <nav>
                <div className="center-nav">
                <Link onClick={window.location.reload} className="link-arrow" to={`/${back}`}>⬅️</Link>  
                <Link className="link" onClick={window.location.reload} to={`/${rand}`}>Random</Link>
                <h1><u>{hero.name}</u></h1>
                <Link className="link" to="/">Home</Link>
                <Link onClick= {window.location.reload} className="link-arrow" to={`/${next}`}>➡️</Link>
                </div>
                </nav>
            
            {/* <p>{hero.biography["place-of-birth"]}</p> */}
            <div className="hero">
            <img id="hero-img" onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src="https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg";
                        }} src={hero.image["url"]} alt={hero.name}/>
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
                <li>occupation:{hero.work.occupation == '-' ? " none" : ` ${hero.work.occupation.toLowerCase()}`}</li>
                <li>affiliations:{hero.connections["group-affiliation"] == '-' ? " unknown" : ` ${hero.connections["group-affiliation"].toLowerCase()}` }</li>
                <li>universe: {hero.biography.publisher}</li> 
            </ul>
            </div>
            
            {/* <div className="list">
                <p>list here</p>
                
            </div> */}
            <div className="chart">
            <BarChart data ={
                {
                    labels: ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'],
                    datasets: [
                      {
                        label: 'Power Stats',
                        data: [powerstats.intelligence, powerstats.strength, powerstats.speed, powerstats.durability , powerstats.power, powerstats.combat],
                        backgroundColor: hero.biography.alignment == "good" ?'rgba(100, 100, 255, 0.2)':'rgba(255, 99, 132, 0.2)'  ,
                        borderColor: hero.biography.alignment == "good" ? 'rgba(100, 100, 255, 1)': 'rgba(255, 99, 132, 1)',
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