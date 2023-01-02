# React Index of SuperHeros

## Description

The aim of this project was to create an Index of super heros. Includeing a home page that will display 10 random heros or villians and allow users to search for a specific character. And Individual Pages for each hero or villian complete with a picture info about them and a graph displaying their power stats. All the data in this project is being sourced from [superHero.api](https://www.superheroapi.com/)

## Demo for [ReactSuperheros](https://react-superheros.onrender.com/)

## Technologies used 
- React.js
  - react-chartjs-2
  - React-spinners
  - react-router-dom
- node.js
  - express.js  
  - node-fetch

  ## Technical Information
  project should be good to go once you run an npm install

  ## Issues
  Right now if the user search does not return a result they are met with an error message fired from the browser, this disables the ability to type until clicked and could be handled better. 

  ## API Docs
    [superHero.api](https://www.superheroapi.com/) Has their own api with excillent docs I had to create an express backend to act as a proxy server since their api would not serve results to local host.
    base route is https://super-backend.onrender.com/
    - /:id - returns result for individual hero
    - /search/:name - returns results for all matching search
    - /home - returns info for 10 random heros / villians 


