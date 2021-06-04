import React, {useState} from "react"
import XarrowInteractive from "./XarrowInteractive";
import './App.css'
import HighLevelConjecture from './HighLevelConjecture'
import Column from './Column'

function ConjectureMap() {
    
    const [embodimentStatements, updateEmbodimentStatements] = useState({1: {text: "", statementID: 'statement-1'}})    
    const [medProcessesStatements, updateMedProcessesStatements] = useState({2: {text: "", statementID: 'statement-2'}})    
    const [outcomesStatements, updateOutcomesStatements] = useState({3: {text: "", statementID: 'statement-3'}})    
    const [nextItemId, updateNextItemId] = useState(4)
    const [arrowsList, updateArrowsList] = useState([])
    const [newArrowStart, updateNewArrowStart] = useState(null)
    

    const addStatement = (statements, updateStatements) => {
        return () => {            
            updateNextItemId(nextItemId =>  {return nextItemId + 1})      
            const newStatements = {...statements}            
            newStatements[nextItemId] = {text: "", statementID: `statement-${nextItemId}`}
            updateStatements(newStatements)   
        }                                            
    }    

    const removeStatement = (statements, updateStatements) => {            
        return (itemToDelete) => {         
            const statementID = statements[itemToDelete]['statementID']                         
            const { [itemToDelete]: deleted, ...objectWithoutDeletedItem } = statements;  
            updateStatements(objectWithoutDeletedItem)
            const newArrowsList = arrowsList.filter(e => !e.includes(statementID))
            updateArrowsList(newArrowsList)
            
        }
    }

    const updateText = (statements, updateStatements) => {
        return (itemID, event) => {                        
            const {value} = event.target            
            const newStatements = {...statements}
            newStatements[itemID]["text"] = value
            updateStatements(newStatements)              
            }

    }            

    const handleArrowButtonClick = (event) => {
        const target = event.target
        const statementId = target.parentElement.id        
        console.log(statementId)
        if (newArrowStart === null) {
            updateNewArrowStart(statementId)
        } else if (newArrowStart !== statementId) {            
            createArrow(newArrowStart, statementId)                        
            updateNewArrowStart(null)
        } else {
            updateNewArrowStart(null)
        }                   
    }

        
    const createArrow = (id1, id2) => {           
        const arrowExists = arrowsList.some(e => e[0]===id1 && e[1]===id2)
        if (!arrowExists)  {
            const newArrowsList = arrowsList.concat([[id1, id2]])
            updateArrowsList(newArrowsList)              
        }                                     
    }

    const removeArrow = (id1, id2) => {
        const newArrowsList = arrowsList.filter(e => e[0] !== id1 || e[1] !== id2)
        updateArrowsList(newArrowsList)                      
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
                    removeStatement={removeStatement(embodimentStatements, updateEmbodimentStatements)}  
                    handleArrowButtonClick={handleArrowButtonClick}
                    newArrowStart={newArrowStart}
                />
            
            
                <Column                     
                    title="Mediating Processes"
                    statements={medProcessesStatements}
                    updateText={updateText(medProcessesStatements, updateMedProcessesStatements)}               
                    addStatement={addStatement(medProcessesStatements, updateMedProcessesStatements)}                    
                    removeStatement={removeStatement(medProcessesStatements, updateMedProcessesStatements)}
                    handleArrowButtonClick={handleArrowButtonClick}
                    newArrowStart={newArrowStart}
                />
            
                <Column 
                    title="Outcomes"
                    statements={outcomesStatements}
                    updateText={updateText(outcomesStatements, updateOutcomesStatements)}               
                    addStatement={addStatement(outcomesStatements, updateOutcomesStatements)}                    
                    removeStatement={removeStatement(outcomesStatements, updateOutcomesStatements)}
                    handleArrowButtonClick={handleArrowButtonClick}
                    newArrowStart={newArrowStart}
                />
            </div>
            
            {
                arrowsList.map(el => {                    
                    return (
                        <XarrowInteractive
                            key={el[0]+el[1]}
                            start={el[0]} 
                            end={el[1]} 
                            removeArrow={removeArrow}                            
                        />
                    )
                })
            /* <Xarrow
                start={embodimentStatements[1]["ref"]} 
                end={medProcessesStatements[2]["ref"]} 
                strokeWidth={2}
            /> */}
            
        </div>
    )
}

export default ConjectureMap