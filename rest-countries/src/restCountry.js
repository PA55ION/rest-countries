import React, { useState, useEffect } from "react";
import axios from 'axios'

const useRestCountryApi = () => {
    const [data, setData] = useState([]);
    const [url, setUrl] = useState(`https://restcountries.eu/rest/v2/capital/us`);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading]= useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            setIsLoading(true);

            try {
                const result = await axios(url);
                setData(result.data);
            } catch (error) {
                setError(true);
            }
            setIsLoading(false)
        };

        fetchData();
    }, [url])
    return [{ data, isLoading, error }, setUrl];
}

export default useRestCountryApi;
