import { useEffect, useState } from "react";
import axios from "axios";

function useRapidApiAI(symbol) {
    const [ rapidData, setRapidData ] = useState();
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect ( () => {
         // set loading and error to false and null
        setLoading(false);
        setError(null);

        const fetchData = async () => {
            try {
                const apiUrl = `http://localhost:3000/api/v1/stockChatBot/${symbol}`;
                const response = await axios.post(apiUrl);

                setRapidData(response.data);
                setLoading(false);

            } catch (err){
                setLoading(false);
                setError(err.message);
                console.log(err);
            }
        };
        setLoading(true);
        fetchData();

    }, [symbol]);

    return { rapidData, loading, error }

};

export default useRapidApiAI;