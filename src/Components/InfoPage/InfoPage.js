import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./InfoStyle.css";
import map from "./map.png";
// import photo from "./photo.jpg";
import graph from "./graph.png";

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
    //const lang = lan === "bn" ? "ta" : lan;
    console.log("Hi");
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
      console.log(response);
      setData(response[0]);
      // const { response } = data.data;
      return {};
    } catch (error) {
      return Promise.reject(error);
    }
  };
 
 
  const calculate_age = (dob1) => { 
    var today = new Date();
    var birthDate = new Date(dob1); 
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    console.log(age_now);
    return age_now;
  }



  return (
    <div>
      <Link to="/">
        <h5 className="backToMap"> &lt; back to map </h5>
      </Link>

      <div className="infoContainer">
        {
          // constituency.map(response =><div><p>{`${response.id}`}</p> </div>)
        }
        <div className="grid-container">
          <div className="grid_item item1">
            <h1 style={customStyle}>{data.name}</h1>
          </div>
          <div className="grid_item item2">
            <p>Population</p><h1>{data.population}</h1>
            
          </div>
          <div className="grid_item item3">
            <p>Sex Ratio</p>
            <h1>{data.sex_ratio}</h1>
          </div>
          <div className="grid_item item4">
            <p>Literacy Rate</p>
            <h1>{data.literacy}</h1>
          </div>
          <div className="grid_item item5">
            <div className="map">
              <img src={map} height="300" width="300" alt="Map here" />
            </div>
          </div>
          <div className="grid_item item6">
            <div>
              <div className="photo">
                <img
                  className="inc"
                  src={data.photo}
                  height="180"
                  width="180"
                  alt="winner here"
                />
              </div>
              <div className="detail">
                <p>INCUMBENT</p>
                <h2>{data.mla}</h2>
                <p>{data.party}</p>
                <p>
                  AGE : <em style={customStyle}>{calculate_age(data.dob)}</em>
                </p>
                <p>
                  EDUCATION : <em style={customStyle}>{data.education}</em>
                </p>
                <p>
                  ASSET : <em style={customStyle}> &#x20B9; {data.assets}</em>
                </p>
                <p>
                  CRIMINAL CASES : <em style={customStyle}>{data.criminal_case}</em>
                </p>
              </div>
            </div>
          </div>
          <div className="grid_item item7">
            <h1>Quick Facts</h1>
            <ul>
            <li>{data.quickfacts}</li>
              <li>first quick fact</li>
              <li>second quick fact</li>
              <li>Third quick fact</li>
              <li>Fourth quick fact</li>
              <li>Fifth quick fact</li>
              <li>sixth quick fact</li>
            </ul>
          </div>
          <div className="grid_item item8">
            <div className="graph">
              <img src={graph} height="275" width="275" alt="graph here" />
            </div>
          </div>
          <div className="grid_item item9">
            <h2>VOTER TURN OUT : 2,18,376</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;