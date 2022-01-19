import React, {useState} from "react";
import "./ConstituencyListStyle.css";

function ConstituencyList({ dropDownList, onYearChange }) {
  const [items, setItems] = useState("starting");
  const [year,setYear] = useState("2017");
 
  // console.log(dropDownList);
  const handleYearChange=(e)=>{
    setYear(e.target.value );
    onYearChange(year);
    }
//  console.log(year);

  return (
    <div className="dropDown">
      <div className="radioBtns">
        <input className="rb1" type="radio" value="2022" name="year" onChange={handleYearChange} /> 2022
        Elections
        <input className="rb2" type="radio" value="2017" name="year" defaultChecked onChange={handleYearChange} /> 2017
        Elections
        <input className="rb3" type="radio" value="2012" name="year" onChange={handleYearChange} /> 2012
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
    </div>
  );
}

export default ConstituencyList;
