import React, { useState,useEffect } from 'react';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';



const Veggie = () => {
  const[vegrecipes,setVegRecipes] = useState([]);

  const fetchVegRecipes = async () => {
    try{
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?vegetarian=true&apiKey=${process.env.REACT_APP_RECIPE_APP_API_KEY}`);
      console.log(response.data.results);
      setVegRecipes(response.data.results)
      window.localStorage.setItem("vegRecipes",JSON.stringify(response.data.results))
    }
    catch(ex){
      console.log("Following error occured: ",ex.message)
    }
  }

  useEffect(() => {
    const vegRecipesData = window.localStorage.getItem("vegRecipes");
    if(vegRecipesData){
      setVegRecipes(JSON.parse(vegRecipesData));
      //console.log(JSON.parse(vegRecipesData));
    }
    else{
      fetchVegRecipes();
    }
  },[])
  return (
    <div style={{"marginTop":"0px"}}>
      <h2 className='ms-5 fw-bold'>Our Vegetarian Picks</h2>
      <div className='veggie-recipe-container'>
       <Splide options={{perPage:3,rewind:true,drag:"free",pagination:false}}>
        {
          vegrecipes.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
              <Link to={`/recipe/details/${recipe.id}`}>
                <div className='veg-recipe-card' style={{"marginBottom":"100px"}}>
                  <div className='veg-recipe-title'>{recipe.title}</div>
                  <div><img className='veg-recipe-image' src={recipe.image} alt={recipe.title}/></div>
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

export default Veggie