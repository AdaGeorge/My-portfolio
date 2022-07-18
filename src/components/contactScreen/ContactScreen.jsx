import React from 'react'
import './styles/contactScreen.css'

const ContactScreen = () => {
  return (
    <div className='contact-screen'>
        <div className="contact-wrapper">
          <h2 className="title-contact">Contact Me</h2>
          <div className="my-info">
            <div className='title-info-contact'>
                
              <h3>My phone</h3>
              <p>+52 221-106-66-08</p>
              
            </div>
            <div className='title-info-contact'>
              <h3>My Email</h3>
              <p>adageorge79@gmail.com</p>
            </div>
          </div>
          <p className = "message-contact">I'll get back to you</p>
          <form action="" method="" className="contact-form">
            <input type="text" className="contact-form-text" placeholder="Your name"/>
            <input type="email" className="contact-form-text" placeholder="Your email"/>
            <input type="text" className="contact-form-text" placeholder="Your phone"/>
            <input type="text" className="contact-form-text" placeholder="Your message"/>
            <button className='btn'>Send</button>
          </form>
        </div>
    </div>
  )
}

export default ContactScreen