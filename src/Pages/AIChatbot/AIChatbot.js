import React, { useState } from "react";
import '../AIChatbot/AIChatbot.css'
import ChatbotSearchBar from "../../components/ChatbotSearchBar/ChatbotSearchBar";
import useChatbotFetcher from "../../Hooks/useChatbotFetcher";
import picture from '../../assets/Trtile.jpeg'


function AIChatbot() {
    const [ params, setParams ] = useState({});
    const { chatBotResponse } = useChatbotFetcher(params.stock, params.message);

    // console.log( `data coming from Aichatbot first ${JSON.stringify(params)} then second ${JSON.stringify([chatBotResponse][0])}`)

    // Always remember ( =====> if the data available display it if not display the second part
        // {chatBotResponse && chatBotResponse.result ? (
        //     <p>{chatBotResponse.result}</p>
        // ) : (
        //     <p>No response yet... </p>
        // )}
    // )

    return (
        
        <div className="container">
            < ChatbotSearchBar
                onSearch={(stock, message) => setParams({stock, message})}
            /> 
            <div className="row">
                <div className="row container">
                    <div className="response-display">
                        {chatBotResponse && chatBotResponse.result ? (
                            <p>{chatBotResponse.result}</p>
                        ) : (
                            <div className="card card1" >
                                <img src={picture} className="card-img-top pic1" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">No Response Yet !!!</p>
                                    </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AIChatbot;