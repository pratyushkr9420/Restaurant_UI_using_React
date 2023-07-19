import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import DetailsPage from './DetailsPage';
import { Route, Routes,useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>}/>
          <Route path='/cuisine/:type' element={<Cuisine/>}/>
          <Route path='/searched/:search' element={<Searched/>}/>
          <Route path='/recipe/details/:id' element={<DetailsPage/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Pages