import React, {useState} from "react"
import StatementContainer from './StatementContainer'

function Column({title, 
                statements,
                updateText,                
                removeStatement,
                addStatement}) {
    // const [statements, updateStatements] = useState({0: ""})    
    // const [nextItemId, updateNextItemId] = useState(1)

    // const addStatement = () => {                        
    //     updateNextItemId(nextItemId =>  {return nextItemId + 1})      
    //     const newStatements = {...statements}            
    //     newStatements[nextItemId] = ""
    //     updateStatements(newStatements)               
    // }    

    // const removeStatement = itemToDelete => {          
    //     const { [itemToDelete]: deleted, ...objectWithoutDeletedItem } = statements;  
    //     updateStatements(objectWithoutDeletedItem)
    // }

    // const updateText = (itemID, event) => {        
    //     const {value} = event.target                
    //     const newStatements = {...statements}
    //     newStatements[itemID] = value
    //     updateStatements(newStatements)               
    // }
    
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
                                <div key={e[0]}>                                    
                                    <StatementContainer
                                        value={e[1]}
                                        id={e[0]}
                                        updateText={updateText}
                                        removeStatement={removeStatement}
                                    />                                    
                                </div>                            
                                                            
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