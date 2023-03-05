import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
//     <main className={show ? 'space-toggle' : null}>
//\\   <header className={`header ${show ? 'space-toggle' : null}`}>
//         <div className='header-toggle' onClick={() => setShow(!show)}>
//           <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
//         </div>
//       </header> 

       <aside className={`sidebar ${show ? 'show' : null}`}> 
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>CS ELP 1.0</span>
            </Link>

            <div className='nav-list'>
            <Link to='/Home' className='nav-link active'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Home</span>
              </Link>
              <Link to='/About Us' className='nav-link active'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>About Us</span>
              </Link>
              <Link to='/All Trackers' className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>All Trackers</span>
              </Link>
              <Link to='/Teachers' className='nav-link'>
                <i className='fas fa-image nav-link-icon'></i>
                <span className='nav-link-name'>Teachers</span>
              </Link>
              <Link to='/Playground' className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'>Playground</span>
              </Link>
              <Link to='/Placement Preparation' className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'>Placement Preparation</span>
              </Link>
            </div>
          </div>

          <Link to='/Contact Us' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Contact Us</span>
          </Link>
        </nav>
          </aside> 

     
    //   {/* <h1>Content</h1> */}
    // </main>
  );
};

export default Sidebar;