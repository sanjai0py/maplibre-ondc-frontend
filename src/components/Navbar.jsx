import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="sticky flex justify-end p-4 bg-slate-400">
      <ul className="flex gap-7 font-semibold text-lg">
        <li className="bg-red-400  px-4 rounded-lg">
          <a href="#">Home</a>
          {/* <Link
            to="section1"
            smooth={true}
            style={{ cursor: "pointer" }}
            duration={500}
          >
            Home
          </Link> */}
        </li>
        <li className="px-4">
          <Link
            to="section1"
            smooth={true}
            style={{ cursor: "pointer" }}
            duration={500}
          >
            Features
          </Link>
        </li>
        {/* <li className="px-4">
          <Link
            to="section1"
            smooth={true}
            style={{ cursor: "pointer" }}
            duration={500}
          >
            Report
          </Link>
        </li> */}
        <a
          href="src/static/reports.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Report
        </a>
        <li className="px-4">
          <Link
            to="section2"
            smooth={true}
            style={{ cursor: "pointer" }}
            duration={500}
          >
            Pricing
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
