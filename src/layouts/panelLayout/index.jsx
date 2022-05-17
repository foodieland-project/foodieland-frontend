import React from "react";
import PanelFooter from "./panelFooter";
import PanelHeader from "./panelHeader";
import PanelSidebar from "./panelSidebar";

const PanelLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-lightPurple ">
      <div className="w-[97%] sm:w-4/5 md:w-[20%] mx-auto md:fixed h-full bg-lightPurple">
        <PanelSidebar />
      </div>
      <div className="w-[97%] sm:w-4/5 md:w-[80%] mx-auto mt-7 md:mt-0 md:mb-0 md:absolute right-0 bg-lightPurple">
        <div className="relative min-h-screen">
          <PanelHeader />
          <div className="flex  justify-center pb-14">
            <main className="w-full md:w-11/12 mx-5  my-3 h-5/6 bg-white shadow-xl rounded-md">
              {children}
            </main>
          </div>
          <PanelFooter />
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
