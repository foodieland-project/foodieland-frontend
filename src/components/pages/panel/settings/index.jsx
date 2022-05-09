import React, { useState } from "react";
import SettingsAccountForm from "../../../basicComponents/settingsAccountForm";
import SettingsInfo from "../../../basicComponents/settingsInfo";
import SettingsSecurity from "../../../basicComponents/settingsSecurity";
import PanelLayout from "../../../layout/panelLayout";
import PanelSettingsNavbar from "../../../layout/panelLayout/panelSettingsNavbar/index.jsx";

const Settings = () => {
  const [activePage, setActivePage] = useState("info");

  function activePageHandler(page) {
    setActivePage(page);
  }
  return (
    <PanelLayout>
      <PanelSettingsNavbar
        activePage={activePage}
        activePageHandler={activePageHandler}
      />
      {activePage === "account" && <SettingsAccountForm />}
      {activePage === "security" && <SettingsSecurity />}
      {activePage === "info" && <SettingsInfo />}
    </PanelLayout>
  );
};

export default Settings;
