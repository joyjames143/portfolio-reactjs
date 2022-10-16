import React,{useState} from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
// import { RiHome2Fill } from "react-icons/ri";
// import { ImProfile } from "react-icons/im";
// import { BsPhoneVibrateFill ,BsCamera2} from "react-icons/bs";
// import { CgProfile } from "react-icons/cg";
// import { HiHome } from "react-icons/hi";
// import { GrProjects} from "react-icons/gr";
import { GiAnvilImpact,GiBatMask,GiRotaryPhone,GiSpookyHouse } from "react-icons/gi";

import toast, { Toaster } from 'react-hot-toast';

const whereTodisplayAlert = () => {
  if (window.innerWidth > 1200) {
    return "top-right"
  }else{
    return "bottom-center"
  }
}

const notify = (pageName, position) => {
  toast(`already viewing "${pageName}" `, {
    duration: 1000,
    position: position,
  
    // Styling
    style: {
     
      background: '#333',
      color: '#fff',
    },
    className: 'notify-alert',
  
    // Custom Icon
    icon: '🤪',
  
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
  
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
  
}

const stringProject = "project";
const stringAbout = "about";
const stringContact = "contact"

export default function Navbar() {

  const [projects,setProject] = useState(false);
  const [about,setAbout] = useState(false);
  const [contact,setContact] = useState(false);


  const setcurrentPage = (currentPage) => {
    var pos = whereTodisplayAlert();
    if (currentPage === stringProject){
      if (projects !== true){
        console.log("project is clicked")
        setProject(true)
      }else{
        notify("project",pos)
      }
      
    }
    else if(currentPage === stringAbout){
      if (about !== true){
        console.log("about is clicked")
      setAbout(true)
    }else{
      notify("about",pos)
    }
    }
    else if (currentPage === stringContact){
      if (contact !== true){
        console.log("contact is clicked")
      setContact(true)
    }else{
      notify("contact",pos)
    }
    }

  }
  


  return (
    <div className='navbar' style={{backgroundColor: "#343434"}}>
          <div className='navbar-icon'>
            <Link to="/" style={{ textDecoration: 'none' ,display:"flex",justifyContent:"center"}} >
            
              <GiSpookyHouse className='nav-icon' size={30} color="#f5f5f5"/>
            </Link>
          </div>
          <div className='navbar-icon' >
                <Link to="/projects" style={{ textDecoration: 'none' ,display:"flex",justifyContent:"center"}} >
                
                  <GiAnvilImpact className='nav-icon' size={30} color="#f5f5f5" onClick={()=>setcurrentPage(stringProject)}/>
                </Link>
                <Toaster />
          </div>
          <div className='navbar-icon' >
            <Link to="/about" style={{ textDecoration: 'none' ,display:"flex",justifyContent:"center"}} >
            
              <GiBatMask className='nav-icon' size={28} color="#f5f5f5" onClick={()=>setcurrentPage(stringAbout)}/>
            </Link>
            <Toaster />
          </div>
          <div className='navbar-icon'>
            <Link to="/contact" style={{ textDecoration: 'none' ,display:"flex",justifyContent:"center"}} state={{ clicked: true }} >
            
              <GiRotaryPhone className='nav-icon' size={31} color="#f5f5f5" onClick={()=>setcurrentPage(stringContact)}/>
            </Link>
            <Toaster />
          </div>
    </div>
  )
}
