import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const Featured = async () => {
  const featuredProducts: ProductType[] = await getData();

  return (
    <div className="w-screen overflow-x-scroll text-[#463f3a]">
      <div className="w-max flex">
        {featuredProducts.map((item) => (
          <div
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-[#f4f3ee] transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
            key={item.id}
          >
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[30deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            <div className="flex-1 flex flex-col gap-4 items-center text-center justify-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-[#463f3a] text-[#f4f3ee] p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
