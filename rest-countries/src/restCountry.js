// import React, { useState, useEffect } from "react";

// const RestCountry = ({city, region})  => {
//   const [error, setError] = useState(null);
//   const [data, setData] = useState([]);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     fetch(`https://restcountries.eu/rest/v2/region/europe`)
//       .then((res) => res.json())
//       .then(
//         (data) => {
//           console.log('this is return data: ', data);
//           setIsLoaded(true);
//           setData(data);
//         },
//         (error) => {
//           setError(error);
//           setIsLoaded(true);
//         }
//       );
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } 
  
//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   } 
//     return (
//         <>
//         <ul>
//         {data.map((data) => (
//           <li key={data.name}>
//             <img src={data.flag} alt='flag' />
//             <h4>{data.name}</h4>
//             <p>Population: {data.population.toLocaleString('en-US')}</p>
//             <p>Region: {data.region}</p>
//             <p>Capital: {data.capital}</p>
//           </li>
//         ))}
//       </ul>
//       </>
//     );
//   }


// export default RestCountry;
