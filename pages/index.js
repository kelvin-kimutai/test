import PaymentOptionTile from "../components/tiles/paymentOptionTile";
import { paymentOptions } from "../data/paymentOptions";
import HeaderLayout from "../components/layouts/headerLayout";
import { HiChevronUp } from "react-icons/hi";
import MainLayout from "../components/layouts/mainLayout";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const card = (iconSrc, title) => (
    <div className="flex flex-col w-full p-4 rounded-lg shadow-md cursor-pointer">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <div className="relative w-5 h-5">
            <Image src={iconSrc} alt="" layout="fill" />
          </div>
          <span className="font-semibold">{title}</span>
        </div>
        <div className="flex items-center space-x-2 text-xs font-semibold">
          <HiChevronUp
            className={`w-5 h-5 text-lipad-grey transform rotate-90`}
          />
        </div>
      </div>
    </div>
  );
  return (
    <>
      <h2 className="text-2xl font-semibold text-center">
        How would you like to pay?
      </h2>
      <PaymentOptionTile
        options={paymentOptions.filter((option) => option.type == "mobile")}
        title="Mobile Money"
        iconSrc="/images/icons/mobile-money.svg"
      />
      <Link href="/payments/card" passHref>
        {card("/images/icons/card.svg", "Card")}
      </Link>
      <Link href="/select-bank" passHref>
        {card("/images/icons/bank.svg", "Bank")}
      </Link>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <HeaderLayout>{page}</HeaderLayout>
    </MainLayout>
  );
};
