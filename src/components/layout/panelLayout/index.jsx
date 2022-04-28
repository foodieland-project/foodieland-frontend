import React from "react";
import PanelFooter from "./panelFooter";
import PanelHeader from "./panelHeader";
import PanelSidebar from "./panelSideBar";

const PanelLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col  bg-lightPurple">
      <PanelHeader />
      <section className="flex flex-wrap basis-[90%] ">
        <div className="basis-[97%] sm:basis-[80%] mx-auto md:basis-[20%]">
          <PanelSidebar />
        </div>
        <div className="basis-[97%] sm:basis-[80%] mx-auto md:basis-[80%]">
          {children}
        </div>
      </section>
      <PanelFooter />
    </div>
  );
};

export default PanelLayout;
