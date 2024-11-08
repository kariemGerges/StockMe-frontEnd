import axios from "axios"
import { useEffect, useState } from "react";

function useAiFetcher(stockData) {
    const [ stockAnalysisData, setStockAnalysisData ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    // console.log( "AI fetcher1: before useEffect " + JSON.stringify(stockData));
   
    // console.log(`I need you to analyze the historical data of the following stock then tell me how might it do in the next couple of days according to what it did in the past 
    // Ticker name = ${JSON.stringify(stockData.ticker)} historical Ticker data = ${JSON.stringify(stockData.results)}`);

    useEffect ( () => {
        // Ensure there is data to analyze before running the api
        // console.log("AI fetcher2: before if statement " + JSON.stringify(stockData));

        if (!stockData) return;
        const fetchAiAnalysis = async () => {
            setLoading(true);
            try {
                // console.log("AI fetcher3: before api " + JSON.stringify(stockData.historicalData.ticker));
                const apiUrl = 'http://localhost:3000/api/v1/gemini';

                // const promptData = `I need you to analyze the historical data of the following stock then tell me how might it do in the next couple of days according to what it did in the past 
                // Ticker name = ${JSON.stringify(stockData.ticker)} historical Ticker data = ${JSON.stringify(stockData.results)}`;
                // const promptData = `I need you to analyze the historical data of the following stock according to the Geometric Brownian motion
                // then tell me how might it do in the next 10 days according to what it did in the past... then give me the future prices for the stock and a percentage of its increase or decrease  
                // Ticker name = ${JSON.stringify(stockData.ticker)} historical Ticker data = ${JSON.stringify(stockData.results)}`;
                
                const promptData = `Analyze this historical closing prices ${JSON.stringify(stockData.historicalData.results)} for stock symbol 
                ${JSON.stringify(stockData.historicalData.ticker)} using the Geometric Brownian Motion, LSTM and Prophet model . Estimate the following:
                Drift (μ): The expected average return of the stock per unit time.
                Volatility (σ): The standard deviation of the stock's returns.
                Using the above estimations, simulate 1000 price paths for the next 5 days. From these simulations, calculate:
                Predicted Price: The average of the simulated prices at the 5th day.
                Confidence Intervals: The range of prices that the stock has a 95% chance of falling within at the 5th day (e.g., +/- 5% of the predicted price).
                Percentage Change: The percentage change from the current closing price to the predicted price for the 5th day.
                `
                // tell me how might it do in the next 10 days according to what it did in the past... then give me the future prices for the stock
                // Summarize the estimated drift and volatility of the stock.
                // Briefly explain the concept of confidence intervals in the context of stock prices.
                // Provide the predicted price for the 10th day along with the 95% confidence interval.
                // State the percentage change from the current closing price to the predicted price.
                //                 LSTM Model
                // LSTM analysis for the Stock

                // Prophet
                
                const response = await axios.post( apiUrl, { prompt : promptData },{
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  });
                //   console.log(`AI RESULTS TEST ! ${response.data}`)
                setStockAnalysisData(response.data);
                setError(null);

            } catch (err) {
              setLoading(false);
              setError(`Failed to connect to AI service: ${err.message}`);
              console.log("Error in AI fetch:", err)  
            }
        };
        setLoading(false);
        fetchAiAnalysis();
    }, [stockData]);


    console.log("AI fetcher4: before return at the end " + JSON.stringify(stockAnalysisData));
    return {stockAnalysisData, loading, error};
}

export default useAiFetcher;