import React from "react";

function HeroHeading({ text }) {
  if (!text) {
    return null;
  }

  return (
    <h1 className="text-5xl font-bold leading-none sm:text-6xl">{text}</h1>
  );
}

function HeroDescription({ text }) {
  if (!text) {
    return null;
  }

  return <p className="mt-6 mb-8 text-lg sm:mb-12">{text}</p>;
}

function HeroButton({ text, href, dark }) {
  if (!text || !href) {
    return null;
  }

  const buttonClassName = dark
    ? "px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-white-500"
    : "px-8 py-3 text-lg font-semibold text-violet-500 border rounded dark:border-violet-500";

  return (
    <a rel="noopener noreferrer" href={href} className={buttonClassName}>
      {text}
    </a>
  );
}

function HeroImage({ src, alt, height }) {
  if (!src) {
    return null;
  }

  const imageClassName = `object-contain ${height}`;

  return <img src={src} alt={alt} className={imageClassName} />;
}

export default function Hero({ heading, description, buttons, image, darkMode }) {
  return (
    <div>
      <section className={darkMode ? "dark:bg-gray-800 dark:text-gray-100" : ""}>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <HeroHeading text={heading} />
            <HeroDescription text={description} />
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              {buttons &&
                buttons.map((button, index) => (
                  <HeroButton
                    key={index}
                    text={button.text}
                    href={button.href}
                    dark={button.dark}
                  />
                ))}
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <HeroImage
              src={image.src}
              alt={image.alt}
              height={image.height}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
