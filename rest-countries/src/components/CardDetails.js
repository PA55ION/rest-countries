import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'
import BackButton from './BackButton'


const CardDetails = ({ info }) => {
   
    console.log(info)
    const {
        name,
        nativeName,
        capital,
        population,
        region,
        subRegion,
        topLevelDomain,
        currencies,
        languages,
        borders,
    } = info;
    return(
        <div>
             <BackButton />
             <h1>{name}</h1>
        </div>
    )
}
export default withRouter(CardDetails);