import React from "react";

const Navbar = () => {
  return (
    <header className=" fixed   top-0 h-[100px] z-50 ">
      <div className="wrapper flex h-full  items-center gap-24">
        <img
          src="/Logo.svg"
          width={100}
          height={70}
          className=" h-[70px] "
        ></img>

        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li>Home</li>
            <li>Movies</li>
            <li>Series</li>
            <li>Marvel</li>
            <li>Star Wars</li>
            <li>My list</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
