import React, { useState, useEffect }from 'react';
import SearchBox from '../search'
import useRestCountryApi from '../restCountry'
import DropDown from '../dropDown';
import Card from '../components/Card'
import axios from 'axios'
import SkeletonCard from '../components/SkeletonCard'



const HomePage = () => {
    const [url, setUrl] = useState();
    const [country, setCountry] = useState('');
    const [query, setQuery] = useState([]);
    const [region, setRegion] = useState();
    const [result, setResult] = useState();

    const [ { data, error, isLoading }, doFetch, fetchRegion] = useRestCountryApi();
    // let text = country ? "name/"+country: "all";

    // useEffect(() => {
    //     let text = country ? "name/"+country: "all";
    //     const fetchData = async () => {
    //         const result = await axios(`https://restcountries.eu/rest/region/${query}`)
    //         setResult(result.data)
    //     };
    //     fetchData();
    // }, [query])

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
                value={region}
                onChange={(event) => setRegion(event.target.value)}
                onPointerLeave ={() =>  fetchRegion(`https://restcountries.eu/rest/v2/region/${region}`)
            }
            />
              <React.Fragment>             
             {/* <div> */}
             {isLoading && <SkeletonCard />}
              {data.map((data) => (
                <Card
                  key={data.area}
                  flag={data.flag}
                  name={data.name}
                  population={data.population}
                  region={data.region}
                  capital={data.capital}
                  alpha3Code={data.alpha3Code}
                  // nativeName={data.languages[0].nativeName}
                  // topLevelDomain={data.topLevelDomain}
                  // subRegion={data.subRegion}
                  // currencies={data.currencies[0].name}
                  borders={data.borders}                  
                />
                ))}
              
            {/* </div> */}
        </React.Fragment>
            </div>
    )
}

export default HomePage
