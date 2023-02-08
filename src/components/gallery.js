import React from "react";
import { useState, useEffect} from "react";
import GalleryItem from "./galleryItem";
import '../css/gallery.css'
import { RingLoader } from "react-spinners";
import NoSuperFound from "./noSuperFound";



function Gallery(){
const[search, setSearch] = useState(null)
const [loading, setLoading] = useState(true)
const [hero, setHero] = useState([])
const [found, setFound] = useState(false)

const handleSearch = (e,term) =>{
    e.preventDefault()
    setSearch(term)
    setLoading(true)
}

    useEffect(()=>{
        if (search === null || search === ""){
        async function fetch_heros(){
           const response = await fetch("https://super-backend.onrender.com/home",{
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              }
           }) 
           const resData = await response.json();
           setHero(resData)
           setLoading(false)
           setFound(true)
           }
          fetch_heros()
        }else{
            async function fetch_search(){
                const response = await fetch(`https://super-backend.onrender.com/search/${search}`,{
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                      }
                })
                const resData = await response.json();
                if(resData.response == "success"){
                setHero(resData.results)
                setLoading(false)
                setFound(true)
                }else{
                    setFound(false)
                }
            }
            fetch_search()
        }

           
   },[search])

console.log(hero)


const galleryItems = hero.map((hero, i) =>{
    return(
        <GalleryItem hero = {hero} key = {i} /> 

    )
})

    return(
        <div className="center">
    <form onSubmit={(e => e.preventDefault())} >
        <input onChange={(e => setSearch(e.target.value))} type='text' placeholder="Search for a Super"/>
    </form>
    { loading?
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <p style={{display:'none'}}>{document.title = `Super -`}</p>
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
        
         <>
            {found === true ?
            <div className="gallery-container">
            {galleryItems}
            </div>
            :
            <NoSuperFound/>
            }
            </>
            
        
    }
    </div>
    )
}

export default Gallery;