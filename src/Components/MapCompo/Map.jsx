import React from "react"
import { Link } from 'react-router-dom';
//  import ReactTooltip from 'react-tooltip';


 function Map(props){
  const id = props.id;
  // const key = props.id;
  // const url = "http://www.google.com/search?q="+name+" "+key;
     const url = "/infopage/"+id;
//   const fillConsti = {items}==props.class?fill={red}: " ";
  

     return (<> 
      <Link to = {url}>
        {props.points}==undefined?
       
        <g data-tip data-for="singleBox">
            <path 
              // data-id = {props.dataId} 
              // data-name = {props.name}
              className = {props.class}
            //   fill= {fillConsti}
              d={props.dd} 
            />  
           </g> 
             
               
                :
                
              <g data-tip data-for="singleBox"> 
            <polygon 
              // data-name = {props.name} 
              // data-id = {props.dataId} 
              className = {props.class}
            //   fill= {fillConsti}
              points = {props.points}
              
            />
            
            </g> 
            {/* <ReactTooltip id = "singleBox" effect="solid" type="light" >
            <span>
            
            <h2 style={{color:"white",backgroundColor:"#3ac9de",padding:"8px"}}>{props.class}</h2>
            
          <p>{props.name}</p>
          <p>Candidate party</p>
          <p>Party Logo</p>          
          </span>
      </ReactTooltip> */}         
              
      </Link>         
     </>
)   



 }

 

export default Map
