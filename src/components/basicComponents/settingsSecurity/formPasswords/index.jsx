import { icons } from "../../../../utils/icons";

function FormPasswords() {
  function showPasswordHandler() {}
  return (
    <div className="flex border-b border-gray-200 pb-4 lg:pb-0">
      <div className="basis-full lg:basis-1/2">
        <div className="relative">
          <input
            type="text"
            placeholder="Current Password"
            className="border-2 border-gray-300 rounded-md py-2.5 w-full outline-none pl-2 pr-6"
          />
          <span
            className="absolute right-3 top-4"
            onClick={showPasswordHandler}
          >
            {icons.eye()}
          </span>
        </div>
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="New Password"
            className="border-2 border-gray-300 rounded-md py-2.5 w-full outline-none pl-2 pr-6"
          />
          <span
            className="absolute right-3 top-4"
            onClick={showPasswordHandler}
          >
            {icons.eye()}
          </span>
        </div>
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Confirm New Password"
            className="border-2 border-gray-300 rounded-md py-2.5 w-full outline-none pl-2 pr-6"
          />
          <span
            className="absolute right-3 top-4"
            onClick={showPasswordHandler}
          >
            {icons.eye()}
          </span>
        </div>
      </div>
      <div className="hidden lg:block lg:basis-1/2">
        <img
          src="/images/panel/pose_m1.png"
          alt="pose"
          className="mx-auto w-[140px]"
        />
      </div>
    </div>
  );
}

export default FormPasswords;
