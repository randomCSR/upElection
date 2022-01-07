import React from 'react';
import "./StatesStyle.css"


export default function StatesButton(props) {
    
    return (
        <section className="selectState">
            <div>
                <button className="btn" onClick = {props.addTrip}>{props.name}</button>
            </div>
        </section>
    )
}
