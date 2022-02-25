import React from "react";
import { PieChart, Pie, Cell,Tooltip } from "recharts";
import "./PieChartStyle.css";

export default function PieChartCompo({ pieChartData, totalConstituency }) {
  if (!pieChartData) return <div></div>;
  console.log(pieChartData);

  return (
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
        </PieChart>
      </div>
      <div className="tableWrapper box1">
        <table className="table">
          <thead className="tHeading">
            <tr className="table-head">
              <th>Party</th>
              <th>Result</th>
              {/* <th>2012</th> */}
            </tr>
          </thead>

          <tbody className="tBody" >
            {pieChartData.map((pieChart) => (
              <tr 
              // style={{backgroundColor:pieChart.color}}
               key={pieChart.party}>
                <td className="partyNameColumn">{pieChart.party}</td>
                <td>{pieChart.wins}</td>
                {/* <td>{pieChart.wins > pieChart.previous_election ? ("+"+pieChart.wins - pieChart.previous_election ): (pieChart.wins - pieChart.previous_election)  }</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
