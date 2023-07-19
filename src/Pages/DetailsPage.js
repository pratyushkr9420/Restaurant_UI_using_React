import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailsPage = () => {
  const { id } = useParams();
  const [details,setDetails] = useState({});
  const [activeTab,setActiveTab] = useState('instructions');

  const fetchDetails = async() => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_RECIPE_APP_API_KEY}`);
    setDetails(response.data);
    console.log(response.data);
  }
  useEffect(() => {
      fetchDetails();
  },[id])
  return (
    <div style={{"marginLeft":"300px","marginTop":"150px","marginBottom":"100px"}}>
        <div className='details-container'>
          <div style={{"width":"400px"}}>
            <div className='ms-3 fw-bold fs-3'>{details.title}</div>
            <img src={details.image} alt={details.title} style={{"width":"100%"}}/>
          </div>
          <div className='button-container'>
            <button onClick={() => setActiveTab('instructions')} className={`button-blank fw-bold ${activeTab === 'instructions' ? 'active':''} mb-2`}>Instructions</button>
            <button onClick={() => setActiveTab('ingredients')} className={`button-blank fw-bold ${activeTab === 'ingredients' ? 'active':''} mb-2`}>Ingredients</button>
            <div style={{"width":"500px"}}>
            {
              activeTab === 'instructions' ? (
                <div>
                  <p dangerouslySetInnerHTML={{__html:details.summary}}/>
                  <p dangerouslySetInnerHTML={{__html:details.instructions}}/>
                </div>

              ):''
            }
                        {
              activeTab === 'ingredients' ? (
                <div>
                  {
                    details.extendedIngredients.map((item) => {
                      return <li key={item.id}>
                        {item.original}
                      </li>
                    })
                  }
                </div>

              ):''
            }
          </div>
          </div>

        </div>
    </div>
  )
}

export default DetailsPage