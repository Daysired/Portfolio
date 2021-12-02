import React from 'react'
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-right: 40px;
  

    li  {
      padding: 25px 18px;
      color: black;
      font-weight: bold;
      text-decoration: none;


      a  {
        color: black;
        font-weight: bold;
        font-family: "COM4t Fine Regular", sans-serif;
        text-decoration: none;
        font-size: 15px;

        &:hover {
          text-decoration: underline;
        }
      }
     }
    
    @media (max-width: 768px) {
      flex-flow: column nowrap;
      background-color: black;
      position: fixed;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      height: 260px;
      width: 150px;
      padding-top: 0;
      transition: transform 0.3s ease-in-out;
      align-items: center;
      justify-content: center;

      li {
        padding: 15px;
        text-decoration: none;
        color: 	white;

        a {
         color: 	white;
         font-size: 12px;

         &:hover {
         color: #FFD000;
         text-decoration: none;
         }
        }

        &:hover {
          color: #fff;
        }
      }
    }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/">
          HOME
        </a>
      </li>

      <li>
        <a href="/about">
          ABOUT
        </a>
      </li>

      {/* <li>
        <a href="/projects">
          PROJECTS
        </a>
      </li> */}
      
      <li>
      <a href="/contact">
      CONTACT
        </a>
      </li>
      
      </Ul>
  )
}

export default RightNav
