import React from "react";

export default function HeroImgRight({
  heading,
  description,
  buttonText1,
  buttonText2,
  imageSrc,
  imageAlt,
  dark,
}) {
  return (
    <div>
      <section className={dark ? "dark:bg-gray-800 dark:text-gray-100" : ""}>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              {heading}
              <span className={dark ? "dark:text-violet-400" : ""}>
                senectus
              </span>
              erat pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">{description}</p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className={`px-8 py-3 text-lg font-semibold rounded ${
                  dark ? "dark:bg-violet-400 dark:text-gray-900" : ""
                }`}
              >
                {buttonText1}
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className={`px-8 py-3 text-lg font-semibold border rounded ${
                  dark ? "dark:border-gray-100" : ""
                }`}
              >
                {buttonText2}
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
}


{/* <HeroImgRight
heading="Ac mattis senectus erat pharetra"
description="Dictum aliquam porta in condimentum ac integer turpis pulvinar, est scelerisque ligula sem"
buttonText1="Suspendisse"
buttonText2="Malesuada"
imageSrc="assets/svg/Business_SVG.svg"
imageAlt="Business Image"
dark={true}
/> */}