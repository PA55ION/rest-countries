import React from "react";
import styled from "styled-components";


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



const DropDown = (props) => {
    console.log(props)
    return (
        <form>
         <Select 
            value={props.region} 
            onChange={props.onChange} 
            onPointerLeave ={props.onPointerLeave }
         >
            <option value="" defaultValue>Filter by region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </Select> 
        </form>
    )
}


export default DropDown;