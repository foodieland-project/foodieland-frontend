function UploadImage() {
  return (
    <div className="flex gap-6 mt-4 ">
      <div>
        <img src="/images/panel/settings-avatar.png" alt="avatar" />
      </div>
      <div className="flex flex-col justify-center gap-4">
        <div className=" flex flex-col md:flex-row gap-4">
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
