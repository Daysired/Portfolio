import React from 'react'
import Burger from './Burger';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Nav = styled.nav`
  width: 100%;
  // margin-top: 10px;
  height: 85px;
  z-index: 9999;
  position: fixed;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  .logo {
    padding: 5px 0;
  }

  .main-logo {
    height: 60px;
    width: 60px;
    float: left;
    margin-top: 8px;
    margin-left:20px;
  }

  @media (max-width: 768px) {
    .main-logo {
      height: 50px;
      width: 50px;
      float: left;
      margin-top: 12px;
      margin-left:0px;
    }
  }

 
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Link to="/">
          <img class="main-logo" src="https://i.imgur.com/qhHLyD8.png" alt="Ode To Code Logo" />
          </Link>
       </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
