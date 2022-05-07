import React from "react";
import { icons } from "../../../utils/icons";
import PanelFooter from "./panelFooter";
import PanelHeader from "./panelHeader";
import PanelSidebar from "./panelSidebar";

const PanelLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen md:h-screen flex flex-col  bg-lightPurple">
      {/* <PanelHeader /> */}
      <section className="flex flex-wrap max-h-[83%] basis-[90%] ">
        <div className="basis-[97%] sm:basis-[80%] mx-auto md:basis-[20%]">
          <PanelSidebar />
        </div>
        <div className="basis-[97%]  max-h-full sm:basis-[80%] mx-auto overflow-auto mb-16 md:mb-0">
          <div className="flex items-center justify-end py-3 w-[97%] sm:w-4/5 mx-auto md:w-full md:px-6 ">
            <span>{icons.notificationBell()}</span>
            <div className="ml-4 relative">
              <img src="/images/panel/Avatar.png" alt="avatar" />
              <span className="bg-green-500 rounded-3xl absolute bottom-0 right-0 w-[12px] h-[12px] border-2 border-white"></span>
            </div>
          </div>
          <div className="flex  justify-center py-[20px]">
            <main className="w-full md:w-11/12 mx-5 my-3 h-5/6 bg-white shadow-xl rounded-md">
              {children}
            </main>
          </div>
        </div>
      </section>
      <PanelFooter />
    </div>
  );
};

export default PanelLayout;
