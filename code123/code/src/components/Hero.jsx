import React from 'react'
import '../styles/Hero.css'
import ada from '../images/ada.jpg'
import biri from '../images/biri.jpg'
import rm1 from '../images/rm1.jpg'
import scf from '../images/scf.jpg'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-text">
              <div className="hero-line" />
              <h1>Discover delicious recipes for every occasion.</h1>
              <p>
                Ready to tantalize your taste buds? Dive into our endless recipe library 
                and find your next food adventure.
              </p>
              <a href="#recipes"><button>Recipes</button></a>
        </div>
        <div className="hero-images">
            <span className='span1'>
              <img src={biri} alt="Biryani dish" />
              <img src={scf} alt="Special chicken fry dish" />
            </span>
            <span className='span2'>
              <img src={rm1} alt="Rasam dish" />
              <img src={ada} alt="Ada dish" />
            </span>
        </div>
    </div>
  )
}

export default Hero
