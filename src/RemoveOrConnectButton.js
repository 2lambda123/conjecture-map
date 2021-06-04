import React from "react"


function RemoveOrConnectButton({removeStatement, 
                                newArrowStart, 
                                handleArrowButtonClick,
                                id}) {

    const button = newArrowStart ?  
    <button
        className="connect-btn"
        onClick={handleArrowButtonClick}
    >

    </button> :               
    <button 
        className="remove-btn"
        onClick={()=>removeStatement(id)}
    >
        -
    </button>
    return (                 
        button                        
    )
}

export default RemoveOrConnectButton