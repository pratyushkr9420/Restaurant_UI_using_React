import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa6'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div style={{"marginBottom":"100px","paddingLeft":"30px","paddingTop":"65px"}}><Link className='sidebar-link'>Home</Link></div>
      <div style={{"marginBottom":"100px","paddingLeft":"30px"}}><Link className='sidebar-link'>Contact</Link></div>
      <div style={{"marginBottom":"100px","paddingLeft":"30px"}}><Link className='sidebar-link'>Careers</Link></div>
      <div className='social-links'>
        <div><a href='https://www.twitter.com' target='_blank'><FaLinkedinIn color='#0077b5' size={30}/></a></div>
        <div><a href='https://www.twitter.com' target='_blank'><FaFacebook color='#3b5998' size={30}/></a></div>
        <div><a href='https://www.twitter.com' target='_blank'><FaTwitter color='#00acee' size={30}/></a></div>
        <div><a href='https://www.twitter.com' target='_blank'><FaInstagram color='#8a3ab9' size={30}/></a></div>
      </div>
    </div>
  )
}

export default Sidebar