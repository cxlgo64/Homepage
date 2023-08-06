// ./Navbar.tsx
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-500 text-[#fad4a2]">
      <nav className="flex items-center justify-between flex-wrap bg-[#f13c07] p-6">
        <div className="flex items-center flex-shrink-0  hover:text-white mr-6">
          <div className="" id="menuToggle">
            <input type="checkbox" className="block lg:hidden md:hidden z-11" />
             <Link href="/" className="block mt-4 lg:inline-block lg:mt-0  mr-4">
            <span></span>
            <span></span>
            <span></span>
              <h1 className="lg:block md:block hidden">Xueliang Chen</h1></Link>
          </div>
        </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow main-nav" id="menu">
      <Link href="./sample_site" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
        Website_Examples
      </Link>
      <Link href="./blogs" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
        Blogs
      </Link>
      <Link href="https://github.com/cxlgo64" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white  mr-4">
        Github
      </Link>
      <Link href="./games" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
        Games
      </Link>
      <Link href="#contact_form" className="block mt-4 lg:inline-block hover:text-white lg:mt-0 ">
        Contact me
      </Link>
    </div>
    {/* <div>
      <a href="/chinese" className="inline-block text-sm px-4 py-2 ml-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#fad4a2] hover:bg-white mt-4 lg:mt-0">English</a>
    </div> */}
  </div>
</nav>

    </div>
  );
};
export default Navbar;