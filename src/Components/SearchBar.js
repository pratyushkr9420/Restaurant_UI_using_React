import React, { useState } from 'react'
import { FaSistrix } from "react-icons/fa6";
import { useNavigate,useParams } from 'react-router-dom';

const SearchBar = () => {
    const [searchText,setSearchText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            navigate(`/searched/${searchText}`)
            setSearchText('');
        }
        catch(ex){
            console.log(ex.message)
        }
    }

  return (
    <div style={{"marginLeft":"500px","marginTop":"50px","marginBottom":"50px"}}>
        <form onSubmit={ handleSubmit }>
            <div className='d-flex align-items-center'>
                <div className='input-group' style={{"width":"550px"}}>
                    <input placeholder='Search' className='form-control search-bar bg-dark text-white fw-bold' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button className='btn' style={{"backgroundColor":"rgb(57, 56, 56)"}}><FaSistrix color='white'/></button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SearchBar