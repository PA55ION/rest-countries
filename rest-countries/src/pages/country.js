import React, { useState, useEffect }from 'react';
import axios from 'axios';
import CardDetails from '../components/CardDetails'


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