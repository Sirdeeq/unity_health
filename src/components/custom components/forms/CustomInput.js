import React from "react";

export default function CustomInput({
  label,
  id,
  type,
  placeholder,
  style,
  offset,
}) {
  const colSpan = `col-span-full sm:col-span-3 lg:col-start-${offset + 1}`;

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
        <div className={colSpan}>
          <label htmlFor={id} className="text-sm">
            {label}
          </label>
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="w-full rounded-md focus:ring focus:ring-indigo-500 dark:border-gray-700 dark:text-gray-900"
            style={style}
          />
        </div>
      </div>
    </div>
  );
}


{/* <CustomInput
label="First name"
id="firstname"
type="text"
placeholder="Enter your first name"
style={{
  backgroundImage: 'url("data:image/png;base64,...")',
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundSize: "16px 18px",
  backgroundPosition: "98% 50%",
  cursor: "auto",
}}
offset={2}
/> */}