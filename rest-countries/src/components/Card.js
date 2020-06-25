import React from 'react';

const Card = ( data ) => {
    console.log(data)
    return (
        <li className="card">
            <img src={this.props.flag} alt='flag' />
            <h2>{this.props.name}</h2>
            <p>Population: {this.props.population}</p>
            <p>Region: {this.props.region}</p>
            <p>Capital: {this.props.capital}</p>
        </li>
    )
}

export default Card;

