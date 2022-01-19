import React from 'react'
import { PieChart, Pie, Cell} from 'recharts';
import "./PieChartStyle.css"

export default function PieChartCompo({ pieChartData }) {
  console.log(pieChartData);

  const data =[
    {name:"BJP", value:50000},
    {name:"sp", value:20000},
    {name:"inc", value:40000},
    {name:"spa", value:3000},
    {name:"bspa", value:10000},
  ]
  const COLORS = ["#FF9933", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div>
      <div className="ratio">
           <p>403/403</p>
        </div>
      <PieChart width={700} height={240}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={0}
        outerRadius={200}
        fill="#6884d8"
        paddingAngle={0}
        dataKey="value"
        lable = "true"
      >
          {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
          </Pie>
        </PieChart>
       

      <div className="tableWrapper box1">
        <table className="table">
          <thead className="tHeading">
            <tr>
              <th>Party</th>
              <th>Result</th>
              <th>Year</th>
            </tr>
          </thead>
         
          <tbody className="tBody">
          {/* {pieChartData.map((pieChart) = ( */}
            <tr>
              <td>BJP</td>
              <td>201</td>
              <td>2012</td>
            </tr>
           {/* ))}  */}
          </tbody>
            
        </table>
      </div>
        
    </div>
)
}
