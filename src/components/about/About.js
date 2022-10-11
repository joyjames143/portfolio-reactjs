import React from 'react'
import "./About.css"
import {Link} from "react-router-dom"
import { HiHome } from "react-icons/hi";
import { GrProjects } from "react-icons/gr";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export default function About() {
  return (
    <div className='main-about-div'>
      

      <div class="container">
          <div className='a-one'>
              <div className='a-one-icon'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <HiHome className='p-icon' size={30} color="black"/>
                </Link>
              </div>
              <div className='a-one-icon' >
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                  <GrProjects size={28} color="black"/>
                </Link>
              </div>
              <div className='a-one-icon'>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                  <CgProfile size={31} color="black"/>
                </Link>
              </div>
              <div className='a-one-icon'>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <BsPhoneVibrateFill size={31} color="black"/>
                </Link>
              </div>
            </div>
            <div class="instruction">Hover/Click the paragraphs to see the effect 👀 </div>
            <h1>PERSONAL DETAILS 📝</h1>
            <div class="content v2">
              <p>Name : Joy James</p>
              <br/>
              <p>Lorem ipsum dolor sit amet. Qui recusandae itaque et suscipit neque et corrupti beatae aut quas officia quo placeat nobis eos expedita odit est vitae culpa? Et porro consequatur id culpa iusto ut architecto nesciunt.</p>
            </div>
            <h1>SPOILERS 💩</h1>
            <div class="content v3">
              <p>Qui beatae autem et saepe earum et eligendi quia qui Quis saepe ea maiores omnis et ratione saepe. Quo commodi amet ea mollitia nisi est inventore nemo ut voluptate nostrum aut assumenda vero.</p>
            </div>
            <h1>UNDERLINE 🍧</h1>
            <div class="content v1">
              <p>Est doloribus doloremque et debitis autem aut reiciendis voluptas 33 distinctio qui blanditiis odio! Et sequi quod est dolorem dolores et quam atque quo veniam unde et Quis adipisci qui dicta porro.</p>
            </div>
            <h1>DASHES 😎</h1>
            <div class="content v4">
              <p>Id optio Quis sit repellat obcaecati et sunt eius ut aspernatur quia aut nobis quas sit voluptatem fugiat. Ut alias magni qui nobis consequatur qui enim velit.</p>
            </div>
            <h1>DELETED 🙈</h1>
            <div class="content v5">
              <p>Aut commodi ratione ut facilis dolore et autem itaque. Ut omnis unde hic labore explicabo ut quaerat officiis. Et quisquam blanditiis et saepe aspernatur ut nesciunt architecto in nulla soluta in dolorem laborum quo nulla enim! </p>
            </div>
            <h1>DELETED 🙈2 </h1>
            <div class="content v6">
              <p>Ut aspernatur minus a provident dolorem qui temporibus iure non voluptas labore? Quo Quis velit qui magni minus non odit voluptatem eum veritatis quidem ut dolores error sit omnis libero.</p>
            </div>
            <h1>CRAZY LINES 🤡</h1>
            <div class="content v7">
              <p>Et quidem soluta eos rerum aspernatur ut earum unde nam deserunt Quis et quidem numquam qui atque laudantium. In magni rerum est possimus praesentium ea alias tempora</p>
            </div>
            <h1>GRADIENT SWIPE 🎨</h1>
            <div class="content v8">
              <p>assumenda odio alias modi et nihil tempora ut corporis officiis. Et dolorum vero ut unde repellat rem possimus dignissimos id modi dolor cum laudantium voluptatem et soluta internos. Id odio enim vel quasi nesciunt qui</p>
            </div>
          </div>
    </div>
  )
}
