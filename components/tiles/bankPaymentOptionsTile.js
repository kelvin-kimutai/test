import Image from "next/image";
import Link from "next/link";
import { HiChevronUp } from "react-icons/hi";

export default function BankPaymentOptionsTile({ options }) {
  return (
    <Link
      href={{
        pathname: `/select-bank`,
      }}
      passHref
    >
      <div className="flex flex-col w-full p-4 rounded-lg shadow-md cursor-pointer bg bg-gray-50">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <div className="relative w-5 h-5">
              <Image src="/images/icons/bank.svg" alt="" layout="fill" />
            </div>
            <span className="font-medium text-sm sm:text-base">Bank</span>
          </div>
          <div className="items-center gap-4 hidden sm:flex">
            {options.slice(0, 2).map((option, i) => (
              <div key={i} className="relative w-10 h-6">
                <Image
                  src={option.payment_method_icon}
                  alt=""
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            ))}
            <HiChevronUp
              className={`w-5 h-5 text-lipad-grey transform rotate-90`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
