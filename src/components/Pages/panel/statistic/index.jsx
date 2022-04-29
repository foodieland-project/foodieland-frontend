import React from "react";

import PanelLayout from "../../../layout/panelLayout";
import Chart from "../../../BasicComponents/statistic/components/chart/index.jsx";
const userData = [
  {
    "name": "Jan",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Feb",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Mar",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Apr",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "May",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Jun",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Jul",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  },
  {
    "name": "Aug",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  },
  {
    "name": "Sep",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  },
  {
    "name": "Oct",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  },
  {
    "name": "Nov",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  },
  {
    "name": "Dec",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]


const Statistic = () => {
  return (
    <PanelLayout>
      <Chart data={userData} title="Monthly Analytics"/>
    </PanelLayout>
  );
};

export default Statistic;
