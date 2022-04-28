function PanelFooter() {
  return (
    <section className=" bg-lightPurple  w-full py-4 lg:px-6 font-inter">
      <div className="mr-auto lg:mr-0 w-[97%] sm:w-[80%] md:w-[95%] lg:w-[80%] ml-auto flex justify-between gap-4 text-xs md:text-base">
        <div className="text-center">
          <span className="text-gray-700">
            © 2022, Made with ❤️ by{" "}
            <a className="text-darkPurple">ThemeSelection</a>
          </span>
        </div>
        <div className="text-darkPurple text-center ">
          <a href="">License</a>
          <a href="" className="ml-2 md:ml-4">
            More Themes
          </a>
          <a href="" className="ml-2 md:ml-4">
            Documentation
          </a>
          <a href="" className="ml-2 md:ml-4">
            Support
          </a>
        </div>
      </div>
    </section>
  );
}

export default PanelFooter;
