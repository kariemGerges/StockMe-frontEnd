import React, { useState } from "react";

function SearchBar({ onSearch }) {
    const [symbol, setSymbol] = useState('');
    const [multiplier, setMultiplier] = useState(1);
    const [timespan, setTimespan] = useState('day');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!symbol || !from || !to) {
            setError("WTF... I can't search with NOTHING... MF!!!!!");
            return;
        }
        setError('');
        onSearch(symbol, multiplier, timespan, from, to);
    };

    return (
        <div>
            <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                {error && <div className="error-message" style={{ color: "red", fontSize: "14px" }}>{error}</div>}
                <div className="d-flex flex-wrap align-items-center">
                    <div className="col-md-4">
                        <label htmlFor="validationCustom01" className="form-label">Stock Symbol</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="symbol like AAPL"
                            value={symbol}
                            onChange={(e) => setSymbol(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustom03" className="form-label">From</label>
                        <input
                            type="date"
                            className="form-control"
                            id="validationCustom03"
                            placeholder="From date"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustom04" className="form-label">To</label>
                        <input
                            type="date"
                            className="form-control"
                            id="validationCustom04"
                            placeholder="To date"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-2 mt-4">
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Agree to terms and conditions
                            <p style={{ fontSize: 'small' }}>
                                Please NOTE this is only a prediction. The decision is ultimately yours to make.
                            </p>
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
