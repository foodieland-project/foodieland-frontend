import React from "react";
import StatisticCard from "../../../components/statistic/components/postCard";
import PanelLayout from "../../../layouts/panelLayout";
import WeeklyChart from "../../../components/statistic/components/weeklyChart";
import MonthlyChart from "../../../components/statistic/components/monthlyChart";
const weeklyData = [
  {
    name: "1-8",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "8-16",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "16-24",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "24-32",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "32-40",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "40-48",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "48-52",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const MonthData = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3090,
    pv: 5000,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 2390,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 5610,
    pv: 2200,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 2490,
    pv: 3300,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 4490,
    pv: 4300,
    amt: 2100,
  },
];

const Statistic = () => {
  return (
    <PanelLayout>
      <section className="p-4 lg:px-6 lg:py-10 font-inter">
        <div className="flex flex-col md:flex-row justify-center mb-12 gap-4 lg:gap-6">
          <StatisticCard numbers={2000} title={"Monthly Chart"} />
          <MonthlyChart data={MonthData} title="Monthly Analytics" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-6">
          <StatisticCard numbers={500} title={"Weekly Chart"} />
          <WeeklyChart data={weeklyData} title="Weekly Analytics" />
        </div>
      </section>
    </PanelLayout>
  );
};

export default Statistic;
