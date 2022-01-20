import React, { useEffect, useState } from "react";
import "./InfoStyle.css";
import photo from "./photo.jpg";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import {
  ArrMap,
  GoaArrMap,
  UpArrMap,
  ManipurArrMap,
  UttrakhandArrMap,
} from "../../MapJsonData/ArrMap.json";
import {
  upStateId,
  punjabStateId,
  uttrakhandStateId,
  goaStateId,
  manipurStateId,
} from "../../utils";

function InfoPage(props) {
  const id = props.id;
  const [data, setData] = useState([]);
  const [pointsData, setPointsData] = useState();

  useEffect(() => {
    getConstituencyDetails("en");
    getPointsData();
  }, []);

  const getPointsData = () => {
    let pointsData;
    switch (props.state_id) {
      case upStateId:
        pointsData = UpArrMap.filter(
          (v) => v.dataId.toString() === id.toString()
        );
        break;
      case punjabStateId:
        pointsData = ArrMap.filter(
          (v) => v.dataId.toString() === id.toString()
        );
        break;
      case uttrakhandStateId:
        pointsData = UttrakhandArrMap.filter(
          (v) => v.dataId.toString() === id.toString()
        );
        break;
      case goaStateId:
        pointsData = GoaArrMap.filter(
          (v) => v.dataId.toString() === id.toString()
        );
        break;
      case manipurStateId:
        pointsData = manipurStateId.filter(
          (v) => v.dataId.toString() === id.toString()
        );
        break;
      default:
        pointsData = UpArrMap.filter(
          (v) => v.dataId.toString() === id.toString()
        );
        break;
    }
    setPointsData(pointsData[0]);
  };

  const getConstituencyDetails = async (lang = "en") => {
    const body = new URLSearchParams();
    body.append("constituency_no", id);
    body.append("state_id", props.state_id);
    body.append("year", props.selectedYear);
    body.append("lang", lang);
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    };

    try {
      const res = await fetch(
        `https://stage-api.editorji.com/elections/constituency-details`,
        {
          method: "POST",
          body,
          headers,
        }
      );
      const { response } = await res.json();
      // console.log(response[0]);
      setData(response[0]);
      return {};
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const barData = [
    {
      name: "2012",
      BJP: data.votes,
      SP: data.runnerup_votes,
      INC: 30000,
      amt: 24000,
    },
    {
      name: "2017",
      BJP: 30000,
      SP: 13098,
      INC: 23000,
      amt: 2200,
    },
  ];

  return (
    <div>
      <div className="backToMap" onClick={() => props.handleBackClick()}>
        {" "}
        &lt; back to map{" "}
      </div>

      <div className="gridContainer">
        <div className="gridItem item1">
          <div className="scaling-svg-container">
            <svg
              version="1.1"
              viewBox="80 140 950 950"
              width="100%"
              height="100%"
              className="scaling-svg"
            >
              {pointsData ? (
                pointsData.points === undefined ? (
                  <g data-tip data-for="singleBox">
                    <path
                      dataname={pointsData.cnsName}
                      className={pointsData.class}
                      fill="red"
                      d={pointsData.dd}
                    />
                  </g>
                ) : (
                  <g data-tip data-for="singleBox">
                    <polygon
                      dataname={pointsData.name}
                      className={pointsData.class}
                      fill="red"
                      points={pointsData.points}
                    />
                  </g>
                )
              ) : (
                ""
              )}
            </svg>
          </div>
        </div>
        <div className="gridItem item2">
          <h1 className="constName"> {data.name}</h1>{" "}
        </div>
        <div className="gridItem item3">
          <h5> ELECTORS </h5> {data.total_voters}{" "}
        </div>
        <div className="gridItem item4">
          <h5 className="putInLeft">
            VOTER TURN OUT : <em className="largeText">{data.voterturnout}</em>
          </h5>
          <div id="inBottom">
            <div className="percentageGap">
              <div>
                <h5>MEN ( {data.male}55% )&nbsp;&nbsp;&nbsp;&nbsp;</h5>
              </div>
              <div>
                <h5>WOMEN ( {data.female}45% )</h5>
              </div>
            </div>
          </div>
        </div>
        <div className=" item5">
          <div className="graph">
            <BarChart
              width={330}
              height={300}
              data={barData}
              barCategoryGap={15}
              margin={{
                // top: 20,
                // right: 30,
                left: 30,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="BJP" stackId="a" fill="#F97D09" />
              <Bar dataKey="SP" stackId="a" fill="#006D02" />
              <Bar dataKey="INC" stackId="a" fill="#00ffff" />
            </BarChart>
          </div>
        </div>
        <div className="gridItem item6">
          <div className="winnerPic">
            <img className="winnerImg" src={photo} alt="winner" />
            <div className="detail">
              <h4>{data.mla}</h4>
              <h5>{data.votes}&nbsp;&nbsp;Votes</h5>
              <div className="bottomDetails">
                <h6 className="won">WON</h6>
                <h6 className="winnerBottomRight">&nbsp;{data.party_code}</h6>
                <h6 className="winnerBottomRight">
                  <img src={data.logo} alt="winner logo" height="25"></img>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="gridItem item7">
          <div className="winnerPic">
            <img className="winnerImg" src={photo} alt="firstRunnerup" />
            <div className="detail">
              <h4>{data.runnerup_name}</h4>
              <h5>{data.runnerup_votes}&nbsp;&nbsp;Votes</h5>
              <div className="bottomDetails">
                <h6 className="lost">LOST</h6>
                <h6 className="winnerBottomRight">
                  &nbsp;{data.runnerup_party_code}
                </h6>
                <h6 className="winnerBottomRight">
                  <img
                    src={data.runnerup_logo}
                    alt="runnerup logo"
                    height="25"
                  ></img>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
