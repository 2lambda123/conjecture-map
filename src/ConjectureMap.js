import React from "react"
import './App.css'
import HighLevelConjecture from './HighLevelConjecture'
import Column from './Column'

function ConjectureMap() {
    return (
        <div>
            <HighLevelConjecture />
            <div id="columns">
                <Column 
                    title="Embodiment"                    
                />
                <Column 
                    title="Mediating Processes"
                />
                <Column 
                    title="Outcomes"
                />
            </div>
            
        </div>
    )
}

export default ConjectureMap