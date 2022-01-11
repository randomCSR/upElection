import React from 'react'
import ReactTooltip from 'react-tooltip';

function popUp() {
    return (
        <div>
            <ReactTooltip id = "singleBox" effect="solid" type="light" >
             <span>
                <h2 style={{color:"white",backgroundColor:"#3ac9de",padding:"8px"}}>Constituency Name</h2>
                <p>Constituency Name</p>
                <p>Candidate party</p>
                <p>Party Logo</p>          
             </span>
            </ReactTooltip>
        </div>
    )
}

export default popUp
