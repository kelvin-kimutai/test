import { useField } from "formik";

export default function CheckBox({ label, ...props }) {
  const [field] = useField(props);

  return (
    <label className="inline-flex items-center">
      <input
        {...field}
        {...props}
        type="checkbox"
        className="form-checkbox mr-2 h-4 w-4 rounded border-2 border-lipad-green text-lipad-green focus:ring-transparent "
      />
      <p className="text-sm sm:text-base">{label}</p>
    </label>
  );
}
