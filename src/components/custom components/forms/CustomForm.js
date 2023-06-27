import React from "react";
import CustomInput from "./CustomInput";

export default function CustomForm({ formTitle, inputProps }) {
  return (
    <div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          noValidate
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">{formTitle}</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              {inputProps.map((input, index) => (
                <div key={index} className="col-span-full sm:col-span-3">
                  <CustomInput {...input} />
                </div>
              ))}
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}

{/* <CustomForm
  formTitle="Personal Information"
  inputProps={[
    {
      label: "First name",
      id: "firstname",
      type: "text",
      placeholder: "First name",
      style: {
        backgroundImage: 'url("data:image/png;base64,...")',
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "16px 18px",
        backgroundPosition: "98% 50%",
        cursor: "auto",
      },
    },
    {
      label: "Last name",
      id: "lastname",
      type: "text",
      placeholder: "Last name",
    },
  ]}
/> */}


