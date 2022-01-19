import React from 'react'
import ReactTooltip from 'react-tooltip';

function PopUp() {
    return (
        <div>
            <ReactTooltip id="singleBox" effect="solid" type="light">
                <span>
                    <h2
                    classname="toolTipHeading"
                    style={{
                        color: "white",
                        backgroundColor: "#3ac9de",
                        padding: "5px 12px",
                    }}
                    >
                    Constituency Name
                    </h2>
                    <h4>MLA</h4>
                    <h6>Party</h6>
                    <img src="Party Logo" alt="party logo" height="30px" />
                </span>
            </ReactTooltip>
        </div>
    )
}

export default PopUp
