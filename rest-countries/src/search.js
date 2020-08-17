import React from "react";
import styled from "styled-components";
//import RestCountry from "./restCountry";

const Input = styled.input.attrs(props => ({
      type: 'text',
    }))`
    max-width: 100%;
    padding: 14px 25px;
    text-align: left;
    height: 50px;
    margin: 45px 20px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    background: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.text};
    &:focus {
      border-color: ${({ theme }) => theme.blue};
    }
      ::placeholder,
        ::-webkit-input-placeholder {
          color: ${({ theme }) => theme.text};
        }
        :-ms-input-placeholder {
          color: ${({ theme }) => theme.text};
        }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 638px) {
    width: 350px;
    height: 50px;
    // padding-left: 55px;
   }
`;

const Button = styled.a`
  font-size: 24px;
  position: absolute;
  left: 50px;
  top: 94px;
  color: #ccc;
`;

class SearchBox extends React.Component {
  render() {
    const { type, value, onChange, onClick, onKeyPress } = this.props
    return (
      <Wrapper>
        <Button 
          onClick={onClick}
        >
        </Button>
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-black absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
        <ion-icon name="search-outline"></ion-icon>
        </span>
        <Input
          placeholder="Search for a country..."
          type={type}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </Wrapper>
    );
  }
};

export default SearchBox;