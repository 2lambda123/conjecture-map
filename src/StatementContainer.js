import React from "react"
 
const StatementContainer = ({id, 
                             DOMid,
                             text, 
                             updateText, 
                             removeStatement,
                             handleStatementClick
                            }) => {

    return (
        <div 
            className="statement-container" 
            id={DOMid}   
            // ref={ref}        
            onClick={handleStatementClick}
        >
            <button 
                className="remove-btn"
                onClickCapture={()=>removeStatement(id)}
            >
                -
            </button>
            <textarea 
                className="statement-text"
                value={text}
                onChange={event => updateText(id, event)}
            />
        </div>
    )

}

export default StatementContainer