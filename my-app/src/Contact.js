import React from 'react'
import { Icon } from '@iconify/react';
import './Contact.css'
const Contact = () => {
  return (
    <section className='contact'>
      <div className='heading'>
        <h1>Contact</h1>



        <form>
          <div className='input-box'>
            <input type='text' placeholder='Full Name'></input>
            <input type='email' placeholder='Email Address'></input>
          </div>
          <div className='input-box'>
            <input type='Number' placeholder='Mobile Number'></input>
            <input type='text' placeholder='Email Subject'></input>
          </div>
          <textarea name='' id='' cols='30' rows='10' placeholder='Your Message'></textarea>
          <input type='submit' value='Send' className='btn'></input>

        </form>

      </div>

    </section >

  )
}

export default Contact
