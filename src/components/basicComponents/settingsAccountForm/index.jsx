import FormInputs from "./formInputs";
import SaveButtons from "./saveButtons";
import UploadImage from "./uploadImage";

function SettingsAccountForm() {
  return (
    <section className="font-inter p-6">
      <form>
        <UploadImage />
        <FormInputs />
        <SaveButtons />
      </form>
    </section>
  );
}

export default SettingsAccountForm;
