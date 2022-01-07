import React from 'react'
import { PieChart, Pie, Cell} from 'recharts';

export default function PieChartCompo() {

  const data =[
    {name:"bjp", value:50000},
    {name:"sp", value:20000},
    {name:"inc", value:40000},
    {name:"spa", value:3000},
    {name:"bspa", value:10000},
  ]
  const COLORS = ["#FF9933", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div>
     
      <PieChart width={600} height={525}>
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
        
    </div>
)
}
