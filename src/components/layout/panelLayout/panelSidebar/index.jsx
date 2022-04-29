import OptionCard from "./optionCard";
import "./panel-sidebar.css";

function PanelSidebar() {
  const sidebarOptions = [
    {
      id: 1,
      option: "statistic",
      icon: "email",
      selected: false,
      route: "../panel/statistic"
    },
    {
      id: 2,
      option: "posts",
      icon: "email",
      selected: true,
      route: "../panel/posts"
    },
    {
      id: 3,
      option: "New Post",
      icon: "email",
      selected: true,
      route: "../panel/newPost"
    },
    {
      id: 4,
      option: "contact",
      icon: "email",
      selected: false,
      route: "../panel/contact"
    },
    {
      id: 5,
      option: "option",
      icon: "email",
      selected: false,
      route: "../panel/option"
    },
  ];

  return (
    <div>
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
  );
}

export default PanelSidebar;
