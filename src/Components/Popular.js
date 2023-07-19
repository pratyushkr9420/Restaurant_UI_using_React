import React, { useEffect, useState } from 'react';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Popular = () => {
  const[popularRecipes,setPopularRecipes] = useState([]);

  const getPopularRecipes = async() => {
    try{
      const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_RECIPE_APP_API_KEY}`);
      setPopularRecipes(response.data.recipes);
      window.localStorage.setItem('popularRecipies',JSON.stringify(response.data.recipes))
    }
    catch(ex){
      console.log("Error fetching data: ",ex.message);
    }
  }

  useEffect(() => {
    const popularRecipesData = window.localStorage.getItem('popularRecipies');
    if(popularRecipesData){
      setPopularRecipes(JSON.parse(popularRecipesData));
      //console.log(JSON.parse(popularRecipesData));
    }
    else{
      getPopularRecipes();
    }
  },[])
  
  return (
    <div style={{"marginBottom":"0px"}}>
      <h2 className='ms-5 fw-bold'>Trending</h2>
      <div className='popular-recipe-container'>
        <Splide options={{perPage:3,rewind:true,drag:"free",pagination:false}}>
        {
          popularRecipes.map(recipe => {
            return(
              <SplideSlide key={recipe.id}>
              <Link to={`/recipe/details/${recipe.id}`}>
                <div className='popular-recipe-card' style={{"marginBottom":"100px"}}>
                  <div className='popular-recipe-title'>{recipe.title}</div>
                  <div><img className='popular-recipe-image' src={recipe.image} alt={recipe.title}/></div>
                </div>
              </Link>
              </SplideSlide>
            )
          })
        }
       </Splide>
      </div>
    </div>
  )
}

export default Popular