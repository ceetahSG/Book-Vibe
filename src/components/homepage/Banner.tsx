import React from "react";
import hero from "@/assetes/hero_img.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto my-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-50 via-white to-purple-50 shadow-xl">
        <div className="hero-content flex-row gap-12 p-14">
          <div className="flex-1">
            <h1 className="mb-10 text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn btn-primary rounded-xl px-8 py-4 text-base font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              View The List
            </button>
          </div>

          <div className="flex-1">
            <Image
              src={hero}
              alt="hero"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
