import React from "react";
import SignUpIn from "./SignUpIn";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

const NavBarScr = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-blue-900 via-black to-blue-900">
      <nav className="flex flex-col h-full justify-between bg-black bg-opacity-50 py-8 px-6 fixed">
        <div className="text-white text-3xl font-bold mb-12">BuRRack</div>
        <ul className="flex flex-col absolute space-y-6 mt-[100px]">
          <li>
            <Link to="/" className="text-white text-xl hover:text-blue-400">
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/liveroute"
              className="text-white text-xl hover:text-blue-400"
            >
              Routes
            </Link>
          </li>

          <li>
            <Link
              to="/schedule"
              className="text-white text-xl hover:text-blue-400"
            >
              Timings
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-xl hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="absolute top-4 right-8">
        <SignUpIn />
      </div>
    </section>
  );
};

export default NavBarScr;
