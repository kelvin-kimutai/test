import { useField } from "formik";

export default function CheckBox({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <label className="inline-flex items-center">
      <input
        {...field}
        {...props}
        type="checkbox"
        className="w-4 h-4 mr-2 border-2 rounded form-checkbox text-lipad-green focus:ring-transparent border-lipad-green "
      />
      <p className="text-sm sm:text-base">{label}</p>
    </label>
  );
}
