import { useState, useEffect } from "react";
import axios from "axios";


function useChatbotFetcher(stock, message) {
    const [ chatBotResponse, setChatBotResponse ] = useState();
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect ( () =>{
        // make sure that all parameters there before run the api
        if (!stock || !message) {
            return
        }

        // set loading and error to false and null
        setLoading(false);
        setError(null);

        const fetchData = async () => {
            try {
                const apiUrl = `http://localhost:3000/api/v1/finbot/${stock}/${message}`
                const response = await axios.post(apiUrl);
                setChatBotResponse(response.data);
                setLoading(false);

            } catch (err) {
                setLoading(false);
                setError(err.message);
                console.log(err);    
            }
        };
        setLoading(false);
        fetchData();

    },[stock, message]);
    
    return { chatBotResponse, loading, error };
};

export default useChatbotFetcher;