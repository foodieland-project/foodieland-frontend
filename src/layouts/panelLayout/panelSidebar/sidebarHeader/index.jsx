import { Link } from "react-router-dom";
import { icons } from "../../../../services/utils/icons";

function SidebarHeader() {
  return (
    <div className="flex  justify-between items-center py-3  mx-auto md:w-full pl-4 lg:pl-6  font-lobster">
      <Link to="/" className="font-bold text-2xl ">
        <span>Foodieland.</span>
      </Link>
      <span className="hidden md:block">{icons.radioButtonChecked()}</span>
      <div className="flex items-center  md:hidden ">
        <span>{icons.notificationBell()}</span>
        <div className="ml-4 relative">
          <img src="/images/panel/Avatar.png" alt="avatar" />
          <span className="bg-green-500 rounded-3xl absolute bottom-0 right-0 w-[12px] h-[12px] border-2 border-white"></span>
        </div>
      </div>
    </div>
  );
}

export default SidebarHeader;
