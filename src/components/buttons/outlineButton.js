export default function OutlineButton({ label, ...props }) {
  return (
    <button
      {...props}
      className="w-full rounded-md border-2 border-lipad-blue py-3 text-center font-medium tracking-wider text-lipad-blue "
    >
      {label}
    </button>
  );
}
