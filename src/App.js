import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import ConstituencyList from "./Components/ConstituencyList/ConstituencyList"
import Map from "./Components/MapCompo/Map"
import './App.css';
import {ArrMap, GoaArrMap, UpArrMap, ManipurArrMap, UttrakhandArrMap} from "./MapJsonData/ArrMap.json";
import StatesButton from "./Components/StateButton/StatesButton";
import InfoPage from "./Components/InfoPage/InfoPage";


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
    return (
    <div className = "mapdiv" >
    <svg version="1.1"  viewBox="0 0 600 600" height="1000px" >
      { ArrMap.map(createMap)}
    </svg>
  </div>
  );
  }

   function upMap(){
    return(
      <div className = "mapdiv"  >
        <svg version="1.1"  viewBox="80 140 950 950" height="1000px"  >
          { UpArrMap.map(createMap)} 
        </svg>
      </div>
    );
  }

  function ukMap(){
    return(
      <div className = "mapdiv">
        <svg version="1.1"  viewBox="100 150 900 900" height="1000px" >
          { UttrakhandArrMap.map(createMap)} 
        </svg> 
      </div>
    );
  }

  function goaMap(){
    return(
      <div className = "mapdiv">
        <svg version="1.1"  viewBox="50 60 650 650" height="1000px" >
          { GoaArrMap.map(createMap)} 
        </svg> 
      </div>
    );
  }

  function maniMap(){
    return(
      <div className = "mapdiv">
        <svg version="1.1"  viewBox="100 140 800 800" height="1000px" >
          { ManipurArrMap.map(createMap)} 
        </svg> 
      </div>
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
