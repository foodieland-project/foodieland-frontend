import React, { useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./monthly.css";
function MonthlyChart({ data, title }) {
  return (
    <div className=" shadow-2xl md:w-auto overflow-hidden">
      <h3 className="p-2 font-medium text-center md:text-left md:pl-6">
        {title}
      </h3>
      <div className="w-[400px] h-[180px] lg:w-[420px] lg:h-[220px] xl:w-[600px] xl:h-[250px] 2xl:h-[300px] 2xl:w-[750px] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MonthlyChart;
