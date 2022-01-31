import React, { useEffect, useState } from "react";
import "./InfoStyle.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
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
    // if (!points) return;
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
    //   BJP: "no data",
    //   SP: "no data",
    //   INC: "no data",
    //   amt: 24000,
    // },
    {
      name: "2017",
      BJP: data.votes,
      SP: data.runnerup_votes,
      INC: "NULL",
      amt: 2200,
    },
  ];

  const m = Math.ceil(65/10);
  // const percent = 55*0.3;
  // const female = (35 % 10);
  const female = (35 % 10);
  const womenPercent = female*10/2;
  const maleViewbox = -womenPercent+ " 0 55 95";
  const femaleViewbox = 50-womenPercent+ " 0 55 95";
  // const m= Math.floor(33/10);
  // const f= Math.floor(77/10);
  // const v = 50-womenPercent+ " 0 "+ percent+ "95"
  return (
    <div>
      <div className="backToMap" onClick={() => props.handleBackClick()}>
        {" "}
        <img src={chevronLeftIcon} alt="back arrow"></img> back to map{" "}
      </div>

      <div className="gridContainer">
        <div className="gridItem item1">
          <div className="scaling-svg-container">
            {pointsData?.points && (<svg
            version="1.1"
            // height="350"  
            // width="350"
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
                  stroke = "#ffffff"
                  stroke-width= "0.5"
                />
              </g>
            </svg>)}
          </div>
        </div>
        <div className="gridItem item2">
          <h1 className="constName"> {data.name}</h1>{" "}  
        </div>
        <div className="gridItem item3">
          <h5 classname="headingItem3">ELECTORS</h5>{" "}
           {data.total_voters}{" "}
        </div>
        <div className="gridItem item4">
          <div>
            <h5 className="putInLeft">
              VOTER TURN OUT : {" "}
              <em className="largeText">{data.voterturnout}</em>
            </h5>
          </div>
          <div className="iconBox">
          {[...Array(m)].map((e, i) => (
            <span className="male_female" key={i}>
              {i !== m - 1 ? (
                <g>
                <svg
                  width="55"
                  height="95"
                  viewBox="0 0 55 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={maleSvg.d} fill={maleSvg.fill} />
                </svg>
                </g>
              ) : (
                <g>
                <svg
                  width="55"
                  height="95"
                  viewBox={maleViewbox}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={maleSvg.d} fill={maleSvg.fill} />
                </svg>
                </g>
              )}
            </span>
          ))}
          {[...Array(female)].map((e, i) => (
            <span className="male_female" key={i}>
               {i ===  0 ? (
                 <g>
              <svg
                width="55"
                height="95"
                viewBox={femaleViewbox}
                // fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={femaleSvg.d} fill={femaleSvg.fill} />
              </svg>
              </g>
               ) : (
                 <g>
                <svg
                width="55"
                height="95"
                viewBox="0 0 55 95"
                // fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={femaleSvg.d} fill={femaleSvg.fill} />
              </svg>
              </g>
              )}
            </span>
          ))}
          </div>
          {/* <div id="inBottom"> */}
            <div className="percentageGap">
              <div>
                <h5 className="menHeading">MEN ( {data.male}% )</h5>
              </div>
              <div>
                <h5 className="womenHeading">WOMEN ( {data.female}% )</h5>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className=" item5">
          <div className="graph">
            <BarChart
              width={230} 
              height={270}
              data={barData}
              barCategoryGap={19}
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
            <img className="winnerImg" src={data.photo} alt="winner" />
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
            <img className="winnerImg" src={data.runnerup_photo} alt="firstRunnerup" />
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
