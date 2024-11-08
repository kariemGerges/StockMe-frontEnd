import { useEffect, useState } from "react";
import axios from "axios";

function useRealTimeData(symbol) {
    const [ realTimeData, setRealTimeData ] = useState();
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect ( () => {
        // if (!symbol){
        //     return
        // };

        const fetchRealTimeData = async () => {
            // set loading and error to false and null
            setLoading(false);
            setError(null);

            try {
                const apiUrl = `http://localhost:3000/api/v1/getRealData`;
                const response = await axios.get(apiUrl);
                setRealTimeData(response.data);
                setLoading(false);

            } catch (err) {
                setError(err.message);
                setLoading(false);
                console.log(err);
            }

        };

        setLoading(true);
        fetchRealTimeData();

    },[symbol])

    return { realTimeData, loading, error };
};

export default useRealTimeData;