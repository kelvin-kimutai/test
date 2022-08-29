import { useField } from "formik";
import { BsExclamationCircleFill } from "react-icons/bs";

export default function InputField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          {...field}
          {...props}
          className={`${
            meta.touched && meta.error
              ? `border-red-300 text-red-900  focus:ring-red-500 focus:border-red-500`
              : `border-gray-300 focus:ring-lipad-green focus:border-lipad-green`
          } block w-full pr-10 focus:outline-none rounded-md placeholder-gray-300 text-sm sm:text-base`}
        />
        {meta.touched && meta.error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <BsExclamationCircleFill
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      <p className="mt-1 text-sm text-red-600">
        {meta.touched && meta.error && <span>{meta.error}</span>}
      </p>
    </div>
  );
}
