import { Outlet } from "react-router-dom";
import PanelLayout from "../../../layouts/panelLayout";
import PanelSettingsNavbar from "../../../layouts/panelLayout/panelSettingsNavbar";

const Settings = () => {
  return (
    <PanelLayout>
      <PanelSettingsNavbar />
      <Outlet />
    </PanelLayout>
  );
};

export default Settings;
