import React from "react";
import { useState} from "react";
import GalleryItem from "./galleryItem";
import '../css/gallery.css'



function Gallery(){

    
const [hero, setHero] = useState([
    {
        "response": "success",
        "id": "307",
        "name": "Han Solo",
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/10456.jpg"
    },
    {
        "response": "success",
        "id": "285",
        "name": "Gladiator",
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1521.jpg"
    },
    {
        "response": "success",
        "id": "137",
        "name": "Brainiac 5",
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1183.jpg"
    },
    {
        "response": "success",
        "id": "99",
        "name": "Black Cat",
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/32.jpg"
    },
    {
        "response": "success",
        "id": "89",
        "name": "Bird-Man",
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1503.jpg"
    }
])

//     useEffect(()=>{
//         async function fetch_heros(){
//            const response = await fetch("http://localhost:4000/home") 
//            const resData = await response.json();
//            console.log(resData)
//            }
//            fetch_heros()
//    },[])

console.log(hero)


const galleryItems = hero.map(hero =>{
    return(
    <GalleryItem hero = {hero} /> 
    )
})

    return(
        <div className="gallery-container">
            {galleryItems}
        </div>
    )
}

export default Gallery;