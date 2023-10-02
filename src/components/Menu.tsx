"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      <div className="bg-[#e0afa0] text-[#463f3a] absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl">
        {links.map((item) => (
          <Link href={item.url} key={item.id}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
