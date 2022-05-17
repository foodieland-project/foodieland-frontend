function PanelFooter() {
  return (
    <section className=" bg-lightPurple  w-full py-4 lg:px-6 font-inter absolute bottom-0 mt-10">
      <div className=" ml-auto flex justify-between gap-4 text-xs md:text-sm lg:text-base">
        <div className="text-center">
          <span className="text-gray-700">
            © 2022, Made with ❤️ by <a className="text-mainBlue">Foodieland</a>
          </span>
        </div>
        <div className="text-mainBlue text-center ">
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
