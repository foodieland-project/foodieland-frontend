function FormInputs() {
  return (
    <div className="flex flex-col md:flex-row gap-6 mt-12">
      <div className="basis-1/2">
        <div className="relative">
          <label
            htmlFor=""
            className="absolute -top-2 left-3 px-1 bg-white text-xs text-secondary"
          >
            Username
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 w-full outline-none pl-2"
          />
        </div>
        <div className="relative mt-6">
          <label
            htmlFor=""
            className="absolute -top-2 left-3 px-1 bg-white text-xs text-secondary"
          >
            Email
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
            Name
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 w-full outline-none pl-2"
          />
        </div>
        <div className="relative mt-6">
          <label
            htmlFor=""
            className="absolute -top-2 left-3 px-1 bg-white text-xs text-secondary"
          >
            Role
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 w-full outline-none pl-2"
          />
        </div>
      </div>
    </div>
  );
}

export default FormInputs;
