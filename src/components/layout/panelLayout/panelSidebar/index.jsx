import { useState } from "react";
import OptionCard from "./optionCard";
import "./panel-sidebar.css";
import SidebarHeader from "./sidebarHeader";

function PanelSidebar() {
  const [open, setOpen] = useState(false);
  const sidebarOptions = [
    {
      id: 1,
      option: "statistic",
      icon: "chart",
      selected: false,
      route: "/panel/statistic",
    },
    {
      id: 2,
      option: "posts",
      icon: "lists",
      selected: true,
      route: "/panel/posts",
    },
    {
      id: 3,
      option: "New Post",
      icon: "circlePlus",
      selected: true,
      route: "/panel/newPost",
    },
    {
      id: 4,
      option: "contact",
      icon: "inbox",
      selected: false,
      route: "/panel/contact",
    },
    {
      id: 5,
      option: "settings",
      icon: "gear",
      selected: false,
      route: "/panel/settings",
    },
  ];

  return (
    <div>
      <SidebarHeader />
      <ul
        onClick={() => setOpen((prev) => !prev)}
        className={`cursor-pointer option-selected active justify-center h-[50px] my-4 items-center md:hidden  flex  flex-col ${
          open ? "h-[36px]" : ""
        }`}
      >
        <li
          className={`w-[30px] h-[5px] bg-white  rounded-md inline mb-1 transition-all ${
            open ? " hidden rotate-90" : ""
          }`}
        ></li>
        <li
          className={`w-[30px] h-[5px] bg-white  rounded-md inline mb-1 transition-all	 ${
            open ? " rotate-45  absolute" : ""
          }`}
        ></li>
        <li
          className={`w-[30px] h-[5px] bg-white  rounded-md inline mb-1  transition-all ${
            open ? " rotate-135" : ""
          }`}
        ></li>
      </ul>

      <div className={`${open && " hidden "} `}>
        {sidebarOptions.map(({ route, id, option, icon, selected }) => (
          <OptionCard
            key={id}
            option={option}
            id={id}
            icon={icon}
            selected={selected}
            route={route}
          />
        ))}
      </div>
    </div>
  );
}

export default PanelSidebar;
