const PanelNav = (props) => {
  return (
    <main className="w-5/6 mx-5 my-3 h-5/6 bg-white shadow-xl ">
      <nav>
        <ul className="flex justify-start py-3 border-b-2 border-slate-300">
          <li className="mx-8 cursor-pointer">ACCOUNT</li>
          <li className="mx-8 cursor-pointer">SECURITY</li>
          <li className="mx-8 cursor-pointer">INFO</li>
        </ul>
      </nav>
      <section></section>
    </main>
  );
};

export default PanelNav;
