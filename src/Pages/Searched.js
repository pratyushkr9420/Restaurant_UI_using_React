import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Searched = () => {
  const [searchResult,setSearchResult] = useState([]);
  let filterString = useParams().search;

  const fetchSearchResults = async() => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${filterString}&apiKey=${process.env.REACT_APP_RECIPE_APP_API_KEY}`);
    setSearchResult(response.data.results);
  }

  useEffect(() => {
    fetchSearchResults();
  },[filterString])

  return (
    <div style={{"marginLeft":"250px","marginTop":"150px"}}>
      <h2 className='ms-5'>Search Results</h2>
      <div className='veggie-recipe-container d-flex flex-wrap'>
        {
          searchResult.map((recipe) => {
            return (
              <Link to={`/recipe/details/${recipe.id}`}>
              <div key={recipe.id} className='veggie-recipe-card' style={{"marginBottom":"100px","marginRight":"40px"}}>
                <div className='veg-recipe-title'>{recipe.title}</div>
                <div><img className='veg-recipe-image' src={recipe.image} alt={recipe.title}/></div>
              </div>
              </Link>
            )
          })
        }
      </div>
  </div>
  )
}

export default Searched