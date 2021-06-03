import React, {useState} from "react"

function Column({title}) {
    const [statements, updateStatements] = useState([0])    
    const [nextItemId, updateNextItemId] = useState(0)

    const addStatement = () => {                        
        updateStatements(statements.concat(nextItemId + 1))  
        updateNextItemId(nextItemId + 1)                              
    }    

    const removeStatement = x => {        
        updateStatements(statements.filter(s => s !== x))
    }
    
    return (
        <div className="column">
            <div>
                {title}
            </div>
            <div className="column-items">         
               
                <div>
                    {
                        statements.map((s) => {
                            return (                            
                                <div key={s}>
                                    <textarea /> 
                                    <button onClick={()=>removeStatement(s)}>-</button>
                                </div>                            
                                                            
                            )
                        })
                    }
                </div>     
                <div >
                    <button  onClick={addStatement}>
                        +
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Column