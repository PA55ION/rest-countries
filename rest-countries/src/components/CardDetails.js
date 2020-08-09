import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import BackButton from "./BackButton";
import BorderBtn from "./BorderBtn";

const ImageWrapper = styled.div`
    padding: 12px 50px;
`;

const FlagImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 560px;
  object-fit: cover;
`;

const CardDetails = ({ info }) => {
  console.log(info);
  const {
    name,
    flag,
    nativeName,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = info;
  return (
    <div className="container">
      <BackButton />
      <ImageWrapper>
        <FlagImg src={flag} alt={name}></FlagImg>
      </ImageWrapper>
      <div className="country-detail">
        <h2>{name}</h2>
        <p>Native Name: <span> {nativeName}</span></p>
        <p><span>Population:</span> {population}</p>
        <p><span>Region:</span> {region}</p>
        <p><span>Sub Region:</span> {subregion}</p>
        <p><span>Capital:</span> {capital}</p>
      </div>
      <div className='country-state'>
        <p>Top level Domain: {topLevelDomain}</p>
        <p>
        Currencies:
        {currencies && currencies.map(({name}, code) => {
            if(code === currencies.length - 1) {
                return <span key={code}>{name}</span>
            }
            return <span key={code}>{name}, </span>
        })}
        </p>
        <p>
        Languages:
        {languages && languages.map(({ name }, index ) => {
            if (index === languages.length - 1) {
                return <span key={index}>{name}</span>
            }
            return <span key={index}> {name}, </span>
        })}
        </p>
      </div>
      <div className='border-country'>
        <p>Border Countries:</p>
        <div>
            {borders && borders.map((border, index) => (
                <BorderBtn key={index} code={border} /> 
            ))}
        </div>
      </div>
    </div>
  );
};
export default withRouter(CardDetails);
