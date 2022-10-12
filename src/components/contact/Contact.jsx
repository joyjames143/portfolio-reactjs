import React from 'react'
import "./Contact.css"
import {Link} from "react-router-dom"
import { HiHome } from "react-icons/hi";
import { GrProjects } from "react-icons/gr";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Navbar from '../navbar/Navbar';


export default function Contact() {
  return (
    <div className='contact-main'>
      
      <Navbar/>
    <div className='the-main-article-div'>

    
  <article className="l-design-widht">
    <h1>Mini CSS-vars Design System</h1>
    <p>
      Most of the projects I work on have about <mark>3</mark> important colors:
      Main- , Accent- and Background-Color. Naturally tons of other colors are
      used in a typical Project, but they are mostly used within specific
      components.
    </p>
    <p>
      I find it useful to set those 3 colors as vars on the root and change them
      in specific contexts. It turns out that the complexity of the components I
      build is dramatically cut down by this. And also gives me a lot of control
      over the cascade.
    </p>
    <div className="card">
      <h2>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-coffee" href="#icon-coffee" />
        </svg>
        I'm James ,..what your's
      </h2>
      <label className="input">
        <input className="input__field" type="text" placeholder=" " />
        <span className="input__label">Your Name</span>
      </label>
      {/* <div className="button-group">
        <button>Send</button>
        <button type="reset">Reset</button>
      </div> */}
    </div>
    <div className="card card--inverted">
      <h2>
        {" "}
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-coffee" href="#icon-coffee" />
        </svg>
        how can i reach you ?
      </h2>
      <label className="input">
        <input
          className="input__field"
          type="text"
          placeholder=" "
          
        />
        <span className="input__label">Your Email </span>
      </label>
      <p>and / or</p>
      <label className="input">
        <input
          className="input__field"
          type="text"
          placeholder=" "
          
        />
        <span className="input__label">Your Phone number</span>
      </label>
      {/* <div className="button-group">
        <button>Send</button>
        <button type="reset">Reset</button>
      </div> */}
    </div>
    <div className="card card--accent">
      <h2>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-coffee" href="#icon-coffee" />
        </svg>
        What do you wanna talk about ?
      </h2>
      <label className="input">
        <input className="input__field" type="text" placeholder=" " />
        <span className="input__label">Topic</span>
        <br/>
        <textarea className="input__field" type="text" placeholder=" " />
        
      </label>
      {/* <div className="button-group">
        <button>Send</button>
        <button type="reset">Reset</button>
      </div> */}
    </div>
    <div className="card card--inverted">
      <h2>Colors</h2>
      <p>Play around with the colors</p>
      <input type="color" data-color="light" defaultValue="#ffffff" />
      <input type="color" data-color="dark" defaultValue="#212121" />
      <input type="color" data-color="signal" defaultValue="#fab700" />
    </div>
  </article>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
    <symbol id="icon-coffee" viewBox="0 0 20 20">
      <title>icon-coffee</title>
      <path
        fill="currentColor"
        d="M15,17H14V9h3a3,3,0,0,1,3,3h0A5,5,0,0,1,15,17Zm1-6v3.83A3,3,0,0,0,18,12a1,1,0,0,0-1-1Z"
      />
      <rect
        fill="currentColor"
        x={1}
        y={7}
        width={15}
        height={12}
        rx={3}
        ry={3}
      />
      <path
        fill="var(--color-accent)"
        d="M7.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,0,1-1.79.89Z"
      />
      <path
        fill="var(--color-accent)"
        d="M3.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z"
      />
      <path
        fill="var(--color-accent)"
        d="M11.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z"
      />
    </symbol>
  </svg>


    </div>
  )
}
