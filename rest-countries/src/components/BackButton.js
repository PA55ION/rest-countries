import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

const Button = styled.button`
    font-family: 'Nunito Sans', sans-serif;
    border-radius: 3px;
    color: ${({theme}) => theme.text};
    background: ${({theme}) => theme.background};
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    font-size: 16px;
    margin-left: 30px;
`;

const Div = styled.div`
    margin: 50px;
`;

const BackButton = ({ history }) => {
    return (
         <Div>
            {/* <Button onClick={() => history.push('/')}>
             <span className="iconify" data-icon="bi:arrow-left" data-inline="false"></span>
             <span className="btn-text">Back</span>
            </Button> */}
            <Button onClick={() => history.push('/')} className="btn bg-white-300 font-bold py-2 px-4 rounded inline-flex items-center shadow-md">
             <span className="iconify" data-icon="bi:arrow-left" data-inline="false"></span>
            <span>Back</span>
            </Button>
        </Div>
    )
}

export default withRouter(BackButton);