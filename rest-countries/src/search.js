import React, { useState } from "react";
import styled from "styled-components";
import RestCountry from "./restCountry";

const Input = styled.input`
max-width: 100%;
width: 58%;
padding: 14px 55px;
text-align: left;
height: 20px;
margin: 20px;
border-radius: 4px;
border: 2px solid #ccc;
font-family: 'Nunito Sans', sans-serif;
color: ${({ theme }) => theme.text}
background: ${({ theme }) => theme.inputBackground};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  max-width: 100%;
  width: 45%;
  height: 45px;
  padding-left: 12px;
  border-radius: 4px;
  border: 2px solid #ccc;
  margin: 20px;
  font-family: "Nunito Sans", sans-serif;
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
`;

const Button = styled.a`
  font-size: 24px;
  position: absolute;
  left: 50px;
  top: 90px;
  color: #ccc;
`;

const SearchBox = () => {
  const [region, setRegion] = useState("asia");
  const [city, setCity] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setCity(value);
  }

  function handleSubmit(event) {
    const { value } = event.target;
    setRegion(value);
  }
  console.log(city);
  console.log(region);

  // onChange={(value) => console.log(value)}
  return (
    <Wrapper>
      <Button>
        <ion-icon name="search-outline" className="icon"></ion-icon>
      </Button>
      <Input
        placeholder="Search for a country..."
        type="text"
        value={city}
        onChange={handleChange}
      />
      <Select name="region" value={region} onChange={handleSubmit}>
        <option>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </Select>
    </Wrapper>
  );
};

export default SearchBox;
