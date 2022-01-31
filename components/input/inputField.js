import { useState } from "react";

export default function InputField({ formik, variable, type, label }) {
  const [hasFocus, setFocus] = useState(false);
  return (
    <>
      <div
        className={`${
          formik.errors[variable] && formik.touched[variable]
            ? "border-lipad-red border-b-2"
            : ""
        } ${
          hasFocus == true
            ? formik.errors[variable] && formik.touched[variable]
              ? "border-lipad-red border-b-2"
              : "border-lipad-green border-b-2"
            : ""
        } flex flex-col px-4 rounded-t-md bg-lipad-grey bg-opacity-5 gap-1`}
      >
        <label
          htmlFor={variable}
          className={`${
            hasFocus == true
              ? formik.errors[variable] && formik.touched[variable]
                ? ""
                : "text-lipad-green"
              : ""
          } `}
        >
          Enter {label}
        </label>
        <input
          id={variable}
          name={variable}
          type={type}
          onFocus={() => setFocus(true)}
          onChange={formik.handleChange}
          onBlur={() => setFocus(false)}
          value={formik.values[variable]}
          className="bg-transparent border-transparent focus:border-transparent focus:ring-0"
        />
      </div>
      {formik.touched[variable] && formik.errors[variable] ? (
        <div className="mt-1 text-lipad-red">{formik.errors[variable]}</div>
      ) : null}
    </>
  );
}
