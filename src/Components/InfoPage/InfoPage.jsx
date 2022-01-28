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
  maleSvg,
  femaleSvg,
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

  const getCordinates = (points) => {
    const a = points.split(' ').filter(p => p);
    return a.map(str => {
      const [x, y] = str.split(',');
      return ({ x: Number(x), y: Number(y) })
    });
  }
  const getExtremes = (points) => {
    const cordinates = getCordinates(points);
    const xPoints = cordinates.map(c => c.x);
    const yPoints = cordinates.map(c => c.y);
    const xMin = Math.min(...xPoints);
    const yMin = Math.min(...yPoints);
    const xMax = Math.max(...xPoints);
    const yMax = Math.max(...yPoints);
    return ({ xMin, yMin, xMax, yMax });
  }

  const getBoundingBox = (points) => {
    const { xMin, yMin, xMax, yMax } = getExtremes(points);
    return `0 0 ${xMax - xMin} ${yMax - yMin}`;
  }

  const normalize = (points) => {
    const { xMin, yMin } = getExtremes(points);
    const cordinates = getCordinates(points);
    const normalised = cordinates.map(c => ({ x: c.x - xMin, y: c.y - yMin }));
    return normalised.reduce((a, c) => a + `${c.x},${c.y} `, '');
  }

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
        pointsData = ManipurArrMap.filter(
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

  const m = 3;
  const f = 7;
  const percent = 46 * 0.3;
  const v = "0 0 " + percent + " 86";
  return (
    <div>
      <div className="backToMap" onClick={() => props.handleBackClick()}>
        {" "}
        &lt; back to map{" "}
      </div>

      <div className="gridContainer">
        <div className="gridItem item1">
          <div className="scaling-svg-container">
            {pointsData?.points && (<svg
              version="1.1"
              viewBox={getBoundingBox(pointsData?.points)}
              width="100%"
              height="100%"
              className="scaling-svg">
              <g data-tip data-for="singleBox">
                <polygon
                  dataname={pointsData.name}
                  className={pointsData.class}
                  fill="red"
                  points={normalize(pointsData?.points)}
                />
              </g>
            </svg>)}
          </div>
        </div>
        <div className="gridItem item2">
          <h1 className="constName"> {data.name}</h1>{" "}
        </div>
        <div className="gridItem item3">
          <h5> ELECTORS </h5> {data.total_voters}2673652{" "}
        </div>
        <div className="gridItem item4">
          <div>
            <h5 className="putInLeft">
              VOTER TURN OUT :{" "}
              <em className="largeText">{data.voterturnout}6767</em>
            </h5>
          </div>
          {[...Array(m)].map((e, i) => (
            <span className="male_female" key={i}>
              {i !== m - 1 ? (
                <svg
                  width="46"
                  height="86"
                  viewBox="0 0 46 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={maleSvg.d} fill={maleSvg.fill} />
                </svg>
              ) : (
                <svg
                  width={percent}
                  height="86"
                  viewBox={v}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={maleSvg.d} fill={maleSvg.fill} />
                </svg>
              )}
            </span>
          ))}
          {[...Array(f)].map((e, i) => (
            <span className="male_female" key={i}>
              <svg
                width="46"
                height="86"
                viewBox="0 0 46 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={femaleSvg.d} fill={femaleSvg.fill} />
              </svg>
            </span>
          ))}
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
