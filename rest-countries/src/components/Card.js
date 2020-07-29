import React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

import { device } from './device';

const ListItems = styled.div`
    display: inline-block;
    width: 250px;
    margin: 50px 5px 20px 85px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
     &:hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

    @media only screen and(max-width:450px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media only screen and(min-width:768px) {
    margin-left: 300px;
  }
}
`;

const ImageWrapper = styled.div`
  transition: all 0.2s ease-in-out;
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
  min-height: 9rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  img {
    max-width: 100%;
    align-self: stretch;
  }
`;

const Content = styled.div`
    padding: .5rem 1rem;
    width: 200px;
    overflow: hidden;
`;

const TextContent = styled.div`
    width: 220px;
    height: 220px;
    padding: .5rem;
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
`;


class Card extends React.Component {
    render() {
        const { flag, name, population, region, capital, match, history, borders, alpha3Code } = this.props
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
                    {/* {borders.map((border, index) => (
                       <Text key={index}>Border: {border}</Text>
                    ))} */}
                    </TextContent>
                 </Content>
            </ListItems>
        )
    }
}

export default withRouter(Card);

