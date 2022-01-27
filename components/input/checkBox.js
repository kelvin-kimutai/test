import { Field } from "formik";

export default function CheckBox({ formik, variable, label }) {
  return (
    <label className="inline-flex items-center text-lg font-semibold">
      <input
        id={variable}
        name={variable}
        type="checkbox"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[variable]}
        className="w-4 h-4 mr-2 rounded"
      />
      {label}
    </label>
  );
}
