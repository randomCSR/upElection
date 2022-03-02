import React from "react";
import { PieChart, Pie, Cell,Tooltip } from "recharts";
import "./PieChartStyle.css";

export default function PieChartCompo({ pieChartData, totalConstituency,leadData, stateNumber, year }) {
  if (!pieChartData) return <div></div>;


  let filteredData = leadData.filter( (item) => {
    return item.elect_state_id == stateNumber;
});

  const data = [
    {
      id:"1",
      name: filteredData[0].code1,
      value: filteredData[0].lead_party_seat_count_1,
      color: filteredData[0].color1,
      key: filteredData[0].elect_state_id,
      fullName: filteredData[0].party1,
    },
    {
      id:"2",
      name: filteredData[0].code2,
      value: filteredData[0].lead_party_seat_count_2,
      color: filteredData[0].color2,
      key: filteredData[0].elect_state_id,
      fullName: filteredData[0].party2,
    },
    {
      id:"3",
      name: filteredData[0].code3,
      value: filteredData[0].lead_party_seat_count_3,
      color: filteredData[0].color3,
      key: filteredData[0].elect_state_id,
      fullName: filteredData[0].party3,
    },
    {
      id:"4",
      name: filteredData[0].code4,
      value: filteredData[0].lead_party_seat_count_4,
      color: filteredData[0].color4,
      key: filteredData[0].elect_state_id,
      fullName: filteredData[0].party4,
    },
    {
      id:"5",
      name: filteredData[0].code5,
      value: filteredData[0].lead_party_seat_count_5,
      color: filteredData[0].color5,
      key: filteredData[0].elect_state_id,
      fullName: filteredData[0].party5,
    },
  ];

  // console.log(pieChartData);


  return (
    <div>
      {year==2022?
      <div>
      <span className="ratioComponent">{filteredData[0].declared_seats}/{filteredData[0].total_seats}</span>
      <div className="targetComponent">Target: {Math.ceil((totalConstituency+1)/2)}</div>
      <div className="pieChartClass">
        <PieChart width={390} height={200} style={{ margin: "auto" }}>
          <Pie
            data={data}
            cx={190}
            cy={160}
            startAngle={180}
            endAngle={0}
            innerRadius={0}
            outerRadius={160}
            paddingAngle={0}
            dataKey="value"
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} name={entry.name} />
             
            ))}
          </Pie>
          <Tooltip />
        </PieChart >
      </div>
      <div className="tableWrapper box1">
      <table className="table">
        <thead className="tHeading">
          <tr className="table-head">
            <th>Party</th>
            <th>Result</th>
          </tr>
        </thead>

        <tbody className="tBody" >
        {data.map((pieChart) => (
              <tr 
              key={pieChart.id}
              >
               <td className="partyNameColumn">{pieChart.name}</td>
               <td>{pieChart.value}</td>
               
             </tr>
           ))}
           </tbody>
        </table>
      </div>
      </div>
      

      :

      <div>
      <span className="ratioComponent">{totalConstituency}/{totalConstituency}</span>
      <div className="targetComponent">Target: {Math.ceil((totalConstituency+1)/2)}</div>
      <div className="pieChartClass">
        <PieChart width={390} height={200} style={{ margin: "auto" }}>
          <Pie
            data={pieChartData}
            cx={190}
            cy={160}
            startAngle={180}
            endAngle={0}
            innerRadius={0}
            outerRadius={160}
            paddingAngle={0}
            dataKey="wins"
            
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} name={entry.party} />
             
            ))}
          </Pie>
          <Tooltip />
        </PieChart >
      </div>
      <div className="tableWrapper box1">
      <table className="table">
        <thead className="tHeading">
          <tr className="table-head">
            <th>Party</th>
            <th>Result</th>
          </tr>
        </thead>

        <tbody className="tBody" >
        {pieChartData.map((pieChart) => (
              <tr 
              key={pieChart.party}
              >
               <td className="partyNameColumn">{pieChart.party}</td>
               <td>{pieChart.wins}</td>
               
             </tr>
           ))}
           </tbody>
        </table>
      </div>
      </div>
      }

      {/* <div className="targetComponent">Target: {Math.ceil((totalConstituency+1)/2)}</div>
      <div className="pieChartClass">
        <PieChart width={390} height={200} style={{ margin: "auto" }}>
          <Pie
            data={pieChartData}
            cx={190}
            cy={160}
            startAngle={180}
            endAngle={0}
            innerRadius={0}
            outerRadius={160}
            paddingAngle={0}
            dataKey="wins"
            
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} name={entry.name} />
             
            ))}
          </Pie>
          <Tooltip />
        </PieChart >
      </div> */}
      {/* <div className="tableWrapper box1">
        <table className="table">
          <thead className="tHeading">
            <tr className="table-head">
              <th>Party</th>
              <th>Result</th>
            </tr>
          </thead>

          <tbody className="tBody" > */}
            
            {/* {year==2017?
            pieChartData.map((pieChart) => (
              <tr 
              key={pieChart.party}
              >
               <td className="partyNameColumn">{pieChart.party}</td>
               <td>{pieChart.wins}</td>
               
             </tr>
           ))
           :
           data.map((pieChart) => (
            <tr 
            key={pieChart.id}
            >
             <td className="partyNameColumn">{pieChart.name}</td>
             <td>{pieChart.value}</td>
             
           </tr>
         ))
           
           }
          </tbody>
        </table>
      </div> */}
    </div>
  );
}
