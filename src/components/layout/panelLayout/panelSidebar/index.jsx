import { useState } from "react";
import { icons } from "../../../../utils/icons";
import OptionCard from "./optionCard";
import "./panel-sidebar.css";

function PanelSidebar() {
  const [open, setOpen] = useState(false);
  const sidebarOptions = [
    {
      id: 1,
      option: "statistic",
      icon: "email",
      selected: false,
      route: "/panel/statistic",
    },
    {
      id: 2,
      option: "posts",
      icon: "email",
      selected: true,
      route: "/panel/posts",
    },
    {
      id: 3,
      option: "New Post",
      icon: "email",
      selected: true,
      route: "/panel/newPost",
    },
    {
      id: 4,
      option: "contact",
      icon: "email",
      selected: false,
      route: "/panel/contact",
    },
    {
      id: 5,
      option: "option",
      icon: "email",
      selected: false,
      route: "/panel/option",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center py-3 w-[97%] sm:w-4/5 mx-auto md:w-full md:pl-6  font-lobster">
        <a href="" className="font-bold text-2xl ">
          <span>Foodieland.</span>
        </a>
        <span>{icons.radioButtonChecked()}</span>
      </div>
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
