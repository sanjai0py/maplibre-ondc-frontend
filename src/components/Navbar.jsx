const Navbar = () => {
  return (
    <nav className="sticky flex justify-end p-4 bg-slate-400">
      <ul className="flex gap-7 font-semibold text-lg">
        <li className="bg-red-400  px-4 rounded-lg">
          <a href="#">Home</a>
        </li>
        <li className="px-4">Features</li>
        <li className="px-4">Report</li>
      </ul>
    </nav>
  );
};
export default Navbar;
