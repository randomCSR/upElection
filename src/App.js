import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import ConstituencyList from "./Components/ConstituencyList/ConstituencyList";
import "./App.css";
import {
  ArrMap,
  GoaArrMap,
  UpArrMap,
  ManipurArrMap,
  UttrakhandArrMap,
} from "./MapJsonData/ArrMap.json";
import InfoPage from "./Components/InfoPage/InfoPage";
import ReactTooltip from "react-tooltip";
import Map from "./Components/MapCompo/Map"
import PopUp from "./Components/PopUpBox/PopUp"

function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    getConstituencyData("en");
  }, []);

  const getConstituencyData = async (lang = "en") => {
    console.log("Hi");
    const body = new URLSearchParams();
    body.append("constituency_no", []);
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
      setData(response);
      return {};
    } catch (error) {
      return Promise.reject(error);
    }
  };
  
  function createMap(cnsTerms) {
    return (
      <>
      <Map
          apiData = {data}
          key = {cnsTerms.dataId}
          id = {cnsTerms.dataId}
          cnsName = {cnsTerms.dataName}
          class = {cnsTerms.className}
          points = {cnsTerms.points}
          dd = {cnsTerms.d}
     />
     </>
    );
  }

  function punMap() {
    return (
      <>
        <div className="mapdiv">
          <svg version="1.1" viewBox="0 0 600 600" height="1000px">
            {ArrMap.map(createMap)}
          </svg>
        </div>
        <PopUp />
      </>
    );
  }

  function upMap() {
    return (
      <>
        <div className="mapdiv">
          <svg version="1.1" viewBox="80 140 950 950" height="1000px">
            {UpArrMap.map(createMap)}
          </svg>
        </div>
        <PopUp />
      </>
    );
  }

  function ukMap() {
    return (
      <>
        <div className="mapdiv">
          <svg version="1.1" viewBox="100 150 900 900" height="1000px">
            {UttrakhandArrMap.map(createMap)}
          </svg>
        </div>
        <PopUp />
      </>
    );
  }

  function goaMap() {
    return (
      <>
        <div className="mapdiv">
          <svg version="1.1" viewBox="50 60 650 650" height="1000px">
            {GoaArrMap.map(createMap)}
          </svg>
        </div>
        <PopUp />
      </>
    );
  }

  function maniMap() {
    return (
      <>
        <div className="mapdiv">
          <svg version="1.1" viewBox="100 140 800 800" height="1000px">
            {ManipurArrMap.map(createMap)}
          </svg>
        </div>
        <PopUp />
      </>
    );
  }

 


  const [state, setState] = useState("up-state");
  
  const handleUpClick = (event) => {
    setState("up-state");
  };
  const handlePunClick = (event) => {
    setState("punjab-state");
  };
  const handleUkClick = (event) => {
    setState("uk-state");
  };
  const handleGoaClick = (event) => {
    setState("goa-state");
  };
  const handleManipurClick = (event) => {
    setState("manipur-state");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/infopage/:id" element={<InfoPage />} />
        <Route
          path="/"
          element={
            <div className="App">
              <span className="stateBtnHeader">
                <button
                  id="UTTAR PARDESH"
                  className={`btn ${state === "up-state" ? "active" : ""}`}
                  onClick={handleUpClick}
                >
                  UTTAR PARDESH
                </button>
                <button
                  id="PUNJAB"
                  className={`btn ${state === "punjab-state" ? "active" : ""}`}
                  onClick={handlePunClick}
                >
                  PUNJAB
                </button>
                <button
                  id="UTTRAKHAND"
                  className={`btn ${state === "uk-state" ? "active" : ""}`}
                  onClick={handleUkClick}
                >
                  UTTRAKHAND
                </button>
                <button
                  id="GOA"
                  className={`btn ${state === "goa-state" ? "active" : ""}`}
                  onClick={handleGoaClick}
                >
                  GOA
                </button>
                <button
                  id="MANIPUR"
                  className={`btn ${state === "manipur-state" ? "active" : ""}`}
                  onClick={handleManipurClick}
                >
                  MANIPUR
                </button>
              </span>

              <div className="row2">
                {state === "punjab-state" && punMap()}
                {state === "up-state" && upMap()}
                {state === "uk-state" && ukMap()}
                {state === "goa-state" && goaMap()}
                {state === "manipur-state" && maniMap()}
                <ConstituencyList dropDownList={data} />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
