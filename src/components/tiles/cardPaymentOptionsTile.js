import { HiChevronUp } from "react-icons/hi";

const paymentIcons = ["/images/logos/visa.svg", "/images/logos/mastercard.svg"];

export default function CardPaymentOptionsTile({ options }) {
  return (
    <div className="flex flex-col w-full p-4 rounded-lg shadow-md cursor-pointer bg bg-gray-50">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <div className="relative w-5 h-5">
            <img src="/images/icons/card.svg" alt="" layout="fill" />
          </div>
          <span className="font-medium text-sm sm:text-base">Card</span>
        </div>
        <div className="flex items-center space-x-3">
          {paymentIcons.map((paymentIcon, i) => (
            <div key={i} className="relative w-10 h-6">
              <img src={paymentIcon} alt="" />
            </div>
          ))}
          <HiChevronUp
            className={`w-5 h-5 text-lipad-grey transform rotate-90`}
          />
        </div>
      </div>
    </div>
  );
}
