import { useState, useEffect } from "react";
import axios from "axios";

function useStockData(symbol,multiplier, timespan, from, to) {
    const [ stockData, setStockData ] = useState();
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect( () => {
        // make sure that all parameters there before run the api
        if (!symbol || !from || !to) {
            return
        }

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const apiUrl = `http://localhost:3000/api/v1/v2/aggs/ticker/${symbol}/range/${multiplier}/day/${from}/${to}`
                // console.log(`hello from the usestaockdata its a hook ${apiUrl}`)
                const response = await axios.get(apiUrl);
                setStockData(response.data);
                setLoading(false);
                // console.log(stockData);
                // console.log(response.data);

            } catch (err) {
                setLoading(false);
                setError(err.message);
                console.log(err);
            }
        };
        setLoading(true);
        fetchData();
        // console.log(stockData);
    }, [symbol, multiplier, timespan, from, to]);

    return {stockData, loading, error};
}

export default useStockData;


// Notes
    
    // const fetchAiAnalysis = async (stockData)=> {
    //     try {
    //         const response = await axios.post('http://localhost:3000/api/v1/gemini', {prompt: "hello its me"});
    //         console.log(response.data);
    //         return response.data;
    //     } catch (error) {
    //         console.error('cant connect to ai bitch...', error);
    //         throw error;
    //     }
    // };

    // fetchAiAnalysis();