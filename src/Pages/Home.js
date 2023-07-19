import React from 'react'
import Popular from '../Components/Popular';
import Veggie from '../Components/Veggie';
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <div style={{"marginLeft":"250px","marginTop":"150px"}}>
      <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}}>
        <Popular/>
        <Veggie/>
      </motion.div>
    </div>
  )
}

export default Home