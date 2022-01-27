import Image from "next/image";
import { useState } from "react";

export default function Rate() {
  const [rating, setRating] = useState(0);
  return (
    <div className="grid w-full grid-cols-5 gap-2 px-12 mt-12">
      {[1, 2, 3, 4, 5].map((value) => (
        <div key={value}>
          <div
            className="relative aspect-square"
            onClick={() => {
              setRating(value);
            }}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/icons/unselected-star.svg"
                alt=""
                objectFit="contain"
                layout="fill"
              />
            </div>
            <div
              className={`${
                value <= rating ? "block" : "hidden"
              } absolute inset-0`}
            >
              <Image
                src="/images/icons/selected-star.svg"
                alt=""
                objectFit="contain"
                layout="fill"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
