import Image from "next/image";
import { HiChevronUp } from "react-icons/hi";

export default function CardSelector() {
  return (
    <>
      <div className="flex justify-between w-full p-4 rounded-lg shadow-md">
        <div className="flex flex-col ">
          <div className="flex">
            <div className="space-x-1">
              <span className="font-bold">Mastercard</span>
              <span className="font-bold"> &#8226; &#8226;26</span>
            </div>
          </div>
          <span className="text-xs font-semibold">Expires 11/23</span>
        </div>
        <div className="relative w-10 bg-black aspect-square"></div>
      </div>
      <div className="flex items-start w-full p-4 rounded-lg shadow-md">
        <span className="font-bold">Add a new card</span>
      </div>
    </>
  );
}
