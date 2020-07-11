import React, { useState } from "react";
import Toggle from "./components/Toggle";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/globalStyles";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme";
import SearchBox from "./search";
import Card from "./components/Card";
import useRestCountryApi from "./restCountry";
import DropDown from './dropDown';

const App = () => {
  const [capital, setCapital] = useState('');
  const [region, setRegion] = useState('');
  const [ { data, error, isLoading }, doFetch, fetchRegion] = useRestCountryApi()
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="app">
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <SearchBox 
            type="text"
            value={capital}
            onChange={(event) => setCapital(event.target.value)}
            onClick={() =>
              doFetch(`https://restcountries.eu/rest/v2/capital/${capital}`)
            }
            onKeyPress={event => {
              if (event.key === 'Enter') {
                doFetch(`https://restcountries.eu/rest/v2/capital/${capital}`)
                console.log('enter press here! ') 
              }
            }}
          />
          <DropDown 
            value={region}
            onChange={(event) => setRegion(event.target.value)}
            onClick={() =>  fetchRegion(`https://restcountries.eu/rest/v2/region/${region}`)
            }
            
            // onKeyPress={event => {
            //   if (event.key === 'Enter') {
            //     fetchRegion(`https://restcountries.eu/rest/v2/region/${region}`)
            //     console.log('enter press here! ') 
            //   }
            // }}
          />
        </div>
        <React.Fragment>

          {error && <div>Something went wrong ...</div>}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <ul>
              {data.map((data) => (
                <Card
                  key={data.area}
                  flag={data.flag}
                  name={data.name}
                  population={data.population}
                  region={data.region}
                  capital={data.capital}
                />
              ))}
            </ul>
          )}
        </React.Fragment>
      </>
    </ThemeProvider>
  );
};

export default App;
