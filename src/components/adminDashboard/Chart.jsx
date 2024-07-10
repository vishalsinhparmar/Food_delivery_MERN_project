import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Sun",
    Revenu:8,
    Order: 40,
    Growth: 28,
  },
  {
    name: "Mon",
    Revenu:2,
    Order: 10,
    Growth: 8,
  },
  {
    name: "Tue",
    Revenu:10,
    Order: 60,
    Growth: 50,
  },
  {
    name: "Wed",
    Revenu:5,
    Order: 30,
    Growth: 20,
  },
  {
    name: 'Thu',
    Order: 60,
    Revenu:8,
    Growth: 50,
  },
  {
    name: 'Fri',
    Revenu:3,
    Order: 20,
    Growth: 10,
  },
  {
    name: 'Sat',
    Revenu:4,
    Order: 40,
    Growth: 30,
    
  }
];

export default function App() {
  return (
    <div style={{ width: "100%", height: 400,background:'white',fontWeight:500,color:'black' }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
          barCategoryGap="10%"
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis  dataKey="name" scale="band" />
          <YAxis yAxisId='left' tickFormatter={(value)=>`${value}%`}/>
          <YAxis yAxisId='right' orientation="right" tickFormatter={(value)=>`${value}%`}/>
          <Tooltip formatter={(value)=>`${value}%`} />
          <Legend />
          <Area yAxisId='left' type="monotone" dataKey="Revenu" fill="#6EC8EF" stroke="#8884d8" />
          <Bar yAxisId='right' dataKey="Growth" barSize={30} fill="#FF5B5B" />
          <Line yAxisId='left' type="monotone" dataKey="Order" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

