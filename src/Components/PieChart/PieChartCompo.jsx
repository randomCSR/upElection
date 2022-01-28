import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./PieChartStyle.css";

export default function PieChartCompo({ pieChartData }) {
  if (!pieChartData) return <div></div>;
  return (
    <div>
      <div className="ratioComponent">403/403</div>
      <div className="pieChartClass">
        <PieChart width={330} height={200} style={{ margin: "auto" }}>
          <Pie
            data={pieChartData}
            cx={150}
            cy={150}
            startAngle={180}
            endAngle={0}
            innerRadius={0}
            outerRadius={150}
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
      </div>
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
              <tr key={pieChart.party}>
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
