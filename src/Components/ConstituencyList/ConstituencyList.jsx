import React, { useState } from "react";
import "./ConstituencyListStyle.css";

function ConstituencyList({ dropDownList, onYearChange, onSelectCalled }) {
  const [items, setItems] = useState();
  // const [year, setYear] = useState("2017");

  const handleYearChange = (e) => {
    // setYear(e.target.value);
    onYearChange(e.target.value);
  };

  return (
    <div className="dropDown">
      <div className="radioBtns">
        <div className=" rb">
          <input
            key="1"
            type="radio"
            value="2022"
            name="year"
            id="2022"
            onChange={handleYearChange}
          />  
          2022 Election
        </div>
        <div className="rb">
          <input
            key="2"
            type="radio"
            value="2017"
            name="year"
            defaultChecked
            id="2017"
            onChange={handleYearChange}
          />
          2017 Election
        </div>

        {/* <div className="rb">
          <input
            key="3"
            type="radio"
            value="2012"
            name="year"
            id="2012"
            onChange={handleYearChange}
          />
          2012 Election
        </div> */}
      </div>

      <select
        id="constituency"
        value={items}
        onChange={(e) => {
          const selectedName = e.target.value;
          
          setItems(selectedName);
          const popUpData = dropDownList.filter(
            (v) => v.constituency_no.toString() === e.target.value.toString()
          );
          // console.log(popUpData[0]);
          onSelectCalled(popUpData[0]);
        }}
      >
        {dropDownList.map((data) => (
          <option
            label={data.name}
            value={data.constituency_no}
            key={data.name}
          ></option>
        ))}
      </select>
    </div>
  );
}

export default ConstituencyList;
