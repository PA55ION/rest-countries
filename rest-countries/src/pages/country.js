import React, { useState, useEffect }from 'react';
import axios from 'axios';
import CardDetails from '../components/CardDetails'

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


const CountryPage = ({ match }) => {
    const [countryInfo, setCountryInfo] = useState([]);

    const  { countryCode } = match.params;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
            setCountryInfo(result.data)
        }
        fetchData();
    }, [countryCode])

    return (
        <>
        <CardDetails info={countryInfo} />
        </>
        
    )
}


export default CountryPage;