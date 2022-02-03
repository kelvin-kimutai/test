import { useState } from "react";

export default function InputField({ formik, variable, type, label }) {
  const [hasFocus, setFocus] = useState(false);
  return (
    <div className="relative h-16 rounded-t-md bg-lipad-grey bg-opacity-5">
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
        } absolute -bottom-1 w-full`}
      >
        <input
          id={variable}
          name={variable}
          type={type}
          onFocus={() => setFocus(true)}
          onChange={formik.handleChange}
          onBlur={() => setFocus(false)}
          value={formik.values[variable]}
          placeholder={label}
          className="w-full placeholder-transparent bg-transparent border-transparent peer focus:border-transparent focus:ring-0"
        />
        <label
          htmlFor={variable}
          className={`${
            hasFocus == true
              ? formik.errors[variable] && formik.touched[variable]
                ? ""
                : "text-lipad-green"
              : ""
          } absolute -top-4 left-3.5 text-lipad-grey peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-lipad-green`}
        >
          {label}
        </label>
      </div>
      {formik.touched[variable] && formik.errors[variable] ? (
        <div className="mt-1 text-lipad-red">{formik.errors[variable]}</div>
      ) : null}
    </div>
  );
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
