import React, { useState } from 'react';
// Hooks
import useStockData from '../../Hooks/useStockData';
import useAiFetcher from '../../Hooks/useAiFetcher';
import useGBMFetcher from '../../Hooks/useGBMFetcher';
import useRealTimeData from "../../Hooks/useRealTimeData";
// components
import SearchBar from '../../components/SearchBar/SearchBar';
import AIAnalysisDisplay from '../../components/AIAnalysisDisplay/AIAnalysisDisplay';
import GBMAnalysisDispaly from '../../components/GBMAnalysisDispaly/GBMAnalysisDispaly';
import ModelslstmProphet from '../../components/ModelslstmProphet/ModelslstmProphet';
import NewModelCombination from '../../components/NewModelCombination/NewModelCombination'
import StockChart from '../../components/StockChart/StockChart';
import useRapidApiAI from '../../Hooks/useRapidApiAI';
import RapidAIDisplay from '../../components/RapidAIDisplay/RapidAIDisplay';




function DataAnalysis() {
    const [params, setParams] = useState({});
    const {stockData} = useStockData(params.symbol, params.multiplier, params.timespan, params.from, params.to);
    const { realTimeData } = useRealTimeData(params.symbol);
    const {dataGBM} = useGBMFetcher(params.symbol, params.multiplier, params.timespan, params.from, params.to);
    const {stockAnalysisData} = useAiFetcher(stockData);
    const [loading, setLoading] = useState(false);
    const [loadingGBM, setLoadingGBM] = useState(false);
    const [error, setError] = useState(null);
    const [errorGBM, setErrorGBM] = useState(null);
    const { rapidData } = useRapidApiAI(params.symbol);


    return (
        <div className='container'>
        <br/>
        <SearchBar
            onSearch={(symbol, multiplier, timespan, from, to) => setParams({ symbol, multiplier, timespan, from, to })} 
        />
        {stockData && <StockChart data={stockData} />}
        <br/>
        <div className="row">
            <div className="col-md-3 mb-3">
                <div className="card">
                    <h5 className="card-header">Gemini</h5>
                    <div className="card-body">
                        <h5 className="card-title">AI analysis</h5>
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error}</p>}
                        {stockAnalysisData && <AIAnalysisDisplay analysis={stockAnalysisData} loading={loading} error={error}/>}
                        <a href="#" className="btn btn-success">Charts</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card">
                    <h5 className="card-header">LSTM & Prophet Model</h5>
                    <div className="card-body">
                        <h5 className="card-title">LSTM analysis</h5>
                        {stockData && <ModelslstmProphet data={stockData} />}
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error}</p>}
                        <a href="#" className="btn btn-success">Charts</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card">
                    <h5 className="card-header">New Model</h5>
                    <div className="card-body">
                        <h5 className="card-title">New model analysis</h5>
                        {stockData && <NewModelCombination data={stockData} />}
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error}</p>}
                        <a href="#" className="btn btn-success">Charts</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card">
                    <h5 className="card-header">GBM Model</h5>
                    <div className="card-body">
                        <h5 className="card-title">GBM analysis</h5>
                        {loadingGBM && <p>Loading...</p>}
                        {errorGBM && <p>Error: {error} </p>}
                        {dataGBM && <GBMAnalysisDispaly GBManaysis={dataGBM} />}
                        <a href="#" className="btn btn-success">Charts</a>
                    </div>
                </div>
            </div>
            <div className="col-md mb-5">
                <div className="card">
                    <h5 className="card-header">Final</h5>
                    <div className="card-body">
                        <h5 className="card-title">Final Analysis</h5>
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error} </p>}
                        {rapidData && <RapidAIDisplay data={rapidData} />}
                        <a href="#" className="btn btn-success">Charts</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default DataAnalysis;