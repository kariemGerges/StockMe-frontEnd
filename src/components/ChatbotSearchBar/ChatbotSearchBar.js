import React ,{ useEffect, useState } from "react";
import '../ChatbotSearchBar/ChatbotSearchBar.css'

function ChatbotSearchBar({onSearch}) {
    const [ stock, setStock ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if ( !stock || !message) {
            return (
                <div>
                    At Least give me something
                </div>
            )
        }
        onSearch(stock, message);
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                        <div className="message-input">
                            <input 
                                type="text"
                                id="validationCustom01"
                                placeholder="Stock Symbol"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                id="validationCustom02"
                                placeholder="Ask a question..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button type="submit">Ask</button>
                        </div> 
                        <p style={{ fontSize: 'small' }}>
                                Please NOTE this is only a prediction. The decision is ultimately yours to make.
                        </p>   
                    </form>
                </div>
            </div>
        </div>
    )

};

export default ChatbotSearchBar;
