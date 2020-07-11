import React from 'react';
import styled from 'styled-components';

const ListItems = styled.div`
    display: flex;
    background: white;
    border-radius: 10px;
    margin: 50px 45px;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    width: 100%;
    height: auto;
    padding-bottom: 28px;
`;

const List = styled.li`
    list-style-type: none;
`;

const Image = styled.img`
    max-width: 300;
    width: 100%;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 3px 3px -3px black;

`;

const Header = styled.h2`
    padding: 6px 30px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bolder;
`

const Text = styled.p`
    font-family: 'Nunito Sans', sans-serif;
    padding-left: 30px;
`;

class Card extends React.Component {
    render() {
        const { flag, name, population, region, capital } = this.props
        return (
            <ListItems>
                <List key={this.props.area} className="card">
                    <Image src={flag} alt='flag'></Image>
                    <Header>{name}</Header>
                    <Text><strong>Population: </strong>{population.toLocaleString('en-US')}</Text>
                    <Text><strong>Region: </strong>{region}</Text>
                    <Text><strong>Capital: </strong>{capital}</Text>
                </List>
            </ListItems>
        )
    }
}

export default Card;

