"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navlink from "./Navlink";
import MobileMenu from "./MobileMenu";

const navData = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contacts",
    path: "#contact",
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] opacity-75">
      <div className=" flex justify-between flex-wrap items-center mx-auto p-3">
        <Link
          href="/"
          className="text-2xl md:text-5xl font-semibold text-white"
        >
          Logo
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={()=>setNavbarOpen(true)} className="flex items-center py-2 px-3 border rounded  hover:bg-white hover:text-black text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button onClick={()=>setNavbarOpen(false)} className="flex items-center py-2 px-3 border rounded  hover:bg-white hover:text-black text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="menu text-white hidden md:w-auto md:block mt-0">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8">
            {navData.map((link, index) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MobileMenu links={navData}/> : null}
    </nav>
  );
};

export default Navbar;
