import React from 'react';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./monthly.css"
function WeeklyCart({data,title}) {
  return (
    <div className="md:w-[60%] w-full">
      <h3 className='p-5 font-medium'>{title}</h3>
       <div className='w-full'>
       
            <BarChart
         width={550}
         height={250}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 0,
          }}
         className="barChart">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" stackId="a" fill="#C6A7FE" />
          <Bar dataKey="pv" stackId="a" fill="#82ca9d" />
        </BarChart>
      
   
      </div>
    </div>
  )
}

export default WeeklyCart;