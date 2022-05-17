import { icons } from "../../../services/utils/icons";

function TwoFactorAuth() {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-center md:justify-start">
        <span className=" mr-2">{icons.key()} </span>
        <h2 className="text-xl md:text-2xl font-medium">
          Two-factor authentication
        </h2>
      </div>
      <div className="mt-6 flex flex-col items-center ">
        <div>
          <div className="bg-lightPurple inline-block py-3 px-4 rounded-md">
            <span className="">{icons.passwordLock()}</span>
          </div>
        </div>
        <div className="mt-2    ">
          <h4 className="text-lg md:text-xl font-medium ">
            Two factor authentication is not enabled yet.
          </h4>
        </div>
        <div className="w-4/5 text-center mt-2">
          <p className="text-secondary text-xs md:text-sm">
            Two-factor authentication adds an additional layer of security to
            your account by requiring more than just a password to log in. Learn
            more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TwoFactorAuth;
