import Link from "next/link";
import React from "react";

export default function OutlineButton({ label, src }) {
  return (
    <Link href={src} passHref>
      <button className="w-full py-3 font-semibold tracking-wider text-center border-2 rounded-md border-lipad-blue ">
        {label}
      </button>
    </Link>
  );
}
