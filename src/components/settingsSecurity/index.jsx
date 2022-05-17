import SaveButtons from "../settingsAccountForm/saveButtons";
import FormPasswords from "./formPasswords";
import TwoFactorAuth from "./twoFactorAuth";

function SettingsSecurity() {
  return (
    <section className="font-inter p-6 mt-4 ">
      <form action="">
        <FormPasswords />
        <TwoFactorAuth />
        <SaveButtons />
      </form>
    </section>
  );
}

export default SettingsSecurity;
