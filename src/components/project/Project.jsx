import React from 'react'
import './Project.css';
import Navbar from '../navbar/Navbar';
import { Blurhash } from "react-blurhash";

import codepen from "../../assets/images/codepen.jpg"
import covid from "../../assets/images/covid.jpg"
import expense from "../../assets/images/expense.jpg"
import movie from "../../assets/images/movie.jpg"
import shopping from "../../assets/images/shopping.jpg"
import weather from "../../assets/images/weather.jpg"
import zoom from "../../assets/images/zoom.jpg"





function CardsHolder({title,image,hashImagecode,githubLink,liveLink, githubColor, hostcolor}) {
  return (
    <li className="cards_item">
        <div className="card">
          <div className="card_image">
            {/* <Blurhash className='p-blurhash' width={100} height={300} hash={hashImagecode}  punch={1}/> */}
            <img className='p-image' src={image} loading="lazy"/>
            </div>
          <div className="card_content">
            <p className="small">{title} </p>
              <div className='paragraph'>
                {/* check if github link is present and live link is present only those links are populated */}
                {typeof githubLink === 'undefined' ? "" :<a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color: githubColor}}>
                  <p className="smaller">Github</p>
                </a>}
                {typeof liveLink === 'undefined' ? "" :<a href={liveLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color: hostcolor}}>
                  <p className="smaller">LiveLink</p>
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
        
      <div className="test" >
        <div className='p-two'>
              <ul className="cards">
                <CardsHolder title={"Codpen Replica"} image={codepen} hashImagecode={'U35}jhs:0gR-F}W=~As,^+oLIoWWmja}T1oJ'} githubLink='https://github.com/joyjames143/jj-version-codepen' liveLink="https://codehere-jj.netlify.app/" githubColor="aqua" hostcolor='orangered' />
                <CardsHolder title={"Corona Tracker"} image={covid} hashImagecode={'U7RW0c_N_3%100IBxv%L00t7%LIo00s8IUS7'} githubLink='https://github.com/joyjames143/covid-19-tracker' liveLink="https://jj-covid-tracker.netlify.app/" githubColor="aqua" hostcolor='orangered' />
                <CardsHolder title={"Track Expense"} image={expense} hashImagecode={'U4Rp8._3-:~q00WBRVWB00WBt4Rj00WBt6WB'} githubLink='https://github.com/joyjames143/react-ExpenseTracer' liveLink="https://jj-expense-tracker.netlify.app/" githubColor="aqua" hostcolor='orangered' />
                <CardsHolder title={"Movie DB "} image={movie} hashImagecode={'U4AAdrs900T1~po#D%Vr5ARi#*xw00XT?civ'} githubLink='https://github.com/joyjames143/movie-database-using-react' liveLink="https://joy-moviedb.netlify.app/" githubColor="aqua" hostcolor='orangered' />
                <CardsHolder title={"E commerce"} image={shopping} hashImagecode={'U5Q0df-;%L~p00kDxuMx00flRlRk00RjRktS'} githubLink='https://github.com/joyjames143/react-book-store' liveLink="https://react-phone-store-joy.netlify.app/" githubColor="aqua" hostcolor='orangered' />
                <CardsHolder title={"Weather App"} image={weather} hashImagecode={'U?PGX3of~qt7aefQRjayM{a|WBayNGfQjZay'} githubLink='https://github.com/joyjames143/weather-react' liveLink="https://weatheranyplace.netlify.app/" githubColor="aqua" hostcolor='orangered' />
                <CardsHolder title={"Zoom Replica"} image={zoom} hashImagecode={'U33cIKTpUgD6x[bFnmV[Y=Q;y.y.n9VutkpG'} liveLink='https://jj-zc.herokuapp.com/' githubColor="aqua" hostcolor='orangered' />
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
