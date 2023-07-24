import React from 'react'
import './About.css'
const About = () => {
  return (
    <section className='about'>
      <div className='about-img'>
        
            <img src='sujata.jpg' alt=''></img>
          </div>
          
            <div className='about-content'>
              <h2 className='heading'>About Me</h2>
            <p >I am a frontend developer having expertise in React development. I
              design and develop web applications using the latest technologies to
              deliver the product with quality code.</p>
             
              <div className='margin'style={{margin:'15px'}}>
            <div className="progress" style={{margin:'1rem'}} role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25">
              <div className="progress-bar bg-success" style={{ width: '80%',color:'black' }}>HTML</div>
            </div>
            <div className="progress" style={{margin:'1rem'}} role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-info" style={{ width: '85%',color:'black'  }}>CSS</div>
            </div>
            <div className="progress" style={{margin:'1rem'}} role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-warning" style={{ width: "75%",color:'black' }}>Javascript</div>
            </div>
            <div className="progress" style={{margin:'1rem'}} role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-danger" style={{ width: "70%",color:'black' }}>React</div>
            </div>
            <div className="progress" style={{margin:'1rem'}} role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar" style={{ width: "80%",color:'black' }}>Bootstrap</div>
            </div>
          </div>
          </div>
        

   
    </section>
  )
}

export default About
