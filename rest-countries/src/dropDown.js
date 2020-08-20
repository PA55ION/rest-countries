import React from "react";
import styled from "styled-components";


const Select = styled.select`
  max-width: 100%;
  height: 50px;
  padding: 10px 12px;
  margin: 5px 20px;
  border-radius: 4px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  font-family: "Nunito Sans", sans-serif;
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
  border: ${({ theme }) => theme.toggleBorder};
  @media (min-width: 638px) {
    width: 200px;
    margin: -5px 0 0 20px;
    padding-right: 20px;
    position: absolute;
    right: 7%;
    white-space: nowrap;
}
@media (min-width: 814px) {
    right: 3%;
}

@media (min-width: 1400px) {
    right: 9%;
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