import FormInputs from "./formInputs";
import UploadImage from "./uploadImage";

function SettingsForm() {
  return (
    <section className="font-inter p-6">
      <form>
        <UploadImage />
        <FormInputs />
        <div className="flex mt-12">
          <div>
            <button
              type="submit"
              className="bg-darkPurple rounded-md text-white py-2 px-4 cursor-pointer"
            >
              SAVE CHANGES
            </button>
          </div>
          <div className="ml-4">
            <button className="border-2 border-gray-300  rounded-md py-1.5 px-4  text-secondary">
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SettingsForm;
