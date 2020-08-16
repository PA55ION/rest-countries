import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

const Border = styled.button`
    color: ${({theme}) => theme.text};
    background: ${({theme}) => theme.background};
    font-family: 'Nunito Sans', sans-serif;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    margin: 10px 3px 0 10px;
    
    :hover {
        cursor: pointer;
    }
`;

const BorderBtn = ({ code, history}) => {
    return (
        <>
        <Border onClick={() => history.push(`/country/${code}`)} className="btn bg-white text-grey-400 font-bold uppercase text-xs px-10 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mb-4" type="button" style={{transition: "all .15s ease" }}>
        {code}
        </Border>
        </>
    )
}

export default withRouter(BorderBtn);