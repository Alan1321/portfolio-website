import React from 'react'

import './contact.css'

const Contact = ({ id }) => {
  return (
    <div id={id} className="contact">
        <div className="contact_title">
            <h1 className="contact_main_title">Contact</h1>
            <p className="contact_subtitle">My contact Info</p>
        </div>
        <div className="contact_body">
            <p>Email: alansubedi123@gmail.com</p>
            <p>Phone: +1 (980)-335-6859</p>
        </div>
    </div>
  )
}

export default Contact