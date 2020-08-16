import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import BackButton from "./BackButton";
import BorderBtn from "./BorderBtn";
// import { Link } from "react-router-dom";

// const ImageWrapper = styled.div`
//     padding: 12px 50px;
// `;

const FlagImg = styled.img`
  width: 100%;
  max-width: 550px;
  object-fit: cover;
`;

// const Country = ({ data, match, history }) => {
//   const country = data.find(
//     (country) => country.alpha3Code === match.params.alpha3Code
//   );
//   const countryBordersNames = (border) => {
//     const datas = [...data].filter(({ alpha3Code }) => alpha3Code === border);
//     return (
//       <Link
//         to={`/country/${datas[0].alpha3Code}`}
//         key={border}
//       >
//         {datas[0].name}
//       </Link>
//     );
//   };

const CardDetails = ({ info }) => {
  console.log(info);
  const {
    name,
    flag,
    nativeName,
    capital,
    population,
    region,
    borders,
    subregion,
    topLevelDomain,
    currencies,
    languages,
  } = info;
  return (
      <div className='main-container'>
        <BackButton />
        <div className="container">
            <div className='img-wrapper'>
                <FlagImg src={flag} alt={name}></FlagImg>
            </div>
            <div className='country-name'>
                    <h3 className="country">{name}</h3>
            </div>
            <div className="country-detail">
                {/* <div className="row"> */}
                <p>Native Name: <span> {nativeName}</span></p>
                <p>Population:<span> {population}</span></p>
                <p>Region:<span> {region}</span></p>
                <p>Sub Region:<span> {subregion}</span></p>
                <p>Capital: <span> {capital}</span></p>
            </div>
            <div className='country-stat'>
                <p>Top Level Domain: <span> {topLevelDomain}</span></p>
                <p>
                Currencies:
                {currencies && currencies.map(({name}, code) => {
                    if(code === currencies.length - 1) {
                        return <span key={code}> {name}</span>
                    }
                    return <span key={code}> {name}, </span>
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
            {/* </div> */}
            <div className='border-country'>
            <p className='borders'>Border Countries: 
                    {/* {borders.length === 0 `${name} doesn't have any neighbor`} */}
                    {borders && borders.map((border, index) => (
                    <BorderBtn key={index} code={border} /> 
                    ))}
            </p>
            </div>
        </div>
    </div>
  );
};
export default withRouter(CardDetails);
