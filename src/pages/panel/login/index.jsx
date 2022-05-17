import LoginLayout from "../../../components/login/loginLayout";
import { Outlet } from "react-router-dom";
const Login = () => {
  return (
    <div className="h-[100vh] bg-[#F4F5FA]">
      <LoginLayout />
      <Outlet />
    </div>
  );
};

export default Login;
