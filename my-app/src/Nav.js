import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
//import { Icon } from '@iconify/react';
//import Toggle from './Toggle';

//import {FaBras, FaTimes} from 'react-icons/fa'
//import {Link } from 'react-router-dom'
//import Home from './Home'
//import About from './About'
//import Eduction from './Eduction'
//import Project from './Project'
//import Contact from './Contact'
class Nav extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({
      clicked:
        !this.state.clicked
    })
  }
  render() {

    return (

      <div >
        <header className='header'>
          <div className='logo'>
            <h3 style={{ color: 'black' }} >Port<span style={{ color: 'red', fontSize: '2rem' }}>fo</span>lio</h3>
          </div>

          <div className='menu-icon'>

          </div>

          <nav id='navbar' className={this.state.clicked ? '#navbar active' : '#navbar'}  >
            <Link className='menu' id='active' to='/'>Home</Link>
            <Link className='menu' to='/about'>About</Link>
            <Link className='menu' to='/eduction'>Eduction</Link>
            <Link className='menu' to='/project'>Project</Link>
            <Link className='menu' to='/contact'>Contact</Link>
          </nav>
          <div id='mobile' onClick={this.handleClick}>
            <i id='bar'
              className=
              {this.state.clicked ? 'fas fa-times' :
                'fas fa-bars'}>

            </i>

          </div>
        </header>

      </div>

    )
  }
}

export default Nav
