import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./PieChartStyle.css";

export default function PieChartCompo({ pieChartData }) {
  if (!pieChartData) return <div></div>;
  console.log(pieChartData);
  return (
    <div>
      <div className="ratio">
        <p>403/403</p>
      </div>

      <PieChart width={700} height={240}>
        <Pie
          data={pieChartData}
          cx={200}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={0}
          outerRadius={200}
          fill="colors"
          paddingAngle={0}
          dataKey="wins"
          lable="true"
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      <div className="tableWrapper box1">
        <table className="table">
          <thead className="tHeading">
            <tr>
              <th>Party</th>
              <th>Result</th>
            </tr>
          </thead>

          <tbody className="tBody">
            {pieChartData.map((pieChart) => (
              <tr>
                <td>{pieChart.party}</td>
                <td>{pieChart.wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
