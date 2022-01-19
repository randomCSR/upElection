import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Map from "./Components/MapCompo/Map";
import PopUp from "./Components/popUpBox/popUp";
import PieChartCompo from "./Components/PieChart/PieChartCompo"

function App() {
  const [state, setState] = useState("30");
  const [data, setData] = useState([]);
  const [popUpData, setPopUpData] = useState();
  const [pieData, setPieData] = useState();
  const [selectedYear, setSelectedYear] = useState("2017")
  useEffect(() => {
    getConstituencyData("en");
  }, []);
 
  const getConstituencyData = async (lang = "en") => {
    const body = new URLSearchParams();
    body.append("state_id", state);
    body.append("year", selectedYear);
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
      const { response, piechart } = await res.json();
      setData(response);
      setPieData(piechart);
      return {};
    } catch (error) {
      return Promise.reject(error);
    }
  };
 
  const onHoverCalled = (data) => {
    setPopUpData(data);
    // console.log("Data", data);
  };
  function createMap(cnsTerms) {
    return (
      <>
        <Map
          apiData={data.filter(
            (v) => v.id.toString() === cnsTerms.dataId.toString()
          )}
          onHoverCalled={onHoverCalled}
          key={cnsTerms.dataId}
          id={cnsTerms.dataId}
          cnsName={cnsTerms.dataName}
          class={cnsTerms.className}
          points={cnsTerms.points}
          dd={cnsTerms.d}
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
        <PopUp data={popUpData} />
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
        <PopUp data={popUpData} />
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
        <PopUp data={popUpData} />
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
        <PopUp data={popUpData} />
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
        <PopUp data={popUpData} />
      </>
    );
  }
  const onYearChange = (data) => {
    setSelectedYear(data);
    console.log("Data", data);
  };

  const handleUpClick = (event) => {
    setState("30");
  };
  const handlePunClick = (event) => {
    setState("24");
  };
  const handleUkClick = (event) => {
    setState("31");
  };
  const handleGoaClick = (event) => {
    setState("1");
  };
  const handleManipurClick = (event) => {
    setState("2");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/infopage/:id" element={<InfoPage state = {state} selectedYear = {selectedYear} />} />
        <Route
          path="/"
          element={
            <div className="App">
              <span className="stateBtnHeader">
                <button
                  key="UTTAR PARDESH"
                  id="UTTAR PARDESH"
                  className={`btn ${state === "30" ? "active" : ""}`}
                  onClick={handleUpClick}
                >
                  UTTAR PARDESH
                </button>
                <button
                  key="PUNJAB"
                  id="PUNJAB"
                  className={`btn ${state === "24" ? "active" : ""}`}
                  onClick={handlePunClick}
                >
                  PUNJAB
                </button>
                <button
                  id="UTTRAKHAND"
                  key="UTTRAKHAND"
                  className={`btn ${state === "31" ? "active" : ""}`}
                  onClick={handleUkClick}
                >
                  UTTRAKHAND
                </button>
                <button
                  id="GOA"
                  key="GOA"
                  className={`btn ${state === "1" ? "active" : ""}`}
                  onClick={handleGoaClick}
                >
                  GOA
                </button>
                <button
                  id="MANIPUR"
                  key="MANIPUR"
                  className={`btn ${state === "2" ? "active" : ""}`}
                  onClick={handleManipurClick}
                >
                  MANIPUR
                </button>
              </span>

              <div className="row2">
                {state === "24" && punMap()}
                {state === "30" && upMap()}
                {state === "31" && ukMap()}
                {state === "1" && goaMap()}
                {state === "2" && maniMap()}
                <div className="firstWidget">
                  <ConstituencyList dropDownList={data}  onYearChange = {onYearChange} />
                  <div className="secondWidget">
                    <PieChartCompo pieChartData={pieData} />
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
