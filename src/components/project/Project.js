import React from 'react'
import './Project.css';
import {Link} from "react-router-dom"
import { RiHome2Fill } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiHome } from "react-icons/hi";
import { GrProjects } from "react-icons/gr";


import codepen from "../../assets/images/codepen.jpg"
import covid from "../../assets/images/covid.jpg"
import expense from "../../assets/images/expense.jpg"
import movie from "../../assets/images/movie.jpg"
import shopping from "../../assets/images/shopping.jpg"
import weather from "../../assets/images/weather.jpg"
import zoom from "../../assets/images/zoom.jpg"

export default function Project() {
  return (
    <div className='project-main'>

<div className='p-one'>
          <div className='p-one-icon'>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <HiHome className='p-icon' size={30} color="black"/>
            </Link>
          </div>
          <div className='p-one-icon' >
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                  <GrProjects className='p-icon' size={28} color="black"/>
                </Link>
              </div>
          <div className='p-one-icon' >
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <CgProfile className='p-icon' size={28} color="black"/>
            </Link>
          </div>
          <div className='p-one-icon'>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <BsPhoneVibrateFill className='p-icon' size={31} color="black"/>
            </Link>
          </div>
        </div>
      <div class="test" contenteditable>
      

      <div className='p-two'>
            <ul class="cards">
              <li class="cards_item">
                <div class="card">
                  <div class="card_image"><img className='p-image' src={codepen}/></div>
                  <div class="card_content">
                    <p class="small">Codpen Replica </p>
                      <div className='paragraph'>
                      <p class="smaller">Github</p>
                      <p class="smaller">LiveLink</p>
                     
                    </div>
                  </div>
                </div>
              </li>
              <li class="cards_item">
                <div class="card">
                  <div class="card_image"><img className='p-image' src={covid}/></div>
                  <div class="card_content">
                    <p class="small">Codpen Replica </p>
                      <div className='paragraph'>
                      <p class="smaller">Github</p>
                      <p class="smaller">LiveLink</p>
                     </div>
                    </div>
                </div>
              </li>
              <li class="cards_item">
                <div class="card">
                  <div class="card_image"><img className='p-image' src={expense}/></div>
                  <div class="card_content">
                    <p class="small">track Expense </p>
                      <div className='paragraph'>
                      <p class="smaller">Github</p>
                      <p class="smaller">LiveLink</p>
                     </div>
                    </div>
                </div>
              </li>
              <li class="cards_item">
                <div class="card">
                  <div class="card_image"><img className='p-image' src={movie}/></div>
                  <div class="card_content">
                  <p class="small">Movie DB </p>
                      <div className='paragraph'>
                      <p class="smaller">Github</p>
                      <p class="smaller">LiveLink</p>
                     </div>
                  </div>
                </div>
              </li>
              <li class="cards_item">
                <div class="card">
                  <div class="card_image"><img className='p-image' src={shopping}/></div>
                  <div class="card_content">
                  <p class="small">E commerce </p>
                      <div className='paragraph'>
                      <p class="smaller">Github</p>
                      <p class="smaller">LiveLink</p>
                     </div>
                  </div>
                </div>
              </li>
              <li class="cards_item">
                <div class="card">
                  <div class="card_image"><img className='p-image' src={weather}/></div>
                  <div class="card_content">
                  <p class="small">Weather App </p>
                      <div className='paragraph'>
                      <p class="smaller">Github</p>
                      <p class="smaller">LiveLink</p>
                     </div>
                  </div>
                </div>
              </li>
              <li class="cards_item">
                <div class="card">
                  <div class="card_image"><img className='p-image' src={zoom}/></div>
                  <div class="card_content">
                  <p class="small">Zoom Replica</p>
                      <div className='paragraph'>
                      <p class="smaller">Github</p>
                      <p class="smaller">LiveLink</p>
                     </div>
                  </div>
                </div>
              </li>
          </ul>
        </div>

      </div>

        <svg className='shouldNotDisplay-JustForEffects' xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="squiggly-0">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
              <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
            </filter>
            <filter id="squiggly-1">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
            </filter>
            
            <filter id="squiggly-2">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
            </filter>
            <filter id="squiggly-3">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
            </filter>
            
            <filter id="squiggly-4">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
            </filter>
          </defs> 
        </svg>
    </div>
  )
}
