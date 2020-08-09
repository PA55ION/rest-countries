import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

const Border = styled.div`
    width: 125px;
    height: 35px;
    text-align: center;
    border-radius: 3px;
    margin: 5px;
    padding-top: 5px;
    color: ${({theme}) => theme.text};
    background: ${({theme}) => theme.background};
    font-family: 'Nunito Sans', sans-serif;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    :hover {
        cursor: pointer;
    }
`;

const BorderBtn = ({ code, history}) => {
    return (
        <>
            <Border onClick={() => 
                history.push(`/country/${code}`)}>
                {code}
            </Border>
        </>
    )
}

export default withRouter(BorderBtn);