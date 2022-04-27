import React from "react";
import PanelFooter from "./panelFooter";
import PanelHeader from "./panelHeader";

const PanelLayout = ({ children }) => {
  return (
    <>
      <PanelHeader />
      <div className="flex">
        <div className="basis-[20%]"></div>
        <div className="basis-[80%]">{children}</div>
      </div>
      <PanelFooter />
    </>
  );
};

export default PanelLayout;
