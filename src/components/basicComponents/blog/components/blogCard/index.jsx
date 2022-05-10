function BlogCard({ img, title, writer, profile, date }) {
  return (
    <article className="flex flex-col md:flex-row mt-8 gap-4">
      <div className=" basis-[35%] ">
        <img
          src={`${img}`}
          alt="food"
          className="w-full h-full rounded-[15px] object-cover"
        />
      </div>
      <div className="basis-[65%] relative">
        <div className="text-center md:text-left">
          <h4 className="text-xl xl:text-2xl font-bold ">{title}</h4>
          <p className="text-secondary mt-3 md:mt-2 text-xs xl:text-base ">
            Lorem, ipsum dol Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Et provident error repellendus tenetur.
          </p>

          <div className="flex items-center justify-center md:justify-start mt-4 md:mt-0 md:absolute bottom-2">
            <div className="flex items-center   ">
              {/* img */}
              <img
                src={`/${profile}`}
                alt=""
                className="w-8 h-8  rounded-[50%]"
              />

              <p className="m-[2px] ml-2 font-semibold text-sm">{writer}</p>
            </div>
            <p className="ml-6 text-gray-500 text-xs text-center ">{date} </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
