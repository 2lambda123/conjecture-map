import React, {useState, useRef} from "react"
import Xarrow from "react-xarrows";
import './App.css'
import HighLevelConjecture from './HighLevelConjecture'
import Column from './Column'

function ConjectureMap() {
    
    // const [embodimentStatements, updateEmbodimentStatements] = useState({1: ""})    
    // const [medProcessesStatements, updateMedProcessesStatements] = useState({2: ""})    
    // const [outcomesStatements, updateOutcomesStatements] = useState({3: ""})    
    const [embodimentStatements, updateEmbodimentStatements] = useState({1: {text: "", DOMid: 'statement-1'}})    
    const [medProcessesStatements, updateMedProcessesStatements] = useState({2: {text: "", DOMid: 'statement-2'}})    
    const [outcomesStatements, updateOutcomesStatements] = useState({3: {text: "", DOMid: 'statement-3'}})    
    const [nextItemId, updateNextItemId] = useState(4)
    const [arrowsList, updateArrowsList] = useState([])
        
    
    const addStatement = (statements, updateStatements) => {
        return () => {            
            updateNextItemId(nextItemId =>  {return nextItemId + 1})      
            const newStatements = {...statements}            
            newStatements[nextItemId] = {text: "", DOMid: `statement-${nextItemId}`}
            updateStatements(newStatements)   
        }                                            
    }    

    const removeStatement = (statements, updateStatements) => {            
        return (itemToDelete) => {                      
            const { [itemToDelete]: deleted, ...objectWithoutDeletedItem } = statements;  
            updateStatements(objectWithoutDeletedItem)
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
       
    const printStates = () => {
        console.log(embodimentStatements)
    }

    const handleStatementClick = () => {
        console.log("click")
    }

    
    // const [newArrowEnds, updateNewArrowEnds] = useState([1, 2])
    const createArrow = () => {
        // I have a problem in this silly method of figuring out which list of 
        // statements the number I have input is in. That won't be an issue
        // when I'm clicking them. So, let's just test it with that
        // hard coded and then I'll figure out the clicky way
        const newArrow = ['statement-1',
                           'statement-2']   
        const newArrowsList = arrowsList.concat([newArrow])
        updateArrowsList(newArrowsList)              
    }

    return (
        <div>
            <HighLevelConjecture />
            <button onClick={printStates}>log states</button>            
            <button onClick={createArrow}>create arrow</button>
            <div id="columns">
            
                <Column                          
                    title="Embodiment"    
                    statements={embodimentStatements}
                    updateText={updateText(embodimentStatements, updateEmbodimentStatements)}               
                    addStatement={addStatement(embodimentStatements, updateEmbodimentStatements)}                    
                    removeStatement={removeStatement(embodimentStatements, updateEmbodimentStatements)}  
                    handleStatementClick={handleStatementClick}
                />
            
            
                <Column                     
                    title="Mediating Processes"
                    statements={medProcessesStatements}
                    updateText={updateText(medProcessesStatements, updateMedProcessesStatements)}               
                    addStatement={addStatement(medProcessesStatements, updateMedProcessesStatements)}                    
                    removeStatement={removeStatement(medProcessesStatements, updateMedProcessesStatements)}
                />
            
                <Column 
                    title="Outcomes"
                    statements={outcomesStatements}
                    updateText={updateText(outcomesStatements, updateOutcomesStatements)}               
                    addStatement={addStatement(outcomesStatements, updateOutcomesStatements)}                    
                    removeStatement={removeStatement(outcomesStatements, updateOutcomesStatements)}
                />
            </div>
            
            {
                arrowsList.map(el => {                    
                    return (
                        <Xarrow
                            key={el[0]+el[1]}
                            start={el[0]} 
                            end={el[1]} 
                            strokeWidth={2}
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