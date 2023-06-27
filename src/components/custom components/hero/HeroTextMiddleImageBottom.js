import React from "react";

export default function HeroTextMiddleImageBottom({
  heading,
  description,
  buttonText1,
  buttonText2,
  imageUrl,
  imageAlt,
  dark,
}) {
  return (
    <div>
      <section className={dark ? "dark:bg-violet-400" : ""}>
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
            {heading}
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
            {description}
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className={`px-8 py-3 m-2 text-lg font-semibold rounded ${
                dark ? "dark:bg-gray-800 dark:text-gray-50" : ""
              }`}
            >
              {buttonText1}
            </button>
            <button
              type="button"
              className={`px-8 py-3 m-2 text-lg border rounded ${
                dark ? "dark:border-gray-700 dark:text-gray-900" : ""
              }`}
            >
              {buttonText2}
            </button>
          </div>
        </div>
      </section>
      <img
        src={imageUrl}
        alt={imageAlt}
        className={`w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 ${
          dark ? "dark:bg-gray-500" : ""
        }`}
      />
    </div>
  );
}


{/* <HeroTextMiddleImageBottom
heading="Provident blanditiis cum exercitationem"
description="Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!"
buttonText1="Get started"
buttonText2="Learn more"
imageUrl="https://source.unsplash.com/random/480x320"
imageAlt="Random Image"
dark={true}
/> */}