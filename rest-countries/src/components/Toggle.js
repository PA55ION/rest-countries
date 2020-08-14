import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { Link } from 'react-router-dom'

// import { device } from './device';

const Nav = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 3px -3px black;
  background: ${({ theme }) => theme.inputBackground};

`;

const Navbar = styled.div`
  max-width: 1010px;
  padding: 20px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  text-decoration: none;
  color: ${({theme}) => theme.text}
`;

const Title = styled.div`
    font-size: 18px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    margin-right: 140px;
    color: ${({theme}) => theme.text}
    background: ${({ theme }) => theme.gradient};
`;

const Button = styled.a`
    // background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
    cursor: pointer;
    // width: 40px;
    // height: 25px;
    // border-radius: 35px;
    position: absolute;
    right: 10%;
    top: 20px;
    margin-right: -30px;    
`;


const Toggle = ({ theme, toggleTheme }) => {
  return (
  <nav class="flex items-center justify-between flex-wrap p-6">
  <div class="flex items-center flex-shrink-0 mr-6">
    <span class="font-semibold text-xl tracking-tight">Where in the world ?</span>
  </div>
    <div>
      <a href="#" onClick={toggleTheme} class="flex items-center inline-block text-sm px-4 py-2 lg:mt-0"> 
      {theme === 'light' ? <ion-icon name="moon-outline"></ion-icon> :  <ion-icon name="moon"></ion-icon>}
      <span>Dark Mode</span>
       </a>
    </div>
</nav>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;

//  {{theme === "light" ? (
//          <ion-icon name="moon-outline"></ion-icon>
//        ) : (
//          <ion-icon name="moon"></ion-icon>
//        <span className="font-semibold text-xldark-mode">Dark Mode</span>
//        )}}