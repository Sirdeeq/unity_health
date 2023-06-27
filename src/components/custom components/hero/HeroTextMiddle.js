import React from "react";

export default function HeroTextMiddle({
  heading,
  subheading,
  description,
  buttonText1,
  buttonText2,
  dark,
}) {
  return (
    <div>
      <section
        className={`dark:bg-gray-800 dark:text-gray-100 ${dark && "dark"}`}
      >
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            {heading}
            <span className="dark:text-violet-400">{subheading}</span>
            {description}
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">{description}</p>
          <div className="flex flex-wrap justify-center">
            <button
              className={`px-8 py-3 m-2 text-lg font-semibold rounded ${
                dark ? "dark:bg-violet-400 dark:text-gray-900" : ""
              }`}
            >
              {buttonText1}
            </button>
            <button
              className={`px-8 py-3 m-2 text-lg border rounded ${
                dark ? "dark:text-gray-50 dark:border-gray-700" : ""
              }`}
            >
              {buttonText2}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


// import React from "react";
// import HeroTextMiddle from "./HeroTextMiddle";

// export default function ExampleComponent() {
//   return (
//     <div>
//       <HeroTextMiddle
//         heading="Quisquam necessita vel"
//         subheading="laborum doloribus"
//         description="delectus"
//         buttonText1="Get started"
//         buttonText2="Learn more"
//         dark={true}
//       />
//     </div>
//   );
// }
