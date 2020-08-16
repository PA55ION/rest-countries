import React from "react";
import { func, string } from "prop-types";


const Toggle = ({ theme, toggleTheme }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-4">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="title font-semibold text-xl tracking-tight">
          Where in the world ?
        </span>
      </div>
      <div className='pr-4'>
        <a
          href="#"
          onClick={toggleTheme}
          className="flex items-center text-sm px-4 py-2 lg:mt-0"
        >
          {theme === "light" ? (
            <ion-icon name="moon-outline"></ion-icon>
          ) : (
            <ion-icon name="moon"></ion-icon>
          )}
          <span className="text-lg tracking-tight">Dark Mode</span>
        </a>
      </div>
    </nav>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;

//  {{theme === "light" ? (
//          <ion-icon name="moon-outline"></ion-icon>
//        ) : (
//          <ion-icon name="moon"></ion-icon>
//        <span className="font-semibold text-xldark-mode">Dark Mode</span>
//        )}}
