import { HiChevronUp } from "react-icons/hi";
import { Link } from "react-router-dom";
import bankTransfer from "../../assets/images/icons/bank.svg";

export default function BankPaymentOptionsTile({ options }) {
  return (
    <Link to="/select-bank">
      <div className="bg flex w-full flex-col rounded-lg bg-gray-50 p-4 shadow-md">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2">
            <div className="relative h-5 w-5">
              <img src={bankTransfer} alt="" />
            </div>
            <span className="font-medium">Bank</span>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            {options.slice(0, 2).map((option, i) => (
              <img
                key={i}
                className="h-6 w-10"
                src={option.payment_method_icon}
                alt=""
              />
            ))}
            <HiChevronUp
              className={`h-5 w-5 rotate-90 transform text-lipad-grey`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
