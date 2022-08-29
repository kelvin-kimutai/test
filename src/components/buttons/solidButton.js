export default function SolidButton({ label, ...props }) {
  return (
    <button
      {...props}
      className="w-full rounded-md border-2 border-lipad-blue bg-lipad-blue py-3 text-center font-medium tracking-wider text-white "
    >
      {label}
    </button>
  );
}
