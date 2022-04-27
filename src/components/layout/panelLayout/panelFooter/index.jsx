function PanelFooter() {
  return (
    <section className=" bg-lightPurple absolute bottom-0 w-full py-4 px-6 font-inter">
      <div className="w-[80%] ml-auto flex justify-between">
        <div>
          <span className="text-gray-700">
            © 2022, Made with ❤️ by{" "}
            <a className="text-darkPurple">ThemeSelection</a>
          </span>
        </div>
        <div className="text-darkPurple">
          <a href="">License</a>
          <a href="" className="ml-4">
            More Themes
          </a>
          <a href="" className="ml-4">
            Documentation
          </a>
          <a href="" className="ml-4">
            Support
          </a>
        </div>
      </div>
    </section>
  );
}

export default PanelFooter;
