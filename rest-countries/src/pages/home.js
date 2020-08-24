import React, { useState, useEffect, useRef } from "react";
import SearchBox from "../search";
import DropDown from "../dropDown";
import Card from "../components/Card";
import axios from "axios";
import SkeletonCard from "../components/SkeletonCard";
// import Spinner from "../assets/Spinner.gif";

const HomePage = (props) => {
  const countries = useRef(null);
  const [country, setCountry] = useState();
  const [region, setRegion] = useState();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const END_POINTS = {
    ALL_COUNTRIES_API: "https://restcountries.eu/rest/v2/all",
    SEARCH_BY_NAME_API: "https://restcountries.eu/rest/v2/name/",
  };

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setIsLoading(true);
      try {
        const result = await axios.get(`${END_POINTS.ALL_COUNTRIES_API}`);
        countries.current = result.data;
        setData(countries.current);
        if (country) {
          const fetchCountry = await axios.get(
            `${END_POINTS.SEARCH_BY_NAME_API}${country}`
          );
          countries.current = fetchCountry.data;
          setData(countries.current);
        }
      } catch (error) {
        setError(true)
      }
      setIsLoading(false);
    };
    fetchData();
  }, [country]);

  useEffect(() => {
    const fetchData = async () => {
      if (region === "") {
        countries.current = null;
      } else {
        const result = await axios(
          `https://restcountries.eu/rest/v2/region/${region}`
        );
        countries.current = result.data;
        setData(countries.current);
      }
    };
    fetchData();
  }, [region]);

  return (
    <div>
      <SearchBox
        type="text"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      />
      <DropDown
        value={region}
        onChange={(event) => setRegion(event.target.value)}
      />
      <React.Fragment>
        {error && (
          <div className="error">
            Oh no something went wrong{" "}
            <span role="img" aria-label="sad-face">
              😰
            </span>
          </div>
        )}
        {isLoading ? (
            <div className="loading">Loading...</div>
        // <img src={Spinner} alt="loading-spinner" />
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
  );
};

export default HomePage;
