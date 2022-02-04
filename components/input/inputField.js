export default function InputField({
  formik,
  variable,
  type,
  label,
  autoComplete,
  placeholder,
}) {
  return (
    <div>
      <div className="relative pt-6 bg-lipad-grey bg-opacity-5">
        <input
          id={variable}
          name={variable}
          type={type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[variable]}
          placeholder={label}
          autoComplete={autoComplete}
          className={`${
            formik.touched[variable] && formik.errors[variable]
              ? "border-b-2 border-lipad-red focus:border-b-2 focus:border-lipad-red"
              : ""
          } w-full placeholder-transparent bg-transparent border-0 peer rounded-t-md focus:ring-0 focus:border-b-2 focus:border-lipad-green ring-0`}
        />
        <label
          htmlFor={variable}
          className="absolute text-gray-400 transition-all top-1 left-3 peer-placeholder-shown:top-8 peer-focus:top-1 peer-focus:text-lipad-green "
        >
          {label}
        </label>
      </div>
      {formik.touched[variable] && formik.errors[variable] ? (
        <div className="text-lipad-red mt-1 ml-3.5">
          {formik.errors[variable]}
        </div>
      ) : null}
    </div>
  );
}
