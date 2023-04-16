import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../Untitled.png'
import '../App.css'

export default function Menu() {
  
  let showdrop = () => {
    let drop = document.getElementsByClassName('drop')[0];
    if (drop.classList.contains('d-block')) drop.className = 'drop d-none ms-5';
    else drop.className = 'drop d-block ms-5'
  }
  return (
    <>
      <div className='navbar'>
        <div className='d-flex'>
          <div className='ms-3'>
            <h2>PSYC CHEK</h2>
            <p>side hustle made easier</p>
          </div>
          <img src={logo} width="100px" alt="" />
          <p></p>
        </div>
        <ul className='nav d-flex p-3'>
          <li className='nav-item ms-5'><Link to="/">HOME</Link></li>
          <div className='dropdown'>
            <li className='nav-item ms-5' ><Link onClick={showdrop} to="#">SERVICES</Link></li>
            <div className="drop d-none ms-5">
              <div className='option'><Link to="/quiz">TAKE QUIZ</Link></div>
              <div className='option'><Link to="/showappt">APPOINTMENT</Link></div>
              <div className='option'><Link to="/chat">CHAT BOT</Link></div>
            </div>
          </div>
          <li className='nav-item ms-5'><Link to="/help">NEED HELP?</Link></li>
          <li className='nav-item mx-5'><Link to="/about">ABOUT</Link></li>

        </ul>
      </div>


    </>
  )
}


