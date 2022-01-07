import React from 'react'
import { Link, useParams } from 'react-router-dom';
import './InfoStyle.css'
import map from './map.png'
import photo from './photo.jpg'
import graph from './graph.png'



const customStyle = {
  color: "#73e7fc"
}
const InfoPage = () => {

    const {id}  = useParams();

   
        return (<div>
            <Link to="/">
              <h5 className="backToMap"> &lt; back to map </h5>
              </Link>
       
            <div className="infoContainer" >
              
                 <div className="grid-container">
        <div className="grid_item item1"  ><h1 style={{color: "#73e7fc"}}>{ id }</h1></div>
        <div className="grid_item item2" ><p>Population<h1>447,330</h1></p></div>
        <div className="grid_item item3" ><p>Sex Ratio</p><h1>1,000</h1></div>  
        <div className="grid_item item4" ><p>Literacy Rate</p><h1>72.16%</h1></div>
        <div className="grid_item item5" >
        <div className = "map"><img  src={map} height="300" width="300" alt="Map here"/></div>
        </div>
        <div className="grid_item item6" >
        <div>
          <div className = "photo"><img className="inc" src={photo} height="180" width="180" alt="winner here" /></div>
            <div className ="detail">
                <p>INCUMBENT</p><h2>GARIMA SINGH (BJP)</h2><p>34,872 VOTES</p><p >AGE : <em style={customStyle}> 51</em></p><p>EDUCATION : <em style={customStyle}> BSc.</em></p><p>ASSET :  <em style={customStyle}> &#x20B9; 223,445,223</em> </p><p>CRIMINAL CASES : <em style={customStyle}> 0</em> </p>
            </div>
          </div>
        </div>
        <div className="grid_item item7" ><h1>Quick Facts</h1><ul><li>first quick fact</li><li>second quick fact</li><li>Third quick fact</li><li>Fourth quick fact</li><li>Fifth quick fact</li><li>sixth quick fact</li></ul></div>
        <div className="grid_item item8" >
        <div className = "graph"><img  src={graph} height="275" width="275" alt="graph here" /></div>
        </div>
        <div className="grid_item item9" ><h2>VOTER TURN OUT : 2,18,376</h2></div>
        
    
      </div>
            </div>
            </div>
        )
    }


export default InfoPage