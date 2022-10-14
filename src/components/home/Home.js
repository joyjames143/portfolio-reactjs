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

  const hashcodeImage1 = "|PE^G~0~$gsBNusnS3snWC|^JmSgw^Nbs-R+oLazWFxYazNbxDWWbGn%WVFd$gWVW;o0WCsnSgn%kCNuxFafW.oLjZa{WVODW;snjZbaWCoKWVa{S#snjGoeWCW:oLWVWos.WCoLoeWCoejZWWj[j[o1S2ayW;oJWWj[jG"
  const hashcodeImage2 = "|8J7N|-oxt%2ay^jxZ?GoK~BRk4;ayfkj[oLxZs.0gNGIpt6IpR*RkR*oeNHIpjaoeRkWCR*t6WC%0RkR+WCt6t6s.j@R+={WCoes:xZf6oeoLoLNHayIpRkt6IpxZazt6xas:ayxZoLt6s:NHxZays.f6xZ%1s.WVs.oe"
  const hashcodeImage3 = "|PH[vxnisCj[$%xGR*soxG}=jGSzoLxGoKs:WVWotkR+OEkBOBofjsa#j[%0S2Naoet6f*jGayf*-AsAt6s.s9xGsoayWCw_soods.jbxFS2S2afxFS2fks.f7oeR*WpWCwKW;$ioKNaW;WVjuR*SeWVoJsUWWbHnjj[R+"

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
                <Blurhash className='one-point-one-blurhash-img' hash={hashcodeImage1}  resolutionX={32} resolutionY={32} punch={1}/>
                <img className='one-point-one-img' src={image1}  alt="fireSpot" loading='eager' />
                  <span>PROJECTS</span>
              </div>
          </div>
        </Link>

        <Link to="/about" style={{ textDecoration: 'none' }}>
          <div className='two'>
              <div className='two-point-one'>
                 <Blurhash className='one-point-one-blurhash-img' hash={hashcodeImage2}  resolutionX={32} resolutionY={32} punch={1}/>
                  <img className='two-point-one-img' src={image2}  alt="fireSpot" loading='eager'/>
                  <span>KNOW ME ?</span>
                </div>
          </div>
        </Link>

        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <div className='three' >
              <div className='three-point-one'>
                  <Blurhash className='one-point-one-blurhash-img' hash={hashcodeImage3}  resolutionX={32} resolutionY={32} punch={1}/>
                  <img className='three-point-one-img' src={image3}  alt="fireSpot" loading='lazy'/>
                  <span>CONTACT ME</span>
                </div> 
          </div>
        </Link>
 
    </div>
    
  )
}
