import React from 'react';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton';

import { device } from './device';

const ListItems = styled.div`
    // display: flex;
    display: inline-block;
    margin-left: 75px;
    margin-top: 40px;
    // max-width: 250px;
    // height: 100%;
    // width: 100%;
    // margin: 30px;
    // max-height: 350px;
    // border: 1px solid green;
    // display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    // grid-template-columns: auto auto auto auto;
    flex-direction: row;
    // grid-gap: 10px;
    // margin-right: 150px;
    // margin-top: 4em;
`;

const List = styled.div`
    list-style-type: none;
    flex-direction: column;
    background: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.text};
    border-radius: 10px;
    // height: 350px;
    // max-width: 250px;
    // height: 100%;
    // width: 100%;
    // margin: 30px;
    // max-height: 350px;
    // margin: 30px 50px;
    max-width: 250px;
    // width: 100%;
    // height: 330px;
    padding-bottom: 14px;
    box-shadow: 0 3px 3px -3px black;   
`;

const Image = styled.img`
    width: 100%;
    //max-width: 200px;
    height: 200px;
    //height: auto;
     border-top-left-radius: 10px;
     border-top-right-radius: 10px;
`;

const Div = styled.div`
    // max-height: 150px;
    width: 100%;
    max-width: 250px;
`;

const Header = styled.h2`
    padding: 2px 30px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bolder;
    white-space: nowrap;
    width: 80%;
    overflow: hidden;              
    -o-text-overflow: ellipsis;    
    text-overflow: ellipsis;
    
   &:hover {
       cursor: pointer

    }
    
`

const Text = styled.p`
    font-family: 'Nunito Sans', sans-serif;
    padding-left: 30px;
`;

class Card extends React.Component {
    navTo(uri){
        window.location.href = window.location.origin + uri;
      }
    render() {
        const { flag, name, population, region, capital } = this.props
        return (
        // <SkeletonTheme color="#202020" highlightColor="#444">
            <ListItems>
                <List key={this.props.area} className="card">
                    <Div>
                        <Image src={ flag ||  <Skeleton width="100%" height={200} />} alt='flag'></Image>
                    </Div>
                    <Header onClick={() => {this.navTo('')}}>{name || <Skeleton width="70%"/>}</Header>
                    <Text><strong>Population: </strong>{population.toLocaleString('en-US') || <Skeleton width="50%" />}</Text>
                    <Text><strong>Region: </strong>{region || <Skeleton width="70%" />}</Text>
                    <Text><strong>Capital: </strong>{capital || <Skeleton width="70%"/>}</Text>
                </List>
            </ListItems>
        // </SkeletonTheme>
        )
    }
}

export default Card;

