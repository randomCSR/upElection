// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// //  import ReactTooltip from 'react-tooltip';


//  function Map(props){
//   const id = props.id;
//   // const key = props.id;
//   // const url = "http://www.google.com/search?q="+name+" "+key;
//      const url = "/infopage/"+id;
//      const [data,setData] = useState([])

// function getId(e) {
//   const uId = e.target.id;
//   const dt =  (props.apiData).filter((v) => v.id.toString() ===id.toString());
//   console.log(dt[0].mla);
//   setData(dt[0]);
//   //  console.log(e.target.id) 
//   } 
//     // console.log(props.apiData)
   
//      return (<> 
//       <Link to = {url}>
//         {props.points}==undefined?
       
//         <g data-tip data-for="singleBox" >
//             <path 
//             //  onMouseOver={(event)=>console.log(event.target.id)}
//               onMouseOver={getId}
//               id = {props.id} 
//               dataName = {props.name}
//               className = {props.class}
//             //   fill= {fillConsti}
//               d={props.dd} 
//             />  
//            </g> 
             
               
//                 :
                
//               <g data-tip data-for="singleBox"> 
//             <polygon 
//              onMouseOver={getId}
//               dataName = {props.name} 
//               id = {props.id} 
//               className = {props.class}
//             //   fill= {fillConsti}
//               points = {props.points}
              
//             />
            
//             </g> 
//             {/* <ReactTooltip id = "singleBox" effect="solid" type="light" >
//             <span>
            
//             <h2 style={{color:"white",backgroundColor:"#3ac9de",padding:"8px"}}>{props.class}</h2>
            
//           <p>{data.mla}</p>
//           <p>Candidate party</p>
//           <p>Party Logo</p>          
//           </span>
//       </ReactTooltip>          */}
              
//       </Link>         
//      </>
// )   



//  }

 

// export default Map

