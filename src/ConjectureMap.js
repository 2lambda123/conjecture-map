import React, {useState} from "react"
import Xarrow from "react-xarrows";
import './App.css'
import HighLevelConjecture from './HighLevelConjecture'
import Column from './Column'

function ConjectureMap() {
    
    const [embodimentStatements, updateEmbodimentStatements] = useState({1: ""})    
    const [medProcessesStatements, updateMedProcessesStatements] = useState({2: ""})    
    const [outcomesStatements, updateOutcomesStatements] = useState({3: ""})    
    const [nextItemId, updateNextItemId] = useState(4)

    const addStatement = (statements, updateStatements) => {
        return () => {
            updateNextItemId(nextItemId =>  {return nextItemId + 1})      
            const newStatements = {...statements}            
            newStatements[nextItemId] = ""
            updateStatements(newStatements)   
        }                                            
    }    

    const removeStatement = (statements, updateStatements) => {
        return (itemToDelete => {          
            const { [itemToDelete]: deleted, ...objectWithoutDeletedItem } = statements;  
            updateStatements(objectWithoutDeletedItem)
        })
    }

    const updateText = (statements, updateStatements) => {
        return (itemID, event) => {        
            const {value} = event.target                
            const newStatements = {...statements}
            newStatements[itemID] = value
            updateStatements(newStatements)               
            }

    }     
       
    

    return (
        <div>
            <HighLevelConjecture />
            <div id="columns">
            
                <Column                          
                    title="Embodiment"    
                    statements={embodimentStatements}
                    updateText={updateText(embodimentStatements, updateEmbodimentStatements)}               
                    addStatement={addStatement(embodimentStatements, updateEmbodimentStatements)}                    
                    removeStatement={removeStatement}  
                />
            
            
                <Column                     
                    title="Mediating Processes"
                    statements={medProcessesStatements}
                    updateText={updateText(medProcessesStatements, updateMedProcessesStatements)}               
                    addStatement={addStatement(medProcessesStatements, updateMedProcessesStatements)}                    
                    removeStatement={removeStatement}
                />
            
                <Column 
                    title="Outcomes"
                    statements={outcomesStatements}
                    updateText={updateText(outcomesStatements, updateOutcomesStatements)}               
                    addStatement={addStatement(outcomesStatements, updateOutcomesStatements)}                    
                    removeStatement={removeStatement}
                />
            </div>
            {/* <Xarrow
                start="embodiment-col" //can be react ref
                end="mediating-processes-col" //or an id
            /> */}
            
        </div>
    )
}

export default ConjectureMap