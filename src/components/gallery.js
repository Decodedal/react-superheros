import React from "react";
import { useState, useEffect} from "react";
import GalleryItem from "./galleryItem";
import '../css/gallery.css'
import { RingLoader } from "react-spinners";



function Gallery(){
const[search, setSearch] = useState(null)
const [loading, setLoading] = useState(false)
const [hero, setHero] = useState([])

const handleSearch = (e,term) =>{
    e.preventDefault()
    setSearch(term)
    console.log(term)
}

    useEffect(()=>{
        if (search == null){
        async function fetch_heros(){
           const response = await fetch("https://super-backend.onrender.com/home") 
           const resData = await response.json();
           setHero(resData)
           setLoading(false)
           }
          fetch_heros()
        }else{
            async function fetch_search(){
                const response = await fetch(`https://super-backend.onrender.com/search/${search}`)
                const resData = await response.json();
                if(resData.response == "success"){
                setHero(resData.results)
                }else{
                    alert("No one in the data base has this name please alter your search")
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
        <div className="gallery-container">
            {galleryItems}
            </div>
        </div>
    )
}

export default Gallery;