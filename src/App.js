import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import ConstituencyList from "./Components/ConstituencyList/ConstituencyList"
import './App.css';
import {ArrMap, GoaArrMap, UpArrMap, ManipurArrMap, UttrakhandArrMap} from "./MapJsonData/ArrMap.json";
import InfoPage from "./Components/InfoPage/InfoPage";
import ReactTooltip from 'react-tooltip';





function App() {

  
  const [data,setData] = useState([]);
  useEffect(() => {
    getConstituencyData("en"); 
  }, []);
  
 
  const getConstituencyData = async (lang = "en") => {
      console.log("Hi");
      const body = new URLSearchParams();
      body.append("constituency_no", [] );
      body.append("lang", lang);
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      };
    
      try {
        const res = await fetch(
          `https://stage-api.editorji.com/elections/constituencies`,
          {
            method: "POST",
            body,
            headers,
          }
        );
        const { response } = await res.json();
        console.log(response);
        setData(response);
        return {};
      } catch (error) {
        return Promise.reject(error);
      }
    };
  
  const [inMapData,setInMapData] = useState([]);  
   function Map(id, name, classname, points, dd){
    function getId(e) {
       console.log(e.target.id)
       console.log(data);
       const filteredData =  (data).filter((v) => v.id.toString() === id.toString());
       console.log(filteredData[0]);
       setInMapData(filteredData[0]);
       
      }
       const url = "/infopage/"+id;
       return (<> 
        <Link to = {url}> 
          {points}==undefined?
         
          <g data-tip data-for="singleBox" >
              <path 
                onMouseOver={getId}
                id = {id} 
                fill={data.color}
                dataName = {name}
                className = {classname}
                d={dd} 
              />  
             </g> 
                  :
            <g data-tip data-for="singleBox"> 
              <polygon 
               onMouseOver={getId}
                dataName = {name} 
                id = {id} 
                fill={data.color}
                className = {classname}
                points = {points}
              />
              </g>    
                
        </Link>         
       </>
  )   
  
       }
  
   

    function createMap(cnsTerms) {
     return(
        Map(cnsTerms.dataId, cnsTerms.dataName, cnsTerms.className, cnsTerms.points, cnsTerms.d )
       )
    }

   function punMap(){
     
    return (<>
    <div className = "mapdiv" >
      <svg version="1.1"  viewBox="0 0 600 600" height="1000px" >
        { ArrMap.map(createMap)}
      </svg>
    </div>
    <ReactTooltip id = "singleBox" effect="solid" type="light" >
      <span>
        <h2 classname="toolTipHeading" style= {{color:"white",backgroundColor:"#3ac9de",padding: "5px 12px"}}>Constituency Name</h2>
        <h4>Candidate Name</h4>
        <h6>Candidate party</h6>
        <img src="https://th.bing.com/th/id/R.059b8c7e09cc0e508baad5196981ff0e?rik=TSCMyXqnX5P3Ww&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ZAtg1X0c8Ko%2fTjKObOR0Y_I%2fAAAAAAAAAKU%2f0K2HFSkxSec%2fs1600%2fBJP_emblom.jpg&ehk=7lF17OuSzujyoWaciTf47QEkgJU7n5Hrw0qQAWSgkCs%3d&risl=&pid=ImgRaw&r=0" alt="candidate" height="30px"></img>  
      </span>
    </ReactTooltip>
      </>
  );
  }


   function upMap(){

    return(<>
      <div className = "mapdiv"  >
        <svg version="1.1"  viewBox="80 140 950 950" height="1000px"  >
          { UpArrMap.map(createMap)} 
        </svg>
      </div>
      <ReactTooltip id = "singleBox" effect="solid" type="light" >
      <span>
        <h2 classname="toolTipHeading" style= {{color:"white",backgroundColor:"#3ac9de",padding: "5px 12px"}}>{inMapData.name}</h2>
        <h4>{inMapData.mla}</h4>
        <h6>{inMapData.party}</h6>
        <img src={inMapData.logo} alt="party logo" height="30px" />      
      </span>
      </ReactTooltip>
       </>
    );

   
  }

  function ukMap(){
    
    return(<>
      <div className = "mapdiv" >
        <svg version="1.1"  viewBox="100 150 900 900" height="1000px" >
          { UttrakhandArrMap.map(createMap)} 
        </svg> 
      </div>
      <ReactTooltip id = "singleBox" effect="solid" type="light" >
      <span>
        <h2 classname="toolTipHeading" style= {{color:"white",backgroundColor:"#3ac9de",padding: "5px 12px"}} >Constituency Name</h2>
        <h4>Candidate Name</h4>
        <h6>Candidate party</h6>
        <p>Party Logo</p>          
      </span>
      </ReactTooltip>
      </>
    );
  }

  function goaMap(){
    
    return(<>
      <div className = "mapdiv"  >
        <svg version="1.1"  viewBox="50 60 650 650" height="1000px" >
          { GoaArrMap.map(createMap)} 
        </svg> 
      </div>
      <ReactTooltip id = "singleBox" effect="solid" type="light" >
       <span>
          <h2 classname="toolTipHeading" style= {{color:"white",backgroundColor:"#3ac9de",padding: "5px 12px"}} >Constituency Name</h2>
          <h4>Candidate Name</h4>
          <h6>Candidate party</h6>
          <p>Party Logo</p>          
       </span>
       </ReactTooltip>
       </>
    );
  }

  function maniMap(){
    
    return( <>
      <div className = "mapdiv">
        <svg version="1.1"  viewBox="100 140 800 800" height="1000px" >
          { ManipurArrMap.map(createMap)} 
        </svg> 
      </div>
      <ReactTooltip id = "singleBox" effect="solid" type="light" >
      <span>
        <h2 classname="toolTipHeading" style= {{color:"white",backgroundColor:"#3ac9de",padding: "5px 12px"}}>Constituency Name</h2>
        <h4>Candidate Name</h4>
        <h6>Candidate party</h6>
        <p>Party Logo</p>          
      </span>
      </ReactTooltip>
      </>
    );
  }


  const [state,setState] = useState("up-state");
  const [color,setColor] = useState("bColor")

  const handleUpClick = (event) => {
      event.target.style.backgroundColor =color;
      setColor("#0766fb")
      setState("up-state")
   }
   const handlePunClick = (event) => {
      setColor("#0766fb")
      event.target.style.backgroundColor =color;
      setState("punjab-state")
   }
   const handleUkClick = (event) => {
      setColor("#0766fb")
      event.target.style.backgroundColor =color;
      setState("uk-state")
   }
   const handleGoaClick = (event) => {
      setColor("#0766fb")
      event.target.style.backgroundColor =color;
      setState("goa-state")
   }
   const handleManipurClick = (event) => {
      setColor("#0766fb")
      event.target.style.backgroundColor =color;
      setState("manipur-state")
   }
  
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/infopage/:id" element={<InfoPage  />}  />
      <Route path="/" element={
        <div className="App">
      
        <span className="stateBtnHeader"> 
            <button id="UTTAR PARDESH" className="btn" onClick={handleUpClick} >UTTAR PARDESH</button>
            <button id="PUNJAB" className="btn" onClick={handlePunClick} >PUNJAB</button>
            <button id="UTTRAKHAND" className="btn" onClick={handleUkClick} >UTTRAKHAND</button>
            <button id="GOA" className="btn" onClick={handleGoaClick} >GOA</button>
            <button id="MANIPUR" className="btn" onClick={handleManipurClick} >MANIPUR</button>
        </span>
        
   
        <div className="row2">                               
        {state === "punjab-state" && punMap() }
        {state === "up-state" && upMap() }
        {state === "uk-state" && ukMap() }
        {state === "goa-state" && goaMap() }
        {state === "manipur-state" && maniMap() }
        <ConstituencyList />
        </div>
       </div>
      }  />
     </Routes>
    </BrowserRouter>
    
  );  
}

export default App;
