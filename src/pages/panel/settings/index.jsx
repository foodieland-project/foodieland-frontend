import React, { useState } from "react";
import SettingsAccountForm from "../../../components/settingsAccountForm";
import SettingsInfo from "../../../components/settingsInfo";
import SettingsSecurity from "../../../components/settingsSecurity";
import PanelLayout from "../../../layouts/panelLayout";
import PanelSettingsNavbar from "../../../layouts/panelLayout/panelSettingsNavbar/index.jsx";

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
      {activePage === "account" && <SettingsAccountForm />}
      {activePage === "security" && <SettingsSecurity />}
      {activePage === "info" && <SettingsInfo />}
    </PanelLayout>
  );
};

export default Settings;
