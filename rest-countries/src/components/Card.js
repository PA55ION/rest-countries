import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const ListItems = styled.div`
    // display: inline-block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 250px;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin: 105px 50px 5px 50px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);
      &:hover {
    animation: headShake;
    animation-duration: .5s;
  }

    @media screen and (min-width: 450px) {
     margin-left: 85px;
     margin-right: 85px;
  }
  @media screen and (min-width: 620px) {
    display: inline-block;
    margin-left: 15px;
    margin-right: 15px;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 85px;
    margin-right: -15px;
  }
  @media screen and (min-width: 1400px) {
    margin-left: 95px;
    margin-right: 10px;
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
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  img {
    width: 100%;
    align-self: stretch;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 0.5rem 1.5rem;
  width: 240px;
  height: 190px;
  overflow: hidden;
`;

const TextContent = styled.div`
  width: 100%;
  padding-bottom: 1rem;
`;

const CountryName = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  font-weight: bolder;
  font-size: 20px;
  margin: 1rem 0 0.5rem;
  padding-bottom: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;
const Text = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  line-height: 1.6;
`;

class Card extends React.Component {
  render() {
    const {
      flag,
      name,
      population,
      region,
      capital,
      match,
      history,
      alpha3Code,
    } = this.props;
    return (
      <ListItems
        onClick={() => {
          history.push(`${match.path}country/${alpha3Code.toLowerCase()}`);
        }}
      >
        <ImageWrapper>
          <Image style={{ backgroundImage: `url(${flag})` }}></Image>
          {/* <Image src={flag} alt={name}></Image> */}
        </ImageWrapper>
        <Content>
          <TextContent>
            <CountryName>{name}</CountryName>
            <Text>
              Population: <span>{population.toLocaleString("en-US")}</span>
            </Text>
            <Text>
              Region: <span>{region}</span>
            </Text>
            <Text>
              Capital: <span className="capital">{capital}</span>
            </Text>
          </TextContent>
        </Content>
{/* <div class="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-gray-400 h-12 w-12"></div>
    <div class="flex-1 space-y-4 py-1">
      <div class="h-4 bg-gray-400 rounded w-3/4"></div>
      <div class="space-y-2">
        <div class="h-4 bg-gray-400 rounded"></div>
        <div class="h-4 bg-gray-400 rounded w-5/6"></div>
      </div>
    </div>
  </div> 
</div> */}
      </ListItems>
    );
  }
}

export default withRouter(Card);
