import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

const Navbar=() =>{
  const [show, setShow] =useState(false);
  return (
      


      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
        <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>


      <div className='logo'>CS ELP</div>
      <div className='display-menu'>
      <Link className='menu' to={'/'}>Home</Link>
      <Link className='menu' to={'/About'}>About Us</Link>
      <Link className='menu' to={'/Programs'}>Programs</Link>
      <Link className='menu' to={'/Courses'}>Courses</Link>
      <Link className='menu' to={'/Contact'}>Contact</Link>
      <Link className='menu' to={'/Login'}>Login</Link>
       </div> 
      
     </header>      
    
  )
}

export default Navbar
