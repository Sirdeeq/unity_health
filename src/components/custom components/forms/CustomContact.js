import React from "react";

export default function CustomContact({
  title,
  description,
  nameLabel,
  emailLabel,
  messageLabel,
  buttonText,
  darkMode,
}) {
  const containerClassName = darkMode
    ? "grid max-w-screen-xl grid-cols-1 mt-1 mb-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100"
    : "grid max-w-screen-xl grid-cols-1 mt-1 mb-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32";

  const titleClassName = darkMode
    ? "text-4xl font-bold leading-tight lg:text-5xl"
    : "text-4xl font-bold leading-tight";
  const descriptionClassName = darkMode ? "dark:text-gray-400" : "";

  const inputClassName = darkMode
    ? "w-full p-3 rounded dark:bg-gray-800 border-2 border-violet-400"
    : "w-full p-3 border-violet-400 rounded";

  const buttonClassName = darkMode
    ? "w-full p-3 text-sm font-bold tracking-widest uppercase rounded  dark:bg-violet-400 dark:text-gray-900"
    : "w-full p-3 text-sm font-bold tracking-widest uppercase bg-violet-400 rounded";

  return (
    <div>
      <div className={containerClassName}>
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className={titleClassName}>{title}</h2>
            <div className={descriptionClassName}>{description}</div>
          </div>
          <img
            src="https://source.unsplash.com/random/360x480"
            alt=""
            className="p-6 h-52 md:h-64"
          />
        </div>
        <form noValidate className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              {nameLabel}
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              {emailLabel}
            </label>
            <input id="email" type="email" className={inputClassName} />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              {messageLabel}
            </label>
            <textarea
              id="message"
              rows="3"
              className={inputClassName}
            ></textarea>
          </div>
          <button type="submit" className={buttonClassName}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
