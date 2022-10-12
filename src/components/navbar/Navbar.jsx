import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
// import { RiHome2Fill } from "react-icons/ri";
// import { ImProfile } from "react-icons/im";
// import { BsPhoneVibrateFill ,BsCamera2} from "react-icons/bs";
// import { CgProfile } from "react-icons/cg";
// import { HiHome } from "react-icons/hi";
// import { GrProjects} from "react-icons/gr";
import { GiAnvilImpact,GiBatMask,GiRotaryPhone,GiSpookyHouse } from "react-icons/gi";


export default function Navbar() {
  return (
    <div className='navbar' style={{backgroundColor: "#343434"}}>
          <div className='navbar-icon'>
            <Link to="/" style={{ textDecoration: 'none' ,display:"flex",justifyContent:"center"}}>
              <GiSpookyHouse className='nav-icon' size={30} color="#f5f5f5"/>
            </Link>
          </div>
          <div className='navbar-icon' >
                <Link to="/projects" style={{ textDecoration: 'none' ,display:"flex",justifyContent:"center"}}>
                  <GiAnvilImpact className='nav-icon' size={30} color="#f5f5f5"/>
                </Link>
          </div>
          <div className='navbar-icon' >
            <Link to="/about" style={{ textDecoration: 'none' ,display:"flex",justifyContent:"center"}}>
              <GiBatMask className='nav-icon' size={28} color="#f5f5f5"/>
            </Link>
          </div>
          <div className='navbar-icon'>
            <Link to="/contact" style={{ textDecoration: 'none' ,display:"flex",justifyContent:"center"}}>
              <GiRotaryPhone className='nav-icon' size={31} color="#f5f5f5"/>
            </Link>
          </div>
    </div>
  )
}
