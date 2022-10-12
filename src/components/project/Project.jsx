import React,{useState} from 'react'
import './Project.css';
import {Link} from "react-router-dom"
import Navbar from '../navbar/Navbar';

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





function CardsHolder({title,image,githubLink,liveLink, githubColor, hostcolor}) {
  return (
    <li class="cards_item">
        <div class="card">
          <div class="card_image"><img className='p-image' src={image}/></div>
          <div class="card_content">
            <p class="small">{title} </p>
              <div className='paragraph'>
                {/* check if github link is present and live link is present only those links are populated */}
                {typeof githubLink === 'undefined' ? "" :<a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color: githubColor}}>
                  <p class="smaller">Github</p>
                </a>}
                {typeof liveLink === 'undefined' ? "" :<a href={liveLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color: hostcolor}}>
                  <p class="smaller">LiveLink</p>
                </a> }
                
            </div>
          </div>
        </div>
    </li>
  )
}


export default function Project() {
  return (
    <div className='project-main'>
<Navbar/>
        
      <div class="test" contenteditable>
        <div className='p-two'>
              <ul class="cards">
                <CardsHolder title={"Codpen Replica"} image={codepen} githubLink='https://github.com/joyjames143/jj-version-codepen' liveLink="https://codehere-jj.netlify.app/" githubColor="aqua" hostcolor='orangered' />
                <CardsHolder title={"Corona Tracker"} image={covid} githubLink='https://github.com/joyjames143/covid-19-tracker' liveLink="https://jj-covid-tracker.netlify.app/" githubColor="aqua" hostcolor='orangered' />
                <CardsHolder title={"Track Expense"} image={expense} githubLink='https://github.com/joyjames143/react-ExpenseTracer' liveLink="https://jj-expense-tracker.netlify.app/" githubColor="aqua" hostcolor='orangered' />
                <CardsHolder title={"Movie DB "} image={movie} githubLink='https://github.com/joyjames143/movie-database-using-react' liveLink="https://joy-moviedb.netlify.app/" githubColor="aqua" hostcolor='orangered' />
                <CardsHolder title={"E commerce"} image={shopping} githubLink='https://github.com/joyjames143/react-book-store' liveLink="https://react-phone-store-joy.netlify.app/" githubColor="aqua" hostcolor='orangered' />
                <CardsHolder title={"Weather App"} image={weather} githubLink='https://github.com/joyjames143/weather-react' liveLink="https://weatheranyplace.netlify.app/" githubColor="aqua" hostcolor='orangered' />
                <CardsHolder title={"Zoom Replica"} image={zoom} liveLink='https://jj-zc.herokuapp.com/' githubColor="aqua" hostcolor='orangered' />
            </ul>
          </div>
      </div>

      {/* these below code is just for style do not disturb it but tweek it as your need */}
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
