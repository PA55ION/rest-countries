import React from 'react';

const CardList = ({ country, history, match }) => {
  const { flag, name, population, region, capital, alpha2Code } = country;
  return (
    <div
      className="flag__container"
      onClick={() => {
        history.push(`${match.path}country/${alpha2Code.toLowerCase()}`);
      }}
    >
      <div
        className="flag__img"
        style={{
          backgroundImage: `url(${flag})`,
        }}
      />

      <div className="flag__content">
        <h1 className="name">{name}</h1>
        <ul className="list__items">
          <li className="list__item">
            Population: <span>{population}</span>
          </li>
          <li className="list__item">
            Region: <span>{region}</span>
          </li>
          <li className="list__item">
            Capital: <span>{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardList;