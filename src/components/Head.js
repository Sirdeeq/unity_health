import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Head({ darkMode }) {
  const history = useHistory();
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    history.push(`/${link}`);
  };

  return (
    <div>
      <header
        className={`p-4 ${
          darkMode ? "dark:bg-gray-800 dark:text-gray-100" : "bg-off-white"
        } sticky top-0 z-50`}
        style={{ borderBottom: "1px solid #ccc" }}
      >
        <div className="container flex justify-between h-16 mx-auto">
          <a
            href={"/"}
            rel="noopener noreferrer"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            UH
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a
                href={"/home"}
                rel="noopener noreferrer"
                className={`flex cursor-pointer items-center px-4 -mb-1 border-b-2 ${
                  darkMode ? "dark:border-transparent" : ""
                } ${
                  activeLink === "home"
                    ? "dark:text-violet-400 dark:border-violet-400"
                    : ""
                }`}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
            </li>
            <li className="flex">
              <a
                href={"/about"}
                rel="noopener noreferrer"
                className={`flex cursor-pointer items-center px-4 -mb-1 border-b-2 ${
                  darkMode ? "dark:border-transparent" : ""
                } ${
                  activeLink === "about"
                    ? "dark:text-violet-400 dark:border-violet-400"
                    : ""
                }`}
                onClick={() => handleLinkClick("about")}
              >
                About
              </a>
            </li>
            <li className="flex">
              <a
                href={"/services"}
                rel="noopener noreferrer"
                className={`flex cursor-pointer items-center px-4 -mb-1 border-b-2 ${
                  darkMode ? "dark:border-transparent" : ""
                } ${
                  activeLink === "services"
                    ? "dark:text-violet-400 dark:border-violet-400"
                    : ""
                }`}
                onClick={() => handleLinkClick("services")}
              >
                Services
              </a>
            </li>
            <li className="flex">
              <a
                href={"/contact-us"}
                rel="noopener noreferrer"
                className={`flex cursor-pointer items-center px-4 -mb-1 border-b-2 ${
                  darkMode ? "dark:border-transparent" : ""
                } ${
                  activeLink === "contact-us"
                    ? "dark:text-violet-400 dark:border-violet-400 bg-purple-500 text-white"
                    : ""
                } `}
                onClick={() => handleLinkClick("contact-us")}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <a
              href="/auth"
              className="self-center px-8 py-3 rounded bg-purple-500 text-white hover:bg-purple-600"
              onClick={() => history.push("/auth")}
            >
              Sign in
            </a>
            &nbsp;
            <a
            href="/auth"
              className={`self-center px-8 py-3 font-semibold rounded ${
                darkMode ? "bg-violet-400 text-purple-500" : ""
              }`}
              style={{ border: darkMode ? "" : "1px solid purple" }}
              onClick={() => history.push("/auth")}
            >
              Sign up
            </a>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-6 h-6 ${darkMode ? "dark:text-gray-100" : ""}`}
            >
              {/* SVG Path */}
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
