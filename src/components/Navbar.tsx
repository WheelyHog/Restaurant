import Link from "next/link";
import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-12 text-[#463f3a]-500 p-4 flex justify-between items-center border-b-2 border-b-[#e0afa0] uppercase">
      <div className="text-xl">
        <Link href={"/"}>Massimo</Link>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
