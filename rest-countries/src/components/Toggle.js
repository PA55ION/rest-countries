import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
// import { device } from './device';

const Nav = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 3px -3px black;
`;

const Navbar = styled.div`
  max-width: 1010px;
  padding: 20px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  text-decoration: none;
`;

const Title = styled.div`
    font-size: 18px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    margin-right: 140px;
`;
 

const Button = styled.button`
    background: ${({ theme }) => theme.gradient};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    color: ${({ theme }) => theme.text}
    cursor: pointer;
    width: 40px;
    height: 25px;
    border-radius: 35px;
    position: absolute;
    right: 10%;
    top: 20px;
    margin-right: 40px;    
`;

const Sun = styled.img`
  position: absolute;
  top: 2px;
  left: 3px;
  transition: all 0.7s linear;
`;
const Moon = styled.img`
  position: absolute;
  top: 2px;
  left: 18px;
  transition: all 0.7s linear;
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Nav>
    <Navbar>
        <Title>Where in the world ?</Title>
      <Button onClick={toggleTheme}>
        {theme === "light" ? (
          <Sun
            src="https://image.flaticon.com/icons/svg/1164/1164954.svg"
            width="18"
            height="18"
            alt="Sun free icon"
            title="Sun free icon"
          ></Sun>
        ) : (
          <Moon
            src="https://image.flaticon.com/icons/svg/2033/2033921.svg"
            width="18"
            height="18"
            alt="Moon free icon"
            title="Moon free icon"
          ></Moon>
        )}
      </Button>
    </Navbar>
    </Nav>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
