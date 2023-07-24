import React from 'react'
import './Educatin.css'
import { Icon } from '@iconify/react';
const Eduction = () => {
  return (
    <section className='box'>


      <h2 style={{margin:'0px'}} className='heading'>Eduction</h2>
      <div className='services-container'>
        <div className="services-box">

        <Icon  className='icon' icon="ph:code-fill" />

            <h5 class="card-title">web Developer</h5>
            <p class="card-text">Udemy</p>
         
        </div>
     
     
        <div class="services-box">

        <Icon className='icon' icon="solar:diploma-verified-bold" />
          <h5 class="card-title" style={{ marginTop: '0' }}>Diploma</h5>
          <p class="card-text">Meera bai institute of technology</p>

     
      </div>
      
        <div class="services-box">
        <Icon  className='icon' icon="twemoji:graduation-cap" />
            <h5 class="card-title">Graduation</h5>
            <p class="card-text">Indira ghandi national open university
            </p>
            </div>
      
      </div>


    </section >
  )
}

export default Eduction
