import React,{useState} from 'react'
import "./Contact.css"
import Navbar from '../navbar/Navbar';


export default function Contact() {
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[phone,setPhone] = useState("");
  const[topic,setTopic] = useState("");
  const[content,setContent] = useState("");


const onclickSend = async() =>{
  console.log(name,email,phone,topic,content)

  let jsonbody = {}

  jsonbody["reciver_mail"] = "joyjames143007@gmail.com"
  jsonbody["reciver_pass"] = "myhnqrocosbcoumt"


  jsonbody["firstName"] = name
  jsonbody["email"] = email
  jsonbody["phone"] = phone
  // jsonbody["topic"] = topic
  jsonbody["message"] = content

    let response = await fetch("https://email-server-node-js.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        // "Access-Control-Allow-Origin":"*",
        // "Access-Control-Request-Method":"*",
        // "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH",
        // "Access-Control-Allow-Headers":"Content-Type",
        // "Access-Control-Expose-Headers":"Content-Type"
      },
      body: JSON.stringify(jsonbody),
    });
    console.log(JSON.stringify(jsonbody))
    console.log(response)

}




  return (
    <div className='contact-main'>
      
      <Navbar/>
    <div className='the-main-article-div'>

    
  <article className="l-design-widht">
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
        <input className="input__field" type="text" placeholder=" " onChange={e => setName(e.target.value)}/>
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
        <input className="input__field" type="text" placeholder=" " onChange={e => setEmail(e.target.value)}/>
        <span className="input__label">Your Email </span>
      </label>
      <p>and / or</p>
      <label className="input">
        <input className="input__field" type="text" placeholder=" " onChange={e => setPhone(e.target.value)} />
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
        <input className="input__field" type="text" placeholder=" " onChange={e => setTopic(e.target.value)}/>
        <span className="input__label">Topic</span>
        <br/>
        <textarea className="input__field" type="text" placeholder=" " onChange={e => setContent(e.target.value)}/>
        
      </label>
      {/* <div className="button-group">
        <button>Send</button>
        <button type="reset">Reset</button>
      </div> */}
    </div>
    <div className="card card--inverted">
    <div className="button-group">
        <button onClick={()=>onclickSend()}>Send</button>
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
