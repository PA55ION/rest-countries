import React, { useState, useEffect }from 'react';
import SearchBox from '../search'
import useRestCountryApi from '../restCountry'
import DropDown from '../dropDown';
import Card from '../components/Card'
import axios from 'axios'
import SkeletonCard from '../components/SkeletonCard'

const HomePage = () => {
    // const [url, setUrl] = useState();
    const [country, setCountry] = useState('');
    const [query, setQuery] = useState([]);
    const [region, setRegion] = useState();
    const [result, setResult] = useState();
    const [data, setData] = useState([]);
    const [url, setUrl] = useState('https://restcountries.eu/rest/v2/all');
    const [regionUrl, setRegionUrl] = useState()
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading]= useState(false);

    // const [ { data, error, isLoading }, doFetch, fetchRegion] = useRestCountryApi();

    useEffect(() => {
        let text = country ? "name/"+country: "all";
        const fetchData = async () => {
            const result = await axios (`https://restcountries.eu/rest/v2/all`);
            setData(result.data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <SearchBox
                type="text"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
            //     onClick={() =>
            //     doFetch(`https://restcountries.eu/rest/v2/name/${country}`)
            //     }
            //     onKeyPress={event => {
            //         if (event.key === 'Enter') {
            //         doFetch(`https://restcountries.eu/rest/v2/name/${country}`)
            //     console.log('enter press here! ') 
            //    }
            //  }}
            />
             <DropDown 
                value={region}
                onChange={(event) => setRegion(event.target.value)}
                // onPointerLeave={() =>  fetchRegion(`https://restcountries.eu/rest/v2/region/${region}`)}
            />
            <React.Fragment> 
            {error && <div className='error'>Oh no something went wrong 😰</div>}
             {isLoading ? (
            //  <SkeletonCard/> 
            <div>Loading...</div>
             ) : ( 
                 <div>
                      {data.map((data, index) => (
                    <Card
                      key={data.index}
                      flag={data.flag}
                      name={data.name}
                      population={data.population}
                      region={data.region}
                      capital={data.capital}
                      alpha3Code={data.alpha3Code}
                    />
                    ))}
                </div>
             )}
            </React.Fragment>
            </div>
    )
}

export default HomePage
