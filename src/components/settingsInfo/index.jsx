import SaveButtons from "../settingsAccountForm/saveButtons";
function SettingsInfo() {
  return (
    <section className="font-inter p-6 mt-6">
      <form action="">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="basis-1/2">
            <div className="relative">
              <label
                htmlFor=""
                className="absolute -top-2 left-3 px-1 bg-white text-xs text-secondary"
              >
                name
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md py-2 w-full outline-none pl-2"
              />
            </div>
            <div className="relative mt-4">
              <label
                htmlFor=""
                className="absolute -top-2 left-3 px-1 bg-white text-xs text-secondary"
              >
                phone
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md py-2 w-full outline-none pl-2"
              />
            </div>
          </div>
          <div className="basis-1/2">
            <div className="relative">
              <label
                htmlFor=""
                className="absolute -top-2 left-3 px-1 bg-white text-xs text-secondary"
              >
                email
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md py-2 w-full outline-none pl-2"
              />
            </div>
          </div>
        </div>
        <SaveButtons />
      </form>
    </section>
  );
}

export default SettingsInfo;
