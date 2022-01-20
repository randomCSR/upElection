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
import Map from "./Components/MapCompo/Map";
import PopUp from "./Components/popUpBox/popUp";
import PieChartCompo from "./Components/PieChart/PieChartCompo";

function App() {
  const [state, setState] = useState("30");
  const [data, setData] = useState([]);
  const [popUpData, setPopUpData] = useState();
  const [pieData, setPieData] = useState();
  const [selectedYear, setSelectedYear] = useState("2017");
  useEffect(() => {
    getConstituencyData("en");
  }, [state, selectedYear]);

  const getConstituencyData = async (lang = "en") => {
    console.log("year: ", selectedYear, "id: ", state);
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
      console.log("MapData: ", response);
      setData(response);
      setPieData(piechart);
      return {};
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const onHoverCalled = (data) => {
    console.log(data);
    setPopUpData(data);
  };
  function createMap(cnsTerms) {
    return (
      <Map
        apiData={data.filter(
          (v) => v.constituency_no.toString() === cnsTerms.dataId.toString()
        )}
        onHoverCalled={onHoverCalled}
        key={cnsTerms.dataId}
        id={cnsTerms.dataId}
        cnsName={cnsTerms.dataName}
        class={cnsTerms.className}
        points={cnsTerms.points}
        dd={cnsTerms.d}
      />
    );
  }

  function createMapSvg(viewbox, arrayData, id) {
    return (
      <>
        <div className="mapdiv" key={`Map${id}`}>
          <svg version="1.1" viewBox={viewbox} height="1000px" key={`SVG${id}`}>
            {arrayData.map(createMap)}
          </svg>
        </div>
        <PopUp data={popUpData} key={`ToolTip${id}`} />
      </>
    );
  }
  const onYearChange = (data) => {
    setSelectedYear(data);
    console.log("YearData", data);
  };

  const handleStateClick = (state_id) => {
    console.log("StateID: ", state_id);
    setState(state_id);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <span className="stateBtnHeader">
                <button
                  key="UTTAR PARDESH"
                  id="UTTAR PARDESH"
                  className={`btn ${state === "30" ? "active" : ""}`}
                  onClick={() => handleStateClick("30")}
                >
                  UTTAR PARDESH
                </button>
                <button
                  key="PUNJAB"
                  id="PUNJAB"
                  className={`btn ${state === "24" ? "active" : ""}`}
                  onClick={() => handleStateClick("24")}
                >
                  PUNJAB
                </button>
                <button
                  id="UTTRAKHAND"
                  key="UTTRAKHAND"
                  className={`btn ${state === "31" ? "active" : ""}`}
                  onClick={() => handleStateClick("31")}
                >
                  UTTRAKHAND
                </button>
                <button
                  id="GOA"
                  key="GOA"
                  className={`btn ${state === "1" ? "active" : ""}`}
                  onClick={() => handleStateClick("1")}
                >
                  GOA
                </button>
                <button
                  id="MANIPUR"
                  key="MANIPUR"
                  className={`btn ${state === "2" ? "active" : ""}`}
                  onClick={() => handleStateClick("2")}
                >
                  MANIPUR
                </button>
              </span>

              <div className="row2">
                {state === "24" && createMapSvg("0 0 600 600", ArrMap, 24)}
                {state === "30" && createMapSvg("80 140 950 950", UpArrMap, 30)}
                {state === "31" &&
                  createMapSvg("100 150 900 900", UttrakhandArrMap, 31)}
                {state === "1" && createMapSvg("50 60 650 650", GoaArrMap, 1)}
                {state === "2" &&
                  createMapSvg("100 140 800 800", ManipurArrMap, 2)}
                <div className="firstWidget">
                  <ConstituencyList
                    dropDownList={data}
                    onYearChange={onYearChange}
                    onHoverCalled={onHoverCalled}
                  />
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
