import { useState, useEffect } from "react";
import axios from "axios";

function useGBMFetcher(symbol, multiplier, timespan, from, to) {
    const [ dataGBM, setDataGBM ] = useState();
    const [ loadingGBM, setLoadingGBM ] = useState(false);
    const [ errorGBM, setErrorGBM ] = useState(null);


    useEffect ( () => {
        // make sure that all paramters there before run the api
        if (!symbol || !from || !to){
            return
        };

        const fetchData = async () => {
            // set loadingGBM to ture && set errorGBM to null
            setLoadingGBM(true);
            setErrorGBM(null);

            try {
                const apiUrl = `http://localhost:3000/api/v1/v2/simulate-gbm/${symbol}/range/${multiplier}/day/${from}/${to}`;
                const response = await axios.get(apiUrl);
                setDataGBM(response.data);
                setLoadingGBM(false);

            } catch (err) {
                setLoadingGBM(false);
                setErrorGBM(err.message);
                console.log(err);
            }
        };
        setLoadingGBM(true);
        fetchData();

    }, [symbol, multiplier, timespan, from, to]);
    
    return { dataGBM, loadingGBM, errorGBM};
};


export default useGBMFetcher;