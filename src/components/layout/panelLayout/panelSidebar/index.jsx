import OptionCard from "./optionCard";
import "./panel-sidebar.css";

function PanelSidebar() {
  const sidebarOptions = [
    {
      id: 1,
      option: "email",
      icon: "email",
      selected: false,
    },
    {
      id: 2,
      option: "post",
      icon: "email",
      selected: true,
    },
    {
      id: 3,
      option: "reset password",
      icon: "email",
      selected: false,
    },
    {
      id: 4,
      option: "contact us",
      icon: "email",
      selected: false,
    },
    {
      id: 5,
      option: "Email",
      icon: "email",
      selected: false,
    },
  ];

  return (
    <div>
      {sidebarOptions.map(({ id, option, icon, selected }) => (
        <OptionCard
          key={id}
          option={option}
          id={id}
          icon={icon}
          selected={selected}
        />
      ))}
    </div>
  );
}

export default PanelSidebar;
