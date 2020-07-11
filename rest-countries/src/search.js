import React from "react";
import styled from "styled-components";
//import RestCountry from "./restCountry";

const Input = styled.input`
max-width: 100%;
// width: %;
padding: 14px 75px;
text-align: left;
height: 20px;
margin: 20px;
border-radius: 6px;
border: 2px solid #ccc;
font-family: 'Nunito Sans', sans-serif;
font-size: 16px;
color: ${({ theme }) => theme.text}
background: ${({ theme }) => theme.inputBackground};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.a`
  font-size: 24px;
  position: absolute;
  left: 50px;
  top: 90px;
  color: #ccc;
`;

class SearchBox extends React.Component {
  render() {
    console.log(this.props)
    const {type, value, onChange, onClick, onKeyPress, onSelect } = this.props
    return (
      <Wrapper>
        <Button 
          onClick={onClick}
        >
          <i class="fas fa-search"></i>
        </Button>
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
