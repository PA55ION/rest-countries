import React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

import { device } from './device';

const ListItems = styled.div`
    display: inline-block;
    width: 250px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin: 75px 0 10px 85px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);
     &:hover {
    animation: pulse;
    animation-duration: 1.5s;
  }

    @media only screen and(max-width:450px) {
    display: flex;
    justify-content: space-center;
    align-items: space-center;
    flex-direction: column;
  }

  @media only screen and(min-width:768px) {
    margin-left: 300px;
  }
}
`;

const ImageWrapper = styled.div`
    transition: all 0.2s ease-in-out;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }
    @media only screen and(max-width:450px) {
      width: 80%;
      margin: 0 auto;
    }
`;

const Image = styled.div`
  width: 100%;
  min-height: 9em;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  img {
    width: 100%;
    align-self: stretch;
    object-fit: cover;
  }
`;

const Content = styled.div`
    padding: .5rem 2rem;
    width: 240px;
    overflow: hidden;
`;

const TextContent = styled.div`
    width: 100%;
    padding-bottom: 1rem;
`

const CountryName = styled.h2`
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bolder;
    font-size: 20px;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;


   &:hover {
       cursor: pointer
    }
`;
const Text = styled.p`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    line-height: .7;
`;

class Card extends React.Component {
    render() {
        const { flag, name, population, region, capital, match, history, alpha3Code } = this.props
        return (
            <ListItems onClick={() => {
            history.push(`${match.path}country/${alpha3Code.toLowerCase()}`);
            }}>
                <ImageWrapper>
                    <Image  style={{ backgroundImage: `url(${flag})`, }}></Image>
                 </ImageWrapper>
                 <Content>
                 <TextContent>
                    <CountryName>{name}</CountryName>
                    <Text><strong>Population: </strong> {population.toLocaleString('en-US')}</Text>
                    <Text><strong>Region: </strong>{region}</Text>
                    <Text><strong>Capital: </strong>{capital}</Text>
                    </TextContent>
                 </Content>
            </ListItems>
        )
    }
}

export default withRouter(Card);

