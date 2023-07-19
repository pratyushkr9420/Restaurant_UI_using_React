import React from 'react'
import { Link } from 'react-router-dom';

import { FaPizzaSlice } from "react-icons/fa6";
import { FaBurger } from "react-icons/fa6";
import { GiNoodles } from 'react-icons/gi';
import { GiChopsticks } from 'react-icons/gi';

const NavBar = () => {
  return (
    <div className='d-flex' style={{"marginLeft":"450px"}}>
        <ul className='navbar'>
            <li style={{"marginRight":"150px"}}>
                <Link className='navbar-link' to="/cuisine/italian">
                <div className='bg-dark d-flex flex-column p-2' style={{"width":"110px","height":"110px","borderRadius":"50%"}}>
                <div className='p-1 ms-4 mt-3'><FaPizzaSlice size={20}/></div>
                <div className='ms-3 fs-5'>Italian</div>
                </div>
                </Link>
            </li>
            <li  style={{"marginRight":"150px"}}>
                <Link className='navbar-link' to="/cuisine/american">
                <div className='bg-dark d-flex flex-column p-2' style={{"width":"110px","height":"110px","borderRadius":"50%"}}>
                <div className='p-1 ms-4 mt-3'><FaBurger size={25}/></div>
                <div className='ms-1 fs-5'>American</div>
                </div>
                </Link>
            </li>
            <li  style={{"marginRight":"150px"}}>
                <Link className='navbar-link' to="/cuisine/thai">
                <div className='bg-dark d-flex flex-column p-2' style={{"width":"110px","height":"110px","borderRadius":"50%"}}>
                <div className='p-1 ms-4 mt-2'><GiNoodles size={40}/></div>
                <div className='ms-4 fs-5'>Thai</div>
                </div>
                </Link>
            </li>
            <li  style={{"marginRight":"150px"}}>
                <Link className='navbar-link' to="/cuisine/japanese">
                <div className='bg-dark d-flex flex-column p-2' style={{"width":"110px","height":"110px","borderRadius":"50%"}}>
                <div className='p-1 ms-4 mt-2'><GiChopsticks size={40}/></div>
                <div className='ms-1 fs-5'>Japanese</div>
                </div>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar