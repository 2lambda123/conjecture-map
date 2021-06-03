import {useState} from "react"

function StatementContainer({id, text, updateText, removeStatement}) {    
        

    return (
        <div 
            className="statement-container"            
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