import React from "react";
import "./ConstituencyListStyle.css";
import PieChartCompo from "../PieChart/PieChartCompo";
// import ReactTooltip from 'react-tooltip';

function ConstituencyList({ dropDownList }) {
  const [items, setItems] = React.useState("starting");

  console.log("Consitunecy: ", dropDownList);

  return (
    <div className="dropDown">
      <div className="radioBtns">
        <input className="rb1" type="radio" value="2022" name="year" /> 2022
        Elections
        <input className="rb2" type="radio" value="2017" name="year" /> 2017
        Elections
        <input className="rb3" type="radio" value="2012" name="year" /> 2012
        Elections
      </div>

      <select
        id="constituency"
        value={items}
        onChange={(e) => {
          const selectedName = e.target.value;
          setItems(selectedName);
        }}
      >
        {dropDownList.map((data) => (
          <option label={data.name} value={data.name}></option>
        ))}
      </select>
      <h1 style={{ color: "red" }}>{items}</h1>
      <span className="ratio">
        <p>403/403</p>
      </span>

      <div className="firstWidget">
        <PieChartCompo />
      </div>

      <div
        className="tableWrapper box1"
        title="Mohammadabad  Harendra  Candidate   Party   PARTY LOGO"
      >
        <table className="table">
          <thead className="tHeading">
            <tr>
              <th>Party</th>
              <th>Result</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody className="tBody">
            <tr>
              <td>BJP</td>
              <td>221</td>
              <td>2012</td>
            </tr>
          </tbody>
        </table>
        {/* </span> */}
      </div>
    </div>
  );
}

export default ConstituencyList;
