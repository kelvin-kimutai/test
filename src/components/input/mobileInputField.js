import { useField } from "formik";
import { BsExclamationCircleFill } from "react-icons/bs";

export default function MobileInputField({ label, flag, phoneCode, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative mt-1 flex shadow-sm">
        <span className="inline-flex items-center gap-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 ">
          <div className="relative h-4 w-5">
            <img src={flag} alt="flag" />
          </div>
          <p>{phoneCode}</p>
        </span>
        <input
          {...field}
          {...props}
          className={`${
            meta.touched && meta.error
              ? `border-red-300 text-red-900  focus:border-red-500 focus:ring-red-500`
              : `border-gray-300 focus:border-lipad-green focus:ring-lipad-green`
          } block h-full w-full rounded-r-md pr-10  placeholder-gray-300 focus:outline-none`}
        />
        {meta.touched && meta.error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
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
