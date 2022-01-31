import React from "react";

export default function SolidButton({ label }) {
  return (
    <div className="w-full py-3 font-semibold tracking-wider text-center text-white rounded-md cursor-pointer bg-lipad-blue border-2 border-lipad-blue">
      {label}
    </div>
  );
}
