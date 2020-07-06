import React from 'react';

class Card extends React.Component {
    render() {
        console.log(this.props)
        const { flag, name, population, region, capitol } = this.props
        return (
            <li  key={this.props.area} className="card">
                <img src={flag} alt='flag' />
                <h2>{name}</h2>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capitol}</p>
            </li>
        )
    }
}

export default Card;

