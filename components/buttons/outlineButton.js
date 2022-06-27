export default function OutlineButton({ label, ...props }) {
  return (
    <button
      {...props}
      className="w-full py-3 font-medium tracking-wider text-center border-2 rounded-md cursor-pointer border-lipad-blue text-lipad-blue "
    >
      {label}
    </button>
  );
}
