import React from "react"
import RemoveOrConnectButton from "./RemoveOrConnectButton"
import ArrowButton from "./ArrowButton"
const StatementContainer = ({id, 
                             statementID,
                             text, 
                             updateText, 
                             handleArrowButtonClick,
                             removeStatement,                             
                             newArrowStart
                            }) => {

    
    return (
        <div 
            className="statement-container" 
            id={statementID}                                 
        >
                
            <RemoveOrConnectButton
                removeStatement={removeStatement}
                newArrowStart={newArrowStart}
                handleArrowButtonClick={handleArrowButtonClick}
                id={id}
            />
            <textarea 
                className="statement-text"
                value={text}
                onChange={event => updateText(id, event)}
            />            
            <ArrowButton
                handleArrowButtonClick={handleArrowButtonClick}
                newArrowStart={newArrowStart}
                statementID={statementID}
            />
        </div>
    )

}

export default StatementContainer