import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserPhoto } from "../../../features/auth/authSlice";
import { icons } from "../../../services/utils/icons";

function PanelHeader() {
  const { idToken, userPhoto } = useSelector((state) => state.auth);
  const [image, setImage] = useState(userPhoto);
  const dispatch = useDispatch();

  let defaultPhoto =
    "https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/panel%2Fblue-avatar.png?alt=media&token=e6785fc7-5ef7-432f-a761-edb9db90437d";

  useEffect(() => {
    async function getUserData() {
      const { data } = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDoO53wWZ6YAcN8zZ4aQ_dh0LmRj6IDAoc",
        JSON.stringify({ idToken }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { photoUrl } = data.users[0];
      dispatch(setUserPhoto(photoUrl));
    }

    getUserData();
  }, []);

  return (
    <div className="hidden  md:flex items-center justify-end py-3 w-[97%] sm:w-4/5 mx-auto md:w-full md:px-6 ">
      <span>{icons.notificationBell()}</span>
      <div className="ml-4 relative">
        <img
          src={`${image ? image : defaultPhoto}`}
          alt="avatar"
          className="w-10 h-10 rounded-3xl object-cover"
        />
        <span className="bg-green-500 rounded-3xl absolute bottom-0 right-0 w-[12px] h-[12px] border-2 border-white"></span>
      </div>
    </div>
  );
}

export default PanelHeader;
