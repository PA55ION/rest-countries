import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
// import { device } from './device';

const Navbar = styled.div`
  display: flex;
  overflow: hidden;
  box-shadow: 0 6px 6px -6px black;
  text-decoration: none;
  padding: 16px 14px;
  font-size: 17px;
  width: 100%;
`;

const Title = styled.div`
    font-size: 18px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    margin-left: 20px;
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
    right: 0;
    top: 15px;
    margin-right: 20px;
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
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
