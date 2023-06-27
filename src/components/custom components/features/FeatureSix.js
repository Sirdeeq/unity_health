import React from "react";

export default function FeatureSix({ features, title, subtitle, darkMode }) {
  const containerClassName = darkMode
    ? "m-4 md:m-8 px-5 pb-3 bg-gray-800 shadow-sm rounded-lg text-gray-100"
    : "m-4 md:m-8 px-5 pb-3  rounded-lg text-gray-800";

  const titleClassName = darkMode
    ? "text-5xl font-bold text-gray-100"
    : "text-5xl font-bold";
  const subtitleClassName = darkMode ? "text-gray-400" : "text-gray-800";

  const featureTitleClassName = darkMode
    ? "my-3 text-3xl font-semibold text-gray-100"
    : "my-3 text-3xl font-semibold";
  const featureDescriptionClassName = darkMode
    ? "text-gray-100"
    : "text-gray-800";

  return (
    <div>
      <section className={containerClassName}>
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className={titleClassName}>{title}</h2>
          <p className={subtitleClassName}>{subtitle}</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div className="flex flex-col items-center p-4" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-violet-400"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className={featureTitleClassName}>{feature.title}</h3>
              <div className="space-y-1 leadi">
                {feature.description.map((item, itemIndex) => (
                  <p key={itemIndex} className={featureDescriptionClassName}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
