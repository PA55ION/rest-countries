import React from "react";
import { func, string } from "prop-types";


const Toggle = ({ theme, toggleTheme, history }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-4">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span  className="title font-semibold text-xl tracking-tight leading-tight">
          Where in the world ?
        </span>
      </div>
      <div className='dark-mode-btn pr-4'>
        <button
          onClick={toggleTheme}
          className="flex items-center text-sm px-4 py-2 lg:mt-0 border none"
        >
          {theme === "light" ? (
            <ion-icon name="moon-outline"></ion-icon>
          ) : (
            <ion-icon name="moon"></ion-icon>
          )}
          <span className="text-lg tracking-tight">Dark Mode</span> 
        </button>
      </div>
    </nav>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;

