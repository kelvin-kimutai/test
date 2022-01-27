import Link from "next/link";
import React from "react";

export default function OutlineButton({ label }) {
  return (
    <button className="w-full py-3 font-semibold tracking-wider text-center border-2 rounded-md cursor-pointer border-lipad-blue ">
      {label}
    </button>
  );
}
