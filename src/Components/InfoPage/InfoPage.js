import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./InfoStyle.css";
import map from "./map.png";
import photo from "./photo.jpg";
import graph from "./graph.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



const customStyle = {
  color: "#73e7fc",
};




function InfoPage(props) {
  // const [constituency,setConstituency]=useState([])
  const { id } = useParams();
  const [data,setData] = useState([]);
  useEffect(() => {
    getConstituencyDetails("en");
  }, []);
  const getConstituencyDetails = async (lang = "en") => {
    // console.log("Hi");
    const body = new URLSearchParams();
    body.append("constituency_no", id);
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
      amt: 24000
    },
    {
      name: "2017",
      BJP: 30000,
      SP: 13098,
      INC: 23000,
      amt: 2200
    }
  ];



  return (

    // <div>
    //   <Link to="/">
    //     <h5 className="backToMap"> &lt; back to map </h5>
    //   </Link>

  //     <div className="infoContainer">
  //       <div className="grid-container">
  //         <div className="grid_item item1">
  //           <h1 style={customStyle}>{data.name}</h1>
  //         </div>
  //         <div className="grid_item item2">
  //           <p>Population</p><h1>{data.population}</h1>
            
  //         </div>
  //         <div className="grid_item item3">
  //           <p>Sex Ratio</p>
  //           <h1>{data.sex_ratio}</h1>
  //         </div>
  //         <div className="grid_item item4">
  //           <p>Literacy Rate</p>
  //           <h1>{data.literacy}</h1>
  //         </div>
  //         <div className="grid_item item5">
  //           <div className="map">
  //             <img src={map} height="300" width="300" alt="Map here" />
  //           </div>
  //         </div>
  //         <div className="grid_item item6">
  //           <div>
  //             <div className="photo">
  //               <img
  //                 className="inc"
  //                 src={data.photo}
  //                 height="180"
  //                 width="180"
  //                 alt="winner here"
  //               />
  //             </div>
  //             <div className="detail">
  //               <p>INCUMBENT</p>
  //               <h2>{data.mla}</h2>
  //               <p>{data.party}</p>
  //               <p>
  //                 AGE : <em style={customStyle}>{calculate_age(data.dob)}</em>
  //               </p>
  //               <p>
  //                 EDUCATION : <em style={customStyle}>{data.education}</em>
  //               </p>
  //               <p>
  //                 ASSET : <em style={customStyle}> &#x20B9; {data.assets}</em>
  //               </p>
  //               <p>
  //                 CRIMINAL CASES : <em style={customStyle}>{data.criminal_case}</em>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="grid_item item7">
  //           <h1>Quick Facts</h1>
  //           <ul>
  //           <li>{data.quickfacts}</li>
  //             <li>first quick fact</li>
  //             <li>second quick fact</li>
  //             <li>Third quick fact</li>
  //             <li>Fourth quick fact</li>
  //             <li>Fifth quick fact</li>
  //             <li>sixth quick fact</li>
  //           </ul>
  //         </div>
  //         <div className="grid_item item8">
  //           <div className="graph">
  //             <img src={graph} height="275" width="275" alt="graph here" />
  //           </div>
  //         </div>
  //         <div className="grid_item item9">
  //           <h2>VOTER TURN OUT : 2,18,376</h2>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  <div>
     <Link to="/">
     <h5 className="backToMap"> &lt; back to map </h5>
     </Link>
     <div className="gridContainer">
        <div className="gridItem item1"> 
          <div className="map">
            <img src={map} height="300" width="300" alt="Map here" />
          </div>       
         </div>
        <div className="gridItem item2"><h1 className="constName"> {data.name}</h1> </div>
        <div className="gridItem item3"><h5> ELECTORS </h5> 2,96,160 </div>
        <div className="gridItem item4"> <h5 className="putInLeft">VOTER TURN OUT : <em className="largeText">1,86,376</em></h5><div id="inBottom">
   <div><h5 >MEN( )</h5></div> <div><h5 >WOMEN( )</h5></div>
  </div></div>
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
                      bottom: 5
                    }}
                  >
                    {/* <CartesianGrid strokeDasharray="0 1" /> */}
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
               <h5 >{data.votes}&nbsp;&nbsp;Votes</h5>
               <div className="bottomDetails">
               <h6 className="won">WON</h6>
               <h6 className="winnerBottomRight">&nbsp;{data.party_code}</h6>
               <h6 className="winnerBottomRight"><img src={data.logo} alt="winner logo" height="25" ></img></h6>
               
              
               </div>
            </div>
          </div>
        </div>
        <div className="gridItem item7"> 
        <div className="winnerPic">
            <img className="winnerImg" src={photo} alt="winner" />
            <div className="detail">
               <h4>{data.runnerup_name}</h4>
               <h5>{data.runnerup_votes}&nbsp;&nbsp;Votes</h5>
               <div className="bottomDetails">
               <h6 className="lost">LOST</h6>
               <h6 className="winnerBottomRight">&nbsp;{data.runnerup_party_code}</h6>
               <h6 className="winnerBottomRight"><img src={data.runnerup_logo} alt="winner logo" height="25" ></img></h6>
               
               </div>
            </div>
          </div>
        </div>
        </div>
</div>
  );
}

export default InfoPage;