import React from "react";
import hero from "@/assetes/hero_img.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto my-6 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 shadow-xl sm:my-10 sm:rounded-[2rem] sm:px-6 lg:px-10">
        <div className="hero-content mx-auto flex w-full flex-col gap-8 py-8 sm:gap-10 sm:py-12 lg:flex-row lg:gap-12 lg:py-14">
          <div className="flex-1">
            <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:mb-8 sm:text-4xl lg:mb-10 lg:text-5xl">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn btn-primary rounded-xl px-6 py-3 text-base font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-8 sm:py-4">
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
