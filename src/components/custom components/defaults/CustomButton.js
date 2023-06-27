import React from "react";

export default function CustomButton({
  className = "",
  darkMode = false,
  backgroundColor = "bg-gray-200",
  textColor = "text-gray-800",
  buttonText = "Click me",
  buttonIcon = null,
  onClick = null,
  onSubmit = null,
  type = "button",
}) {
  const buttonClasses = `
    px-4 py-2 
    rounded-md 
    ${
      darkMode
        ? `dark:${backgroundColor} ${textColor}`
        : `border-gray-700 ${textColor}`
    }
    hover:bg-gray-400 
    focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
    ${className}
  `;

  return (
    <button
      className={buttonClasses.trim()}
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
      {buttonText}
    </button>
  );
}
