import React from 'react'
import { Icon } from '@iconify/react'
import './Home.css'
const Home = () => {
    return (
        <section className='home'>
        <div className='home-contect' >
            
                <h4>Hello, my name is<br></br><span style={{fontSize:'4rem',}}>Sujata</span></h4>
                <h2>and I'm a Frontend and React developer</h2>
                <div className='logo'>
                <a href='https://github.com/sujatakuma'><Icon icon="devicon:github"/></a>
                <a href='https://www.linkedin.com/in/sujata-832194259/'><Icon icon="eva:linkedin-fill"/></a>
                <a href='https://instagram.com/sujata030420?igshid=MzNlNGNkZWQ4Mg=='><Icon icon="skill-icons:instagram"/></a>
                </div>
            </div>
            
            <div className='home-img'>
                <img style={{height:'300px', width:'380px',textAlign:'center'}} alt='' src='https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80'></img>
            </div>

        </section>
        
    )
}

export default Home
