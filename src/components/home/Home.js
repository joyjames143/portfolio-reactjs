import React, { useState,useEffect,useLayoutEffect}  from 'react'
import './Home.css';
import {Link} from "react-router-dom"
import { Blurhash } from "react-blurhash";

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

  const [image1Load, setImage1Load] = useState(true);

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

  useLayoutEffect(() => {
    handleResize(); 
  },[])
  
  return (
    <div className='zero'>   
        
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <div className='one' >
              <div className='one-point-one'>
                <Blurhash className='one-point-one-blurhash-img' hash="UPE^G~0~$gsB|^JmSgw^WFxYazNbFd$gWVW;"  resolutionX={32} resolutionY={32} punch={1}/>
                <img className='one-point-one-img' src={image1}  alt="fireSpot" loading='eager' />
                  <span>PROJECTS</span>
              </div>
          </div>
        </Link>

        <Link to="/about" style={{ textDecoration: 'none' }}>
          <div className='two'>
              <div className='two-point-one'>
                 <Blurhash className='one-point-one-blurhash-img' hash="U8J7N|-oxt%2~BRk4;ay0gNGIpt6NHIpjaoe"  resolutionX={32} resolutionY={32} punch={1}/>
                  <img className='two-point-one-img' src={image2}  alt="fireSpot" loading='lazy'/>
                  <span>KNOW ME ?</span>
                </div>
          </div>
        </Link>

        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <div className='three' >
              <div className='three-point-one'>
                  <Blurhash className='one-point-one-blurhash-img' hash="UPH[vxnisCj[}=jGSzoLtkR+OEkB%0S2Naoe"  resolutionX={32} resolutionY={32} punch={1}/>
                  <img className='three-point-one-img' src={image3}  alt="fireSpot" loading='lazy'/>
                  <span>CONTACT ME</span>
                </div> 
          </div>
        </Link>
 
    </div>
    
  )
}
