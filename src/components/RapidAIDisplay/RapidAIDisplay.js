import React from 'react';

function RapidAIDisplay({ data }) {
  const { recommendation, history } = data;

  console.log(
    `data inside the rapiddisplay
    recommendation : ${recommendation}

    `
  )

  return (
    <div>
      <h1>Recommendation: {recommendation.toUpperCase()}</h1>
      <h2>History:</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <strong> Buy:</strong> {item.buy_suggestion_percentage}% | 
            <strong> Hold:</strong> {item.hold_suggestion_percentage}% | 
            <strong> Sell:</strong> {item.sell_suggestion_percentage}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RapidAIDisplay;
