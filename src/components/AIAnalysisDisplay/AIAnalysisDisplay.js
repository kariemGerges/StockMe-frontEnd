import {React} from "react";

function AIAnalysisDisplay({analysis, loading, error }) {

    if (!analysis) return <p>No data available</p>;

    return (
      <div>
        {(analysis.response.candidates).map((item, index) => (
          <div key={index}>
            {item.content.parts.map((part, partIndex) => (
              <div key={partIndex}>
                <p dangerouslySetInnerHTML={{ __html: part.text }} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

export default AIAnalysisDisplay;

  // Assuming 'analysis' is an object with a 'response' property !!!
    // return (
    //   <div>
    //     <h4>AI Analysis:</h4>

    //     <p>{JSON.stringify(analysis.response.candidates)}</p>
    //     <ul>
    //       {}
    //     </ul>

    //     {/* {analysis.candidates.map((candidate, index) => (
    //     <div key={index}>
    //       {candidate.content.parts.map((part, partIndex) => (
    //         <p key={partIndex} dangerouslySetInnerHTML={{ __html: (part.text) }} />
    //       ))}
    //     </div>
    //   ))} */}

    //   </div>
    // );