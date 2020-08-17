import React from "react";
import styled from "styled-components";


const Select = styled.select`
  max-width: 100%;
  height: 50px;
  padding: 14px 25px;
  margin: 5px 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-family: "Nunito Sans", sans-serif;
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
  @media (min-width: 638px) {
    width: 200px;
    margin: -5px 0 0 20px;
    padding-right: 20px;
    position: absolute;
    right: 10%;
    white-space: nowrap;
}
`;

const DropDown = (props) => {
    console.log(props)
    return (
        <form>
            <div className='dropdown'>
         <Select 
            value={props.region} 
            onChange={props.onChange} 
            onPointerLeave={props.onPointerLeave }
         >
            <option>Filter by region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </Select> 
        </div>
        </form>
    )
}


export default DropDown;