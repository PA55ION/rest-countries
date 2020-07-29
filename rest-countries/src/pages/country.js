import React, { useState, useEffect }from 'react';
import axios from 'axios';
import CardDetails from '../components/CardDetails'


const CountryPage = ({ match }) => {
    const [countryInfo, setCountryInfo] = useState([]);

    const  { countryCode } = match.params;

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
        .then((response) => response.json())
        .then((data) => setCountryInfo(data));
    }, [countryCode]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios(`https://restcountries.eu/rest/v2/name/${countryName}`);
    //         setCountryInfo(result.data)
    //     }
    //     fetchData();
    // }, [countryName])

    return (
        <>
        <CardDetails info={countryInfo} />
        </>
        
    )
}

// const CountryPage = ({ match }) => {
//   const [countryDetails, setCountryDetails] = useState([]);

//   const { countryCode } = match.params;

//   useEffect(() => {
//     fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
//       .then((response) => response.json())
//       .then((data) => setCountryDetails(data));
//   }, [countryCode]);

//   return (
//     <div className="u-container">
//       <CardDetails details={countryDetails} />
//     </div>
//   );
// };


export default CountryPage;