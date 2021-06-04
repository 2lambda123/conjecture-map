import React from "react"
 
const StatementContainer = ({id, 
                             DOMid,
                             text, 
                             updateText, 
                             removeStatement,
                             handleArrowButtonClick
                            }) => {

    return (
        <div 
            className="statement-container" 
            id={DOMid}                                 
        >
            <button 
                className="remove-btn"
                onClick={()=>removeStatement(id)}
            >
                -
            </button>
            <textarea 
                className="statement-text"
                value={text}
                onChange={event => updateText(id, event)}
            />
            <button 
                className="arrow-button"                
                onClick={handleArrowButtonClick}
            >
                →
            </button>
        </div>
    )

}

export default StatementContainer