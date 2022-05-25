import { useState } from "react";
import SettingsAccountForm from "../../../components/settingsAccountForm";
import SettingsInfo from "../../../components/settingsInfo";
import SettingsSecurity from "../../../components/settingsSecurity";
import PanelLayout from "../../../layouts/panelLayout";
import PanelSettingsNavbar from "../../../layouts/panelLayout/panelSettingsNavbar";

const Settings = () => {
  const [currentPage, setCurrentPage] = useState("account");
  function pageHandler(page) {
    setCurrentPage(page);
  }

  return (
    <PanelLayout>
      <PanelSettingsNavbar
        currentPage={currentPage}
        pageHandler={pageHandler}
      />
      {currentPage === "account" && <SettingsAccountForm />}
      {currentPage === "security" && <SettingsSecurity />}
      {currentPage === "info" && <SettingsInfo />}
    </PanelLayout>
  );
};

export default Settings;
