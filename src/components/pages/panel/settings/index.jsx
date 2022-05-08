import React, { useState } from "react";
import SettingsForm from "../../../basicComponents/settingsForm";
import PanelLayout from "../../../layout/panelLayout";
import PanelSettingsNavbar from "../../../layout/panelLayout/panelSettingsNavbar/index.jsx";

const Settings = () => {
  const [activePage, setActivePage] = useState("account");

  function activePageHandler(page) {
    setActivePage(page);
  }
  return (
    <PanelLayout>
      <PanelSettingsNavbar
        activePage={activePage}
        activePageHandler={activePageHandler}
      />
      <SettingsForm />
    </PanelLayout>
  );
};

export default Settings;
