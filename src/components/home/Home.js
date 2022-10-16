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

  const [hashcodeImage1,sethashcodeImage1] = useState('|PE^G~0~$gsBNusnS3snWC|^JmSgw^Nbs-R+oLazWFxYazNbxDWWbGn%WVFd$gWVW;o0WCsnSgn%kCNuxFafW.oLjZa{WVODW;snjZbaWCoKWVa{S#snjGoeWCW:oLWVWos.WCoLoeWCoejZWWj[j[o1S2ayW;oJWWj[jG');
  const [hashcodeImage2,sethashcodeImage2] = useState('|8J7N|-oxt%2ay^jxZ?GoK~BRk4;ayfkj[oLxZs.0gNGIpt6IpR*RkR*oeNHIpjaoeRkWCR*t6WC%0RkR+WCt6t6s.j@R+={WCoes:xZf6oeoLoLNHayIpRkt6IpxZazt6xas:ayxZoLt6s:NHxZays.f6xZ%1s.WVs.oe');
  const [hashcodeImage3,sethashcodeImage3] = useState('|PH[vxnisCj[$%xGR*soxG}=jGSzoLxGoKs:WVWotkR+OEkBOBofjsa#j[%0S2Naoet6f*jGayf*-AsAt6s.s9xGsoayWCw_soods.jbxFS2S2afxFS2fks.f7oeR*WpWCwKW;$ioKNaW;WVjuR*SeWVoJsUWWbHnjj[R+');

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 1200) {
      //images
        setimage1(lsnarotodog)
        setimage2(lstwopiece)
        setimage3(lsgoku)
      //hashcodeImages
        sethashcodeImage1("|TJjb-_$HD+Hixr?nhoJwcVaX9t7+[OsV@axayW;x[tl+uRkShrrbIadkCRPEkR*$fOsr=bvkBn%ozWCaKo0slS~niV@W=%g$fslbbi{X8fkxDkCwdShR*nhf+SOWCW;a|%gxFS2V@V@SNs9azbGw{a$WAfjXSg3f,t5j?")
        sethashcodeImage2("|YK1K}-;xaRj%Mxa-;%2Wq~qxtX8IUoJRks.ogoLtRRjoft7RjayM{a}n$-ot7xat7ozxtM{oeWBxaWCayRjWBt7RkoLj[t7M|RjWBs:t7j[ofofoeWBWBoft6oeRjWVkCxua|oLofoLj[bHayaet7ofofWBayf6off6WV")
        sethashcodeImage3("|AI4t$3Y00R3-=5SwHwbEL00MI?bgibc,.kWo#t702^+?v#Q#jX9nlNGRP1O$y=ZJCxbWBo~$*%1^Pnh9ZIV9|n%s9o}%1rrtlOYn$IUt7%1ozWrITRja0kqaexZNxnjI;}[JC9ZnNWBWBNGW;kCE2n%t7o#%1kDNGofxZ")

    } else {
      //images
        setimage1(machine)
        setimage2(twofacenaruto)
        setimage3(narutodemon)
        //hashcodeImages
        sethashcodeImage1("|PE^G~0~$gsBNusnS3snWC|^JmSgw^Nbs-R+oLazWFxYazNbxDWWbGn%WVFd$gWVW;o0WCsnSgn%kCNuxFafW.oLjZa{WVODW;snjZbaWCoKWVa{S#snjGoeWCW:oLWVWos.WCoLoeWCoejZWWj[j[o1S2ayW;oJWWj[jG")
        sethashcodeImage2("|8J7N|-oxt%2ay^jxZ?GoK~BRk4;ayfkj[oLxZs.0gNGIpt6IpR*RkR*oeNHIpjaoeRkWCR*t6WC%0RkR+WCt6t6s.j@R+={WCoes:xZf6oeoLoLNHayIpRkt6IpxZazt6xas:ayxZoLt6s:NHxZays.f6xZ%1s.WVs.oe")
        sethashcodeImage3("|PH[vxnisCj[$%xGR*soxG}=jGSzoLxGoKs:WVWotkR+OEkBOBofjsa#j[%0S2Naoet6f*jGayf*-AsAt6s.s9xGsoayWCw_soods.jbxFS2S2afxFS2fks.f7oeR*WpWCwKW;$ioKNaW;WVjuR*SeWVoJsUWWbHnjj[R+")
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
                <img className='one-point-one-img' src={image1}  alt="fireSpot" loading='lazy' />
                  <span>PROJECTS</span>
              </div>
          </div>
        </Link>

        <Link to="/about" style={{ textDecoration: 'none' }}>
          <div className='two'>
              <div className='two-point-one'>
                 <Blurhash className='one-point-one-blurhash-img' hash={hashcodeImage2}  resolutionX={32} resolutionY={32} punch={1}/>
                  <img className='two-point-one-img' src={image2}  alt="fireSpot" loading='lazy'/>
                  <span>KNOW ME ?</span>
                </div>
          </div>
        </Link> 

        <Link to="/contact" style={{ textDecoration: 'none' }} state={{ clicked: true }}>
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
