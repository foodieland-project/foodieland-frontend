import React from 'react';
import { Area,YAxis, XAxis , CartesianGrid, Tooltip,AreaChart,ResponsiveContainer } from 'recharts';
import "./weekly.css"
function Chart({data,title}) {
  return (
    <div className="shadow-2xl md:w-[47%] w-full">
      <h3 className='p-5 font-medium'>{title}</h3>
      <div className='w-full'>
         <AreaChart height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }} 
          className="areaChart">
        <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
     </div>
    </div>
  )
}

export default Chart