import './App.css';
import { Routes,Route } from 'react-router-dom';
import {FaBars} from "react-icons/fa"

//React Components
import Logo from './Components/Logo';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
//React Components

// Cuisine Pages
import Pages from './Pages/Pages';
import { useState } from 'react';
import Sidebar from './Components/Sidebar';
// Cuisine Pages

function App() {
  const[hamburgerActive,setHamburgerActive] = useState(false)
  return (
    <div>
      <div className='d-flex'>
        <Logo/>
        <div className='hamburger-icon'>
          <button onClick={() => setHamburgerActive(!hamburgerActive)} className='btn'><FaBars size={30}/></button>
        </div>
      </div>
      {
        hamburgerActive ? <Sidebar/>:""
      }
      <SearchBar/>
      <NavBar/>
      <Pages/>
    </div>
  );
}

export default App;
