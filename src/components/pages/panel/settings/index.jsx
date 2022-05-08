import React, { useState } from "react";
import SettingsAccountForm from "../../../basicComponents/settingsAccountForm";
import SettingsSecurity from "../../../basicComponents/settingsSecurity";
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
      {activePage === "account" && <SettingsAccountForm />}
      {activePage === "security" && <SettingsSecurity />}
    </PanelLayout>
  );
};

export default Settings;
