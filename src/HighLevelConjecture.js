import {useState} from "react"
import './App.css'


function HighLevelConjecture() {
    const [conjecture, updateConjecture] = useState("")

    const handleChange = event => {
        updateConjecture(event.target.value)
    }
    return (
        <div id="high-level-conjecture">
            High Level Conjecture: 
            <div>
                <textarea 
                    id="high-level-conjecture-input" 
                    value={conjecture}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default HighLevelConjecture