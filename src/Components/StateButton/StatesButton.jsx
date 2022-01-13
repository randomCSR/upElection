import React, { useState } from 'react';
import "./StatesStyle.css"


 function StatesButton(props) {
    const [color, changeColor] = useState(props.name);
    const handleClick = (event) => {
      event.target.style.backgroundColor ="#0766fb";
        {props.addTrip()}
            

     }
    return (
        <section className="selectState">
            <div>
                <button id={props.name} className="btn"   onClick={handleClick} >{props.name}</button>
            </div>
        </section>
    )   
}

export default StatesButton
