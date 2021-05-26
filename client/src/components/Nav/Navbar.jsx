import React from 'react'
import Burger from './Burger';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Nav = styled.nav`
  width: 100%;
  // margin-top: 10px;
  height: 85px;
  position: fixed;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  .logo {
    padding: 5px 0;
  }

  .main-logo {
    width: 5vw;
    float: left;
    margin-top: 15px;
    margin-left:20px;
  }

  @media (max-width: 768px) {
    .main-logo {
      width: 10vw;
      float: left;
      margin-top: 15px;
      margin-left:20px;
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
