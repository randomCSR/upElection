import React, { useState } from "react";
import { Link } from 'react-router-dom';

 function Map(props){
  const id = props.id;
  const url = "/infopage/"+id;
  const [data,setData] = useState([])
 
function getId(e) {
  const dt =  (props.apiData).filter((v) => v.id.toString() ===id.toString());
//   console.log(dt[0].mla);
  setData(dt[0]);
//    console.log(e.target.id) 
  } 
  // console.log(data);
    
     return (<> 
      <Link to = {url}>
        {props.points}==undefined?
       
        <g data-tip data-for="singleBox" >
            <path 
              onMouseOver={getId}
              id = {props.id} 
              dataname = {props.cnsName}
              className = {props.class}
              // fill= {}
              d={props.dd} 
            />  
        </g>
       :
        <g data-tip data-for="singleBox"> 
            <polygon 
              onMouseOver={getId}
              dataname = {props.name} 
              id = {props.id} 
              className = {props.class}
              // fill= {}
              points = {props.points}
            />
        </g>    
      </Link>         
     </>
  )   
}
export default Map