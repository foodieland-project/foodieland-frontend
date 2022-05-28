import { useState, useRef } from "react";

function UploadImage() {
  const [image, setImage] = useState();
  const uploadImageInputRef = useRef();

  const uploadImageHandler = (event) => {
    console.log(event.target.files[0]);
    setImage(event.target.files[0]);
  };
  return (
    <div className="flex gap-6 mt-4 ">
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/panel%2Fblue-avatar.png?alt=media&token=e6785fc7-5ef7-432f-a761-edb9db90437d"
          alt="avatar"
          className="w-36 rounded-[50%] cursor-pointer"
          onClick={() => uploadImageInputRef.current.click()}
        />
      </div>
      <div className="flex flex-col justify-center gap-4">
        <div className=" flex flex-col md:flex-row gap-4">
          <input
            type="file"
            className="hidden"
            onChange={uploadImageHandler}
            ref={uploadImageInputRef}
          />
          <button className="bg-mainBlue rounded-md text-white py-2 px-4 text-sm font-medium cursor-pointer">
            {" "}
            UPLOAD NEW PHOTO
          </button>
          <button className="bg-white rounded-md text-orange-500 border border-orange-500 py-2 px-5  text-sm font-medium cursor-pointer">
            {" "}
            RESET
          </button>
        </div>
        <div>
          <span className="text-secondary text-2xs sm:text-xs">
            Allowed JPG, GIF or PNG. Max size of 800K
          </span>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
