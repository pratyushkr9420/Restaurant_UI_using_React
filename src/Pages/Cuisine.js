import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import {motion} from 'framer-motion';



const Cuisine = () => {
  const [cuisine,setCuisineType] = useState([]);
  const cuisineType = useParams().type;
  const capitalize = (givenString) => {
    let newString = givenString[0].toUpperCase() + givenString.slice(1,)
    return newString
  }
  const getCuisine = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisineType}&number=10&apiKey=${process.env.REACT_APP_RECIPE_APP_API_KEY}`);
    setCuisineType(response.data.results);
    window.localStorage.setItem(`${cuisineType}recipes`,JSON.stringify(response.data.results));
  }

  useEffect(() => {
    const cusineData = window.localStorage.getItem(`${cuisineType}recipes`);
    if(cusineData){
      setCuisineType(JSON.parse(cusineData));
      //console.log(JSON.parse(cusineData))
    }
    else{
      getCuisine();
    }
  },[])

  useEffect(() => {
    const cusineData = window.localStorage.getItem(`${cuisineType}recipes`);
    if(cusineData){
      setCuisineType(JSON.parse(cusineData));
    }
    else{
      getCuisine();
    }
  },[cuisineType])

  return (
    <div style={{"marginLeft":"250px","marginTop":"150px"}}>
      <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}}>
      <h2 className='ms-5'>Our {`${capitalize(cuisineType)}`} cuisine</h2>
      <div className='veggie-recipe-container d-flex flex-wrap'>
        {
          cuisine.map((recipe) => {
            return (
              <Link key={recipe.id}  to={`/recipe/details/${recipe.id}`}>
                <div key={recipe.id} className='veggie-recipe-card' style={{"marginBottom":"100px","marginRight":"40px"}}>
                  <div className='veg-recipe-title'>{recipe.title}</div>
                  <div><img className='veg-recipe-image' src={recipe.image} alt={recipe.title}/></div>
                </div>
              </Link>
            )
          })
        }
      </div>
      </motion.div>
    </div>
  )
}

export default Cuisine