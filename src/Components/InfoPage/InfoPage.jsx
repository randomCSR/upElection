import React, { useEffect, useState } from "react";
import "./InfoStyle.css";
import { BarChart, Bar, XAxis, YAxis,CartesianGrid, Tooltip, Legend } from "recharts";
import chevronLeftIcon from "./Icons/chevron-left.svg";
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
    const a = points.split(" ").filter((p) => p);
    return a.map((str) => {
      const [x, y] = str.split(",");
      return { x: Number(x), y: Number(y) };
    });
  };
  const getExtremes = (points) => {
    const cordinates = getCordinates(points);
    const xPoints = cordinates.map((c) => c.x);
    const yPoints = cordinates.map((c) => c.y);
    const xMin = Math.min(...xPoints);
    const yMin = Math.min(...yPoints);
    const xMax = Math.max(...xPoints);
    const yMax = Math.max(...yPoints);
    return { xMin, yMin, xMax, yMax };
  };

  const getBoundingBox = (points) => {
    // if (!points) return;
    const { xMin, yMin, xMax, yMax } = getExtremes(points);
    return `0 0 ${xMax - xMin} ${yMax - yMin}`;
  };

  const normalize = (points) => {
    const { xMin, yMin } = getExtremes(points);
    const cordinates = getCordinates(points);
    const normalised = cordinates.map((c) => ({
      x: c.x - xMin,
      y: c.y - yMin,
    }));
    return normalised.reduce((a, c) => a + `${c.x},${c.y} `, "");
  };

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
      // console.log(response[0]);
      setData(response[0]);
      return {};
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const barData = [
    // {
    //   name: "2012",
    //   Winner: 4000,
    //   Runnerup: 2400,
    //   amt: 2400
    // },
    {
      name: "2017",
      Winner: data.votes,
      Runnerup: data.runnerup_votes,
    },
  ];

  const malePercent = 70;
  const femalePercent =30;

  const maleLoop = Math.ceil(malePercent / 10);
  const femaleLoop = Math.ceil(femalePercent / 10);

  const lastPercent = malePercent % 10 !== 0 ? (malePercent % 10) / 10 : 1;
  const firstPercent = femalePercent % 10 !== 0 ? (femalePercent % 10) / 10 : 1;

  const maleWidth = 55 * lastPercent;
  const femaleWidth = 55 * firstPercent;

  const maleViewbox = "0 0 " + maleWidth + " 95";
  const femaleViewbox = 55 - femaleWidth + " 0 " + femaleWidth + " 95";

  return (
    <div>
      <div className="backToMap" onClick={() => props.handleBackClick()}>
        <div>
          <img src={chevronLeftIcon} alt="back arrow"></img>
        </div>
        <div> back to map</div>
      </div>

      <div className="gridContainer">
        <div className="gridItem item1">
          <div className="scaling-svg-container">
            {pointsData?.points && (
              <svg
                version="1.1"
                viewBox={getBoundingBox(pointsData?.points)}
                width="100%"
                height="100%"
                className="scaling-svg"
              >
                <g data-tip data-for="singleBox">
                  <polygon
                    dataname={pointsData.name}
                    className={pointsData.class}
                    fill={data.color}
                    points={normalize(pointsData?.points)}
                    stroke="#ffffff"
                    strokeWidth="0.5"
                  />
                </g>
              </svg>
            )}
          </div>
        <div className="graphContainer">
          <div className="graph">
                <BarChart
                  width={200}
                  height={270}
                  data={barData}
                  barCategoryGap={20}
                  margin={{
                    top: 20,
                    // right: 30,
                    // left: 20,
                    // bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="0 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Winner" fill="#00FFFF" />
                  <Bar dataKey="Runnerup" fill="#4a86e6" />
                </BarChart>
          </div>
          </div>
        </div>
        <div className="gridItem item2">
          <div className="item3">
            <h1 className="constName"> {data.name}</h1>{" "}
          </div>

          <div className="item4">
            <div className="item4_1">
              <h5 className="headingItem3">ELECTORS</h5> {data.total_voters}{" "}
            </div>

            <div className="item4_2">
              <h5 className="putInLeft">
                VOTER TURN OUT :{" "}
                <em className="largeText">{data.voterturnout}</em>
              </h5>
              <div className="iconBox">
                {[...Array(maleLoop)].map((e, i) => (
                  <span className="male_female" key={i}>
                    {i !== maleLoop - 1 ? (
                      <svg
                        width="55"
                        height="95"
                        viewBox="0 0 55 95"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path d={maleSvg.d} fill={maleSvg.fill} />
                        </g>
                      </svg>
                    ) : (
                      <svg
                        width={maleWidth}
                        height="95"
                        viewBox={maleViewbox}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path d={maleSvg.d} fill={maleSvg.fill} />
                        </g>
                      </svg>
                    )}
                  </span>
                ))}
                {[...Array(femaleLoop)].map((e, i) => (
                  <span className="male_female" key={i}>
                    {i === 0 ? (
                      <svg
                        width={femaleWidth}
                        height="95"
                        viewBox={femaleViewbox}
                        // fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path d={femaleSvg.d} fill={femaleSvg.fill} />
                        </g>
                      </svg>
                    ) : (
                      <svg
                        width="55"
                        height="95"
                        viewBox="0 0 55 95"
                        // fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path d={femaleSvg.d} fill={femaleSvg.fill} />
                        </g>
                      </svg>
                    )}
                  </span>
                ))}
              </div>
              <div className="percentageGap">
                <div>
                  <h5 className="menHeading">MEN ( {data.male}% )</h5>
                </div>
                <div>
                  <h5 className="womenHeading">WOMEN ( {data.female}% )</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="item5">
            <div className="item5_1">
              <div className="winnerPic">
                <img className="winnerImg" src={data.photo} alt="winner" />
                <div className="detail">
                  <h4>{data.mla}</h4>
                  <h5>{data.votes}&nbsp;&nbsp;Votes</h5>
                  <div className="bottomDetails">
                    <h6 className="won">WON</h6>
                    <div className="winnerBottomRight">
                      <div>
                        <h6>
                          <img
                            src={data.logo}
                            alt="winner logo"
                            height="25"
                          ></img>
                        </h6>
                      </div>
                      <div>
                        <h6>{data.party_code}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item5_2">
              <div className="winnerPic">
                <img
                  className="winnerImg"
                  src={data.runnerup_photo}
                  alt="Runnerup"
                />
                <div className="detail">
                  <h4>{data.runnerup_name}</h4>
                  <h5>{data.runnerup_votes}&nbsp;&nbsp;Votes</h5>
                  <div className="bottomDetails">
                    <h6 className="lost">LOST</h6>
                    <div className="winnerBottomRight">
                      <div>
                        <h6>
                          <img
                            src={data.runnerup_logo}
                            alt="runnerup logo"
                            height="25"
                          ></img>
                        </h6>
                      </div>
                      <div>
                        <h6>{data.runnerup_party_code}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
