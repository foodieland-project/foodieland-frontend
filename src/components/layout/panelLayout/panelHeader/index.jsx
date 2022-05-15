import { icons } from "../../../../utils/icons";

function PanelHeader() {
  return (
    <div className="hidden  md:flex items-center justify-end py-3 w-[97%] sm:w-4/5 mx-auto md:w-full md:px-6 ">
      <span>{icons.notificationBell()}</span>
      <div className="ml-4 relative">
        <img
          src="/images/panel/blue-avatar.png"
          alt="avatar"
          className="w-10 h-10 rounded-3xl"
        />
        <span className="bg-green-500 rounded-3xl absolute bottom-0 right-0 w-[12px] h-[12px] border-2 border-white"></span>
      </div>
    </div>
  );
}

export default PanelHeader;
