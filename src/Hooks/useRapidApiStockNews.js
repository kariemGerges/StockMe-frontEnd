import { useEffect, useState } from "react";
import axios from "axios";
import { set } from "date-fns";

const useRapidApiStockNews = (stock) => {
    const [ stockNews, setStockNews ] = useState();
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect ( () => {
          // set loading and error to false and null
        setLoading(false);
        setError(null);

        const fetchData = async () => {
            try {
                const apiUrl = ``;
                const response = await axios.post(apiUrl);

                setStockNews(response.data);
                setLoading(false);

            } catch (err) {
                setLoading(false);
                setError(err.message);
                console.log(err);
            }
        };
        setLoading(true);
        fetchData();

    },[stock])

    return { stockNews, loading, error}
};

export default useRapidApiStockNews;