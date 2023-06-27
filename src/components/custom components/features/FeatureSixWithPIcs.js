import React from "react";
import PropTypes from "prop-types";

export default function FeatureSixWithPics({ darkMode, title, subtitle, features }) {
  const sectionClassName = darkMode ? "dark:bg-gray-800 dark:text-gray-100" : "";
  const textColor = darkMode ? "dark:text-gray-400" : "";
  const accentColor = darkMode ? "dark:bg-violet-400 dark:text-gray-900" : "";
  const backgroundColor = darkMode ? "dark:bg-gray-500" : "";

  return (
    <div>
      <section className={`container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl ${sectionClassName}`}>
        <div>
          <h2 className={`text-3xl font-bold tracking-tight text-center sm:text-5xl ${textColor}`}>
            {title}
          </h2>
          <p className={`max-w-3xl mx-auto mt-4 text-xl text-center ${textColor}`}>
            {subtitle}
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            {features.map((feature, index) => (
              <div key={index} className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-md ${accentColor}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-lg font-medium leading-6 ${textColor}`}>
                      {feature.title}
                    </h4>
                    <p className={`mt-2 ${textColor}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              src="https://source.unsplash.com/random/360x480"
              alt="Demo"
              className={`mx-auto rounded-lg shadow-lg ${backgroundColor}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

FeatureSixWithPics.defaultProps = {
  darkMode: false,
  title: "Aliquip definiebas ad est",
  subtitle: "Quando cetero his ne, eum admodum sapientem ut.",
  features: [
    {
      title: "Per ei quaeque sensibus",
      description: "Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.",
    },
    {
      title: "Cu imperdiet posidonium sed",
      description: "Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.",
    },
    {
      title: "Nulla omittam sadipscing mel ne",
      description: "At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.",
    },
  ],
};

FeatureSixWithPics.propTypes = {
  darkMode: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};
