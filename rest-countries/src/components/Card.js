import React from 'react';
import styled from 'styled-components';
import CardList from './CardList'

import { device } from './device';

const ListItems = styled.div`
    display: inline-block;
    width: 250px;
    margin: 20px 55px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);

    // padding: 10px;


    @media only screen and(max-width:450px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

   
}
`;

const ImageWrapper = styled.div`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);

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
    padding: 1.5rem;
    width: 200px;
    height: 85%;


`;

const TextContent = styled.div`
    width: 200px;
    height: auto;

`

const CountryName = styled.h2`
    height: 45%;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bolder;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    
   &:hover {
       cursor: pointer
    }
`;

const Ul = styled.ul`
`

const Li = styled.li`
`

const Text = styled.p`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    line-height: 1;
`;

class Card extends React.Component {
    render() {
        const { flag, name, population, region, capital, country } = this.props
        return (
            <ListItems>
                <ImageWrapper>
                    <Image  style={{ backgroundImage: `url(${flag})`, }}></Image>
                 </ImageWrapper>
                 <Content>
                 <TextContent>
                    <CountryName>{name}</CountryName>

                    {/* <Ul>
                        <Li>
                          <strong>Population: </strong> {population.toLocaleString('en-US')}
                        </Li>
                        <Li>
                          <strong>Region: </strong>{region}
                        </Li>
                        <Li>
                          <strong>Capital: </strong>{capital}
                        </Li>
                    </Ul> */}
                    <Text><strong>Population: </strong> {population.toLocaleString('en-US')}</Text>
                    <Text><strong>Region: </strong>{region}</Text>
                    <Text><strong>Capital: </strong>{capital}</Text>
                    </TextContent>
                 </Content>
            </ListItems>
        )
    }
}

// const Card = ({ countriesList }) => {
//   return (
//     <div className="flag__lists u-container">
//       {countriesList.map((country) => {
//         return <CardList key={country.alpha2Code} country={country} />;
//       })}
//     </div>
//   );
// };

export default Card;

