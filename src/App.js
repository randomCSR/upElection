import React from "react";
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

import {
  upStateId,
  punjabStateId,
  uttrakhandStateId,
  goaStateId,
  manipurStateId,
} from "./utils";

import Map from "./Components/MapCompo/Map";
import PopUp from "./Components/popUpBox/popUp";
import PieChartCompo from "./Components/PieChart/PieChartCompo";
// import InfoPage from "./Components/InfoPage/InfoPage";
function App() {
  const [state, setState] = useState(upStateId);
  const [data, setData] = useState([]);
  const [popUpData, setPopUpData] = useState();
  const [pieData, setPieData] = useState();
  const [constituencyRatio, setconstituencyRatio] = useState();
  const [selectedYear, setSelectedYear] = useState("2017");
  const [id, setId] = useState();
  const [isShowInfo, setShowInfo] = useState(false);
  const [electionLead, setElectionLead] = useState([]);
  const query = new URLSearchParams(window.location.search);
  const isLive = query.get("isLive") || "false";

  useEffect(() => {
  getElectionLeads("en");
}, []);

const getElectionLeads = async (lang = "en") => {
  const body = new URLSearchParams();
  body.append("lang", lang);
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  };

  const url = 
  isLive === "true"
  ? `https://node-api.editorji.com/elections/election-leads`
  : `https://stage-api.editorji.com/elections/election-leads`;
  try {
    const res = await fetch(url, {
      method: "POST",
      body,
      headers,
    });
    const { response } = await res.json();
    setElectionLead(response);
    return {};
  } catch (error) {
    return Promise.reject(error);
  }
};


  useEffect(() => {
    getConstituencyData("en");
  }, [state, selectedYear]);

  const getConstituencyData = async (lang = "en") => {
    // console.log("year: ", selectedYear, "id: ", state);
    const body = new URLSearchParams();
    body.append("state_id", state);
    body.append("year", selectedYear);
    body.append("lang", lang);
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    };
    const url =
    isLive === "true"
    ? `https://node-api.editorji.com/elections/constituencies`
    : `https://stage-api.editorji.com/elections/constituencies`;

    try {
      const res = await fetch(
        url,
        {
          method: "POST",
          body,
          headers,
        }
      );
      const { response, piechart, constituencyCount } = await res.json();
      console.log("MapData: ", response);
      setData(response);
      setPieData(piechart);
      setconstituencyRatio(constituencyCount);
      return {};
    } catch (error) {
      return Promise.reject(error);
    }
  };



  function createMap(cnsTerms) {
    return (
      <Map
        apiData={data.filter(
          (v) => v.constituency_no.toString() === cnsTerms.dataId.toString()
        )}
        onHoverCalled={onHoverCalled}
        handleIdClick={handleIdClick}
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
      <div className="mapdiv">
        <div key={`Map${id}`}>
          <svg
            version="1.1"
            viewBox={viewbox}
            height="100%"
            width="100%"
            key={`SVG${id}`}
          >
            {arrayData.map(createMap)}
          </svg>
        </div>
        <PopUp data={popUpData} key={`ToolTip${id}`} />
      </div>
    );
  }

  const onHoverCalled = (data) => {
    console.log(data);
    setPopUpData(data);
  };

  const onYearChange = (data) => {
    setSelectedYear(data);
    // console.log("YearData", data);
  };
  // const passedYear = (year) => {
  //   setSelectedYear(year);
  //   // console.log("YearData", data);
  // };


  const handleStateClick = (state_id) => {
    // console.log("StateID: ", state_id);
    setState(state_id);
  };

  const handleIdClick = (id) => {
    // console.log("Click: ", id);
    setId(id);
    setShowInfo(true);
  };
  const handleBackClick = (year) => {
    setSelectedYear(year);
    setShowInfo(false);
  };
  const onSelectCalled = (data) => {
    // console.log(data);
    setId(data.constituency_no);
    setShowInfo(true);
  };
  // console.log(state);
  return (
    <div className="App">
      <div className="container">
        {/* {isShowInfo ? ( ""
          <InfoPage
            cId={id}
            selectedYear={selectedYear}
            state_id={state}
            handleBackClick={handleBackClick}
          />
        ) : ( */}
          <>
            <div className="stateBtnHeader">
              <button
                key="UTTAR PARDESH"
                id="UTTAR PARDESH"
                className={`btn ${state === upStateId ? "active" : ""}`}
                onClick={() => handleStateClick(upStateId)}
              >
                UTTAR PRADESH
              </button>
              <button
                key="PUNJAB"
                id="PUNJAB"
                className={`btn ${state === punjabStateId ? "active" : ""}`}
                onClick={() => handleStateClick(punjabStateId)}
              >
                PUNJAB
              </button>
              <button
                id="UTTRAKHAND"
                key="UTTRAKHAND"
                className={`btn ${state === uttrakhandStateId ? "active" : ""}`}
                onClick={() => handleStateClick(uttrakhandStateId)}
              >
                UTTRAKHAND
              </button>
              <button
                id="GOA"
                key="GOA"
                className={`btn ${state === goaStateId ? "active" : ""}`}
                onClick={() => handleStateClick(goaStateId)}
              >
                GOA
              </button>
              <button
                id="MANIPUR"
                key="MANIPUR"
                className={`btn ${state === manipurStateId ? "active" : ""}`}
                onClick={() => handleStateClick(manipurStateId)}
              >
                MANIPUR
              </button>
            </div>

            <div className="row2">
              {state === punjabStateId &&
                createMapSvg("0 0 600 600", ArrMap, punjabStateId)}
              {state === upStateId &&
                createMapSvg("80 140 950 950", UpArrMap, upStateId)}
              {state === uttrakhandStateId &&
                createMapSvg(
                  "100 150 900 900",
                  UttrakhandArrMap,
                  uttrakhandStateId
                )}
              {state === goaStateId &&
                createMapSvg("50 60 650 650", GoaArrMap, goaStateId)}
              {state === manipurStateId &&
                createMapSvg("100 140 800 800", ManipurArrMap, manipurStateId)}
              <div className="firstWidget">
                <div className="firstWidgetContainer">
                  <ConstituencyList
                    dropDownList={data}
                    onYearChange={onYearChange}
                    onSelectCalled={onSelectCalled}
                    chosenYear = {selectedYear}

                  />
                  {
                    <div className="secondWidget">
                      <PieChartCompo
                        year={selectedYear}
                        stateNumber = {state}
                        leadData = {electionLead}
                        pieChartData={pieData}
                        totalConstituency={constituencyRatio}
                      />
                    </div>
                  }
                </div>
              </div>
            </div>
          </>
        {/* )} */}
      </div>
    </div>
  );
}

export default App;
