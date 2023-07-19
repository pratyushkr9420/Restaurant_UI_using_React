import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <div style={{"marginLeft":"0px","paddingLeft":"0px","position":"fixed"}}>
      <Link className='logo-link' to="/">
        <div style={{"marginLeft":"70px"}}><GiKnifeFork size={50}/><span className='fs-3 text-bold'>delicious</span></div>
      </Link>
    </div>


  )
}

export default Logo