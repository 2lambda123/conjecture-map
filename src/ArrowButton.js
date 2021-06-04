import React from "react"

function ArrowButton({handleArrowButtonClick, 
                      newArrowStart,
                      statementID}) {
    const style = {
        visibility: (newArrowStart === null || newArrowStart===statementID) ? "visible" : "hidden",
        backgroundColor: newArrowStart===statementID ? "bisque" : "rgb(239, 239, 239)",
        border: "none"
    }
    return(
        <button 
                className="arrow-button"                
                onClick={handleArrowButtonClick}  
                style={style}              
            >
                →
        </button>
    )
}

export default ArrowButton