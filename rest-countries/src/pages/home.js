import React, { useState, useEffect }from 'react';
import SearchBox from '../search'
import useRestCountryApi from '../restCountry'
import DropDown from '../dropDown';
import Card from '../components/Card'
import axios from 'axios'



const HomePage = () => {
    // const [data, setData] = useState([]);
    const [url, setUrl] = useState();
    const [country, setCountry] = useState('');
    const [query, setQuery] = useState([]);
    const [regionUrl, setRegionUrl] = useState();

    const [ { data, error, isLoading }, doFetch, fetchRegion] = useRestCountryApi();
    

    // useEffect(() => {
    //     let text = country ? "name/"+country: "all";
    //     const fetchData = async () => {
    //         const result = await axios(`https://restcountries.eu/rest/v2/${text}`)
    //         setData(result.data)
    //     };
    //     fetchData();
    // }, [])


    return (
        <div>
            <SearchBox
                type="text"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                onClick={() =>
                doFetch(`https://restcountries.eu/rest/v2/name/${country}`)
                }
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                    doFetch(`https://restcountries.eu/rest/v2/name/${country}`)
                console.log('enter press here! ') 
              }
            }}
            />
             <DropDown 
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
              <React.Fragment>             
             <div>
              {data.map((data) => (
                <Card
                  key={data.area}
                  flag={data.flag}
                  name={data.name}
                  population={data.population}
                  region={data.region}
                  country={data.country}
                  capital={data.capital}
                />
              ))}
            </div>
        </React.Fragment>
            </div>
    )
}

export default HomePage
