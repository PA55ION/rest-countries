import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { withRouter } from 'react-router-dom'

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

// const Sun = styled.img`
//   position: absolute;
//   top: 2px;
//   left: 3px;
//   transition: all 0.7s linear;
// `;
// const Moon = styled.img`
//   position: absolute;
//   top: 2px;
//   left: 18px;
//   transition: all 0.7s linear;
// `;

const Toggle = ({ theme, toggleTheme, history }) => {
  return (
  <nav className="flex items-center justify-between flex-wrap p-6">
  <div className="flex items-center flex-shrink-0 mr-6">
    <span className="title font-semibold text-xl tracking-tight">Where in the world?</span>
  </div>
  <div className="flex items-center flex-shrink-0 mr-6">
    <a onClick={toggleTheme} className="flex items-center px-3 py-2">
    <ion-icon name="moon-outline"></ion-icon>
    <span className="dark-mode">Dark Mode</span>
    </a>
  </div>
 
</nav>
   

    // <Nav>
    // <Navbar>
    //     <Title>Where in the world ?</Title>
    //   <Button onClick={toggleTheme}>
    //     <ion-icon name="moon-outline"></ion-icon>
    //     <span className="dark-mode">Dark Mode</span>
        // { {theme === "light" ? (
        //   <Sun
        //     src="https://image.flaticon.com/icons/svg/1164/1164954.svg"
        //     width="18"
        //     height="18"
        //     alt="Sun free icon"
        //     title="Sun free icon"
        //   ></Sun>
        // ) : (
        //   <Moon
        //     src="https://image.flaticon.com/icons/svg/2033/2033921.svg"
        //     width="18"
        //     height="18"
        //     alt="Moon free icon"
        //     title="Moon free icon"
        //   ></Moon>
        // )} */}
    //   </Button>
    // </Navbar>
    // </Nav>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
