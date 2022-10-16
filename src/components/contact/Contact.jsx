import React,{useState,useEffect} from 'react'
import "./Contact.css"
import Navbar from '../navbar/Navbar';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom'

import { BsLinkedin } from "react-icons/bs";

var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;


export default function Contact() {
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[phone,setPhone] = useState("");
  const[topic,setTopic] = useState("");
  const[content,setContent] = useState("");
  const[clicked,setclicked] = useState(false)
  
  const location = useLocation();
  

  

  useEffect(() => {
    if (location.state != "undefined"){
      setclicked(location.state.clicked)
    }
    
    if (clicked){
      wakeUpEmailServer()
    }
  }, [clicked])

  const wakeUpEmailServer = async() => {
    try {
      let response = await fetch("https://email-server-node-js.onrender.com/")
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const sendEmailViaEmailServer = async(jsonbody) =>{
    let response = await fetch("https://email-server-node-js.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(jsonbody),
    }).then(clearfields);
    console.log(JSON.stringify(jsonbody))
    console.log(response)
    return new Promise((resolve, reject) => {
      resolve("suscess");
    });
    
  }

  const notify = (message,staytime,emoji,jsonbody) => {
    toast.promise(
      sendEmailViaEmailServer(jsonbody), 
      {
        loading: 'Sending Mail',
        success: message,
        error: "error,try again",
      },
      
      {
      // duration: staytime,
      position: 'top-right',
      style: {},
      success: {
        icon: emoji,
      },
      error:{
        icon: '🙁',
      },
      className: '',
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
      }
    );
  }

  const notifyValidationError = (message) => {
    toast(message, {
      duration: 3000,
      position: "top-right",
    
      // Styling
      style: {
       
        background: '#333',
        color: '#fff',
      },
      className: 'notify-alert',
    
      // Custom Icon
      icon: '😵‍💫',
    
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

const clearfields = () => {
    setName("")
    setEmail("")
    setPhone("")
    setTopic("")
    setContent("")
}

const validateSendingData = () => {
  if (name.length < 3){
    //name cannot be less than 3 letters
    throw new Error("name should atleast have 3 letters");
  }

  if (email.length === 0 && phone.length === 0){
    // any one should be given
    throw new Error("email and phone both are empty");
  }

  if (email.length !== 0){
    //check email validity
    if (!emailRegex.test(email)){
      throw new Error("email is invalid");
    }
  }

  if(phone.length !== 0){
    if (!Number.isInteger(Number(phone))){
      throw new Error("phone number is invalid");
    }
    
  }
  if (topic.length === 0){
    //topic cannot be empty
    throw new Error("topic is empty");
  }

  if (content.length === 0){
    // content cannot be empty
    throw new Error("content is empty");

  }
}

const onclickSend = async(message,staytime,emoji) =>{
  // notify(message,staytime,emoji);
  console.log(name,email,phone,topic,content)
  
  try {
    validateSendingData()
  } catch (error) {
    notifyValidationError(error.message)
    return
  }

  let jsonbody = {}

  jsonbody["reciver_mail"] = "joyjames143007@gmail.com"
  jsonbody["reciver_pass"] = "myhnqrocosbcoumt"


  jsonbody["firstName"] = name
  jsonbody["email"] = email
  jsonbody["phone"] = phone
  jsonbody["topic"] = topic
  jsonbody["message"] = content
  
  try {
    // clearfields();
    notify(message,staytime,emoji,jsonbody)
    
  } catch (error) {
    console.log(error)
  }
}




  return (
    <div className='contact-main'>
      <Navbar/>
    <div className='the-main-article-div'>
        <article className="l-design-widht">
        <div className="card card--inverted">
            <div className="button-group">
              <a href={"https://google.com"} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' , color:"white"}}>
                <button >Resume</button>
              </a>
                <a href={"https://www.linkedin.com/in/joyjames--/"} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none'  , color:"white"}}>
              <button >LinkedIn</button>
              </a>
            </div>
            
          </div>
          <h1>Wanna see me? Wanna speak to me?</h1>
          <p>
            If you are in a hurry and or really wanna speak to me faster here is mobile number
            <mark>7010693566</mark> .
            <br/>+91 is the country code as I'm from India
          </p>
          <p>
            If you wanna mail me some details and can wait for some time for my reply you can fill the below form   
          </p>
          <p>
            I'm really exicted to hear from you
          </p>
          
          <div className="card">
            <h2>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-coffee" href="#icon-coffee" />
              </svg>
              I'm James ,..what your's
            </h2>
            <label className="input">
              <input className="input__field" type="text" value={name} onChange={e => setName(e.target.value)}/>
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
              <input className="input__field" type="text" value={email}  onChange={e => setEmail(e.target.value)}/>
              <span className="input__label">Your Email </span>
            </label>
            <p>and / or</p>
            <label className="input">
              <input className="input__field" type="text" value={phone} onChange={e => setPhone(e.target.value)} />
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
              <input className="input__field" type="text" value={topic}  onChange={e => setTopic(e.target.value)}/>
              <span className="input__label">Topic</span>
              <br/>
              <textarea className="input__field" type="text" value={content}  onChange={e => setContent(e.target.value)}/>
              
            </label>
            {/* <div className="button-group">
              <button>Send</button>
              <button type="reset">Reset</button>
            </div> */}
          </div>
          <div className="card card">
          <div className="button-group">
              <button onClick={()=>onclickSend("mail successfully sent" , 6000 , '👏' )}>Send</button>
              <Toaster />
            </div>
            
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
