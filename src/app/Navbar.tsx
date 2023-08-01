// ./Navbar.tsx
import Link from "next/link";
import React from "react";
import About from "./page"
const Navbar = () => {
  return (
    <div className="navbar bg-base-500 text-[#fad4a2]">
      <nav className="flex items-center justify-between flex-wrap bg-[#f13c07] p-6">
  <div className="flex items-center flex-shrink-0  hover:text-white mr-6">
    <Link href="/" className="block mt-4 lg:inline-block lg:mt-0  mr-4">
    <span>Xueliang Chen</span>
      </Link>
  </div>
  {/* <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div> */}
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <Link href="./sample_site" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
        Website_Examples
      </Link>
      <Link href="./blogs" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
        Blogs
      </Link>
      <Link href="./development_kit" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white  mr-4">
        DevelopKit
      </Link>
      <Link href="./games" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
        Games
      </Link>
      <Link href="#contact_form" className="block mt-4 lg:inline-block hover:text-white lg:mt-0 ">
        Contact me
      </Link>
    </div>
    <div>
      <a href="/chinese" className="inline-block text-sm px-4 py-2 ml-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#fad4a2] hover:bg-white mt-4 lg:mt-0">English</a>
    </div>
  </div>
</nav>
    </div>
  );
};
export default Navbar;