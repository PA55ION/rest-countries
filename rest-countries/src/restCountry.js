import { useState, useEffect } from "react";
import axios from 'axios'

const useRestCountryApi = () => {
    const [data, setData] = useState([]);
    const [url, setUrl] = useState('https://restcountries.eu/rest/v2/all');
    const [regionUrl, setRegionUrl] = useState()
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

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            setIsLoading(true);

            try {
                const result = await axios(regionUrl);
                setData(result.data);
            } catch (error) {
                setError(true);
            }
            setIsLoading(false)
        };
        fetchData();
    }, [regionUrl])
    
    return [{ data, isLoading, error }, setUrl, setRegionUrl];
}

export default useRestCountryApi;
