import React from "react"
import StatementContainer from './StatementContainer'

function Column({title, 
                statements,
                updateText,                
                removeStatement,
                addStatement,
                handleArrowButtonClick}) {

    return (
        <div className="column">
            <div>
                {title}
            </div>
            <div className="column-items">         
               
                <div>
                    {
                        Object.entries(statements).map((e) => {
                            return (                                                            
                                    <StatementContainer
                                        key={e[0]}
                                        id={e[0]}
                                        DOMid={e[1]["DOMid"]}                                        
                                        text={e[1]["text"]}                                                                                
                                        updateText={updateText}
                                        removeStatement={removeStatement}
                                        handleArrowButtonClick={handleArrowButtonClick}
                                    />                                                                                                                                                       
                            )
                        })
                    }
                </div>     
                <div >
                    <button  
                        className="add-btn"
                        onClick={addStatement}
                    >
                        +
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Column