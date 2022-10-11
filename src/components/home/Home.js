import React, { useState,useEffect,componentDidMount,componentWillUnmount }  from 'react'
import './Home.css';
import {Link} from "react-router-dom"

//images imports
import machine from "../../assets/images/machine.jpeg"
import twofacenaruto from "../../assets/images/twofacenaruto.jpeg"
import narutodemon from "../../assets/images/narutodemon.jpeg"
import lsnarotodog from "../../assets/images/lsnarotodog.jpeg"
import lstwopiece from "../../assets/images/lstwopiece.jpeg"
import lsgoku from "../../assets/images/lsgoku.jpeg"

export default function Home() {
  const [image1, setimage1] = useState(machine);
  const [image2, setimage2] = useState(twofacenaruto);
  const [image3, setimage3] = useState(narutodemon);

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 1200) {
        setimage1(lsnarotodog)
        setimage2(lstwopiece)
        setimage3(lsgoku)
    } else {
        setimage1(machine)
        setimage2(twofacenaruto)
        setimage3(narutodemon)
    }
  }
  
  useEffect(() => {
    handleResize(); 
  },[])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (
    <div className='zero'>   
        
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <div className='one'  >
              <div className='one-point-one'>
                  <img className='one-point-one-img' src={image1}  alt="fireSpot" loading='lazy'/>
                  <span>PROJECTS</span> 
              </div>
              
          </div>
        </Link>

        <Link to="/about" style={{ textDecoration: 'none' }}>
          <div className='two'>
              <div className='two-point-one'>
                  <img className='two-point-one-img' src={image2}  alt="fireSpot" loading='lazy'/>
                  <span>KNOW ME ?</span>
                </div>
          </div>
        </Link>

        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <div className='three' >
              <div className='three-point-one'>
                  <img className='three-point-one-img' src={image3}  alt="fireSpot" loading='lazy'/>
                  <span>CONTACT ME</span>
                </div> 
          </div>
        </Link>
 
    </div>
    
  )
}
