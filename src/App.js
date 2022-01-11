import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import ConstituencyList from "./Components/ConstituencyList/ConstituencyList"
import Map from "./Components/MapCompo/Map"
// import popUp from "./Components/popUpBox/popUp"
import './App.css';
import {ArrMap, GoaArrMap, UpArrMap, ManipurArrMap, UttrakhandArrMap} from "./MapJsonData/ArrMap.json";
import StatesButton from "./Components/StateButton/StatesButton";
import InfoPage from "./Components/InfoPage/InfoPage";
import ReactTooltip from 'react-tooltip';
// import Pic from "./Components/InfoPage/photo.jpg";


function createMap(cnsTerms) {
 
  return(
  <Map 
       key = {cnsTerms.Id}
      //  cName = {cnsTerms.candName}
      //  party = {cnsTerms.party}
       id = {cnsTerms.dataId}
       class = {cnsTerms.className}
       name = {cnsTerms.dataName}
       points = {cnsTerms.points}
       hlink = {cnsTerms.link}
       dd={cnsTerms.d}
       />
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
        <h3 style={{color:"white",backgroundColor:"#3ac9de",padding:"9px"}}>Constituency Name</h3>
      <h6>Candidate Name</h6>
      <h6>Candidate party</h6>
      <img src="https://th.bing.com/th/id/R.059b8c7e09cc0e508baad5196981ff0e?rik=TSCMyXqnX5P3Ww&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ZAtg1X0c8Ko%2fTjKObOR0Y_I%2fAAAAAAAAAKU%2f0K2HFSkxSec%2fs1600%2fBJP_emblom.jpg&ehk=7lF17OuSzujyoWaciTf47QEkgJU7n5Hrw0qQAWSgkCs%3d&risl=&pid=ImgRaw&r=0" alt="candidate" height="30px"></img>
      {/* <h6>Party Logo</h6>           */}
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
        <h2 style={{color:"white",backgroundColor:"#3ac9de",padding:"8px"}}>Constituency Name</h2>
      <p>Candidate Name</p>
      <p>Candidate party</p>
      <p>Party Logo</p>          
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
        <h2 style={{color:"white",backgroundColor:"#3ac9de",padding:"8px"}}>Constituency Name</h2>
      <p>Candidate Name</p>
      <p>Candidate party</p>
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
         <h2 style={{color:"white",backgroundColor:"#3ac9de",padding:"8px"}}>Constituency Name</h2>
       <p>Candidate Name</p>
       <p>Candidate party</p>
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
        <h2 style={{color:"white",backgroundColor:"#3ac9de",padding:"8px"}}>Constituency Name</h2>
      <p>Candidate Name</p>
      <p>Candidate party</p>
      <p>Party Logo</p>          
      </span>
      </ReactTooltip>
      </>
    );
  }

function App() {
  const [state,setState] =useState("up-state");

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/infopage/:id" element={<InfoPage />}  />
      <Route path="/" element={
        <div className="App">
   
        <span className="stateBtnHeader"> 
         <StatesButton addTrip={() => setState("up-state")} name="UTTAR PRADESH"  />
         <StatesButton addTrip={() => setState("punjab-state")} name="PUNJAB" />
         <StatesButton addTrip={() => setState("uk-state")} name="UTTRAKHAND" />
         <StatesButton addTrip={() => setState("goa-state")} name="GOA" />
         <StatesButton addTrip={() => setState("manipur-state")} name="MANIPUR" />
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
