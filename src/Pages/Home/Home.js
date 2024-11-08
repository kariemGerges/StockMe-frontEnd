import React, { useState } from "react";
import ReactLoading from 'react-loading';
import useRealTimeData from "../../Hooks/useRealTimeData";
import { TimeSeriesScale } from "chart.js";

import useRapidApiStockNews from "../../Hooks/useRapidApiStockNews";



function Home({realTimeData}) {
    const [ params, setParams ] = useState({});
    const { stockNews } = useRapidApiStockNews(params.stock);


    return (
        <div className="container">
    <div className="row">
        <div className="col">
            <div className="card text-center border border-3 border-warning rounded-start">
                <div className="card-body">
                    <h5 className="card-title">STOCK</h5>
                    <p className="card-text">Text.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-center border border-3 border-warning rounded-start">
                <div className="card-body">
                    <h5 className="card-title">STOCK</h5>
                    <p className="card-text">Text.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-center border border-3 border-warning rounded-start">
                <div className="card-body">
                    <h5 className="card-title">STOCK</h5>
                    <p className="card-text">Text.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-center border border-3 border-warning rounded-start">
                <div className="card-body">
                    <h5 className="card-title">STOCK</h5>
                    <p className="card-text">Text.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-center border border-3 border-warning rounded-start">
                <div className="card-body">
                    <h5 className="card-title">STOCK</h5>
                    <p className="card-text">Text.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-center border border-3 border-warning rounded-start">
                <div className="card-body">
                    <h5 className="card-title">STOCK</h5>
                    <p className="card-text">Text.</p>
                </div>
            </div>
        </div>
    </div>
    
    <div className="col m-5 ">
            <h4>Let's make some money</h4>
        </div>

        <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Talk to AI</h5>
                    <p class="card-text">Interact with our AI model to receive personalized predictions</p>
                    <a href="/AIChatbot" class="btn btn-success">Ask AI</a>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Get some predictions</h5>
                    <p class="card-text">With our models, we can accurately predict future</p>
                    <a href="/DataAnalysis" class="btn btn-success">Let's Invest</a>
                </div>
                </div>
            </div>
        </div>
    
    <div className="col m-5">
        <h1>
            news goes here
            {stockNews}
        </h1>
    </div>
</div>

    );
};

export default Home;


{/* <div className="row mt-5">
        <div className="col text-start">
            <h4>Let's make some money</h4>
        </div>
        <div className="col"></div>
        <div className="col text-end">
            <button type="button" className="btn btn-success btn-lg">
                <a href="/DataAnalysis" className="text-white text-decoration-none">Let's Invest</a>
            </button>
        </div>
    </div> */}



     // if (!realTimeData || !realTimeData['Meta Data'] || !realTimeData['Time Series (Daily)']) {
    //     return (
    //         <div className="container"> 
    //             <div className="row">
    //                 <div className="col">
    //                     <p><br/><br/><br/></p>
    //                 </div>
    //                 <div className="col">
    //                 <p><br/><br/><br/></p><ReactLoading type={'spokes'} color={'#006400'} height={47} width={15} />
    //                 </div>
    //             </div>            
    //         </div>
    //     )
    // }

    // const metaData = realTimeData['Meta Data'];
    // const timeSeries = realTimeData['Time Series Daily'];

    // {metaData['2. Symbol']}
    // {timeSeries['1. open']}