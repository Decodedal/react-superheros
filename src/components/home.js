import React from "react";
import { useEffect } from "react";

function Home(){
    
    useEffect(()=>{
         async function fetch_heros(){
            const response = await fetch("http://localhost:4000/2") 
            const resData = await response.json();
            console.log(resData)
            }
            fetch_heros()
    },[])

return(
    <div>
        <h1>Home Page</h1>
    </div>
)

}


export default Home;