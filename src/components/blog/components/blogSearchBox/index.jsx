function BlogSearchBox({ searchHandler }) {
  return (
    <div className="w-full  sm:w-[90%]  md:w-[80%] xl:w-full lg:w-[70%] mx-auto h-max flex justify-center align-center my-16">
      <div className="xl:w-1/2 w-full h-16 md:h-20 rounded-[20px] 2sm:ml-5  text-center relative border-2">
        <input
          onChange={searchHandler}
          className=" w-full h-full outline-none xl:p-8 2sm:p-3 rounded-[20px]"
          placeholder="Search article,news or recipe..."
        />
        <button className="w-[25%] h-3/4 bg-black text-white rounded-2xl absolute right-2 hover:bg-gray-900 text-center  top-[9px] xl:text-md text-sm font-semibold">
          Search
        </button>
      </div>
    </div>
  );
}

export default BlogSearchBox;
