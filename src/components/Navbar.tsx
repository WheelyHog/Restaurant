import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 text-[#463f3a]-500 p-4 flex justify-between items-center border-b-2 border-b-[#e0afa0] uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href={"/"}>Homepage</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className="text-xl md:font-bold text-[#e0afa0] flex-1 md:text-center">
        <Link href={"/"}>Massimo</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href={"/login"}>Loginpage</Link>
        ) : (
          <Link href={"/orders"}>Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
