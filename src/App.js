import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// components
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';

// pages
import Home from '../src/Pages/Home/Home'
import DataAnalysis from '../src/Pages/DataAnalysis/DataAnalysis';
import AIChatbot from '../src/Pages/AIChatbot/AIChatbot'
import About from '../src/Pages/About/About';
import Services from '../src/Pages/Services/Services';
import Contact from '../src/Pages/Contact/Contact'

// Hooks
import useRealTimeData from "./Hooks/useRealTimeData";

function App() {

  const { realTimeData } = useRealTimeData();
  
  return (
    <Router>
      <Navbar />
        <div className="container" >
          <Routes>
            <Route path='/home' element = {<Home realTimeData = {realTimeData} />}  />
              <Route path="/DataAnalysis" element = {<DataAnalysis />} />
              <Route path="/AIChatbot" element = {<AIChatbot />} />
                <Route path="/about" element = {<About />} />
                  <Route path="/Services" element = {<Services />} />
                <Route path="/contact" element = {<Contact />} />
              {/* <Route path="/" exact component={DataAnalysis} /> */}
              <Route path="/" element = {<Home />} />
          </Routes>
        </div>
      <Footer />
    </Router> 
  );


}

export default App;







// return (
//   <div classNameName="container">
//     <Navbar />
//         <SearchBar onSearch={(symbol, multiplier, timespan, from, to) => setParams({ symbol, multiplier, timespan, from, to })} />
//         {stockData && <StockChart data={stockData} />}
//     <div className="row">
// <div className="col-sm-6 mb-3 mb-sm-0">
//   <div className="card">
//     <div className="card-body">
//       <h5 className="card-title">Gemini</h5>
//       <p className="card-text">AI analysis for the Stock </p>
//       {loading && <p>Loading...</p>}
//         {error && <p>Error: {error}</p>}
//         {stockAnalysisData && <AIAnalysisDisplay analysis={stockAnalysisData} />}
//       <a href="#" className="btn btn-success">Charts</a>
//     </div>
//   </div>
// </div>
// <div className="col-sm-6 mb-3 mb-sm-0">
//   <div className="card">
//     <div className="card-body">
//       <h5 className="card-title">LSTM Model</h5>
//       <p className="card-text">LSTM analysis for the Stock</p>
//       {stockData && <ModelslstmProphet data={stockData} />}
//       {loading && <p>Loading...</p>}
//         {error && <p>Error: {error}</p>}
//       <a href="#" className="btn btn-success">Charts</a>
//     </div>
//   </div>
// </div>
// <div className="col-sm-6">
//   <div className="card">
//     <div className="card-body">
//       <h5 className="card-title">GBM Model</h5>
//       <p className="card-text">GBM analysis for the Stock</p>
//       {loadingGBM && <p>Loading...</p>}
//         {errorGBM && <p>Error: {error} </p>}
//         {dataGBM && <GBMAnalysisDispaly GBManaysis={dataGBM} />}
//       <a href="#" className="btn btn-success">Charts</a>
//     </div>
//   </div>
// </div>
// </div>

//   </div>
// );