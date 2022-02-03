import { Field } from "formik";

export default function CheckBox({ formik, variable, label }) {
  return (
    <label className="inline-flex items-center font-semibold">
      <input
        id={variable}
        name={variable}
        type="checkbox"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[variable]}
        className="w-4 h-4 mr-2 border-2 rounded form-checkbox text-lipad-green focus:ring-transparent border-lipad-green"
      />
      {label}
    </label>
  );
}
