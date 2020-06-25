import React, { useEffect, useState } from "react";
import axios from "axios";
import Toggle from "./components/Toggle";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/globalStyles";
// import logo from './logo.svg';
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme";
import SearchBox from "./search";
// import RestCountry from "./components/restCountry";
import CardList from "./components/CardList";
import RestCountry from "./restCountry";

//import image
// {/* <img src={logo} className="App-logo" alt="logo" /> */}

const App = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [capital, setCapital] = useState('us');
  const [url, setUrl] = useState('https://restcountries.eu/rest/v2/capital/us');
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoaded(true);
      const result = await axios(url);
        
      setData(result.data);
      setIsLoaded(false);
    };
    fetchData();
  }, [url]);
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="app">
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <SearchBox />
          {/* <RestCountry /> */}
        </div>
        <React.Fragment>
          <input
            type="text"
            value={capital}
            onChange={(event) => setCapital(event.target.value)}
          />
          <button type='button' onClick={() => setUrl(`https://restcountries.eu/rest/v2/capital/${capital}`)}> Search</button>
          { isLoaded ? (
            <div>Loading...</div>
          ) : (
            <ul>
            {data.map((data) => (
              <li key={data.name}>
                <img src={data.flag} alt="flag" />
                <h4>{data.name}</h4>
                <p>Population: {data.population.toLocaleString("en-US")}</p>
                <p>Region: {data.region}</p>
                <p>Capital: {data.capital}</p>
              </li>
            ))}
          </ul>
          )}
        </React.Fragment>
      </>
    </ThemeProvider>
  );
};

export default App;
