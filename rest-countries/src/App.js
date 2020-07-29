import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Toggle from "./components/Toggle";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/globalStyles";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme";
// import SkeletonCard from './components/SkeletonCard';
import HomePage from './pages/home';
import CountryPage from './pages/country'

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="app">
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Router>
          <Switch>
            <Route exact path="/">
            <HomePage />
            </Route>
            <Route path="/country/:countryCode" component={CountryPage} />
          </Switch>
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
