import PaymentOptionTile from "../components/tiles/paymentOptionTile";
import { paymentOptions } from "../data/paymentOptions";
import HeaderLayout from "../components/layouts/headerLayout";
import { HiChevronUp } from "react-icons/hi";
import MainLayout from "../components/layouts/mainLayout";
import Image from "next/image";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "../store/store";

export default function Page() {
  const card = (iconSrc, title, paymentIcons) => (
    <div className="flex flex-col w-full p-4 rounded-lg shadow-md cursor-pointer">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <div className="relative w-5 h-5">
            <Image src={iconSrc} alt="" layout="fill" />
          </div>
          <span className="font-bold">{title}</span>
        </div>
        <div className="flex items-center space-x-3">
          {paymentIcons.map((paymentIcon, i) => (
            <div key={i}>
              <div className="relative w-10 h-6">
                <Image
                  src={paymentIcon}
                  alt=""
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            </div>
          ))}
          <HiChevronUp
            className={`w-5 h-5 text-lipad-grey transform rotate-90`}
          />
        </div>
      </div>
    </div>
  );
  return (
    <>
      <h2 className="text-2xl font-bold text-center">
        How would you like to pay?
      </h2>
      <PaymentOptionTile
        options={paymentOptions.filter((option) => option.type == "mobile")}
        title="Mobile Money"
        iconSrc="/images/icons/mobile-money.svg"
      />
      <Link href="/payments/card" passHref>
        {card("/images/icons/card.svg", "Card", [
          "/images/logos/visa.svg",
          "/images/logos/mastercard.svg",
        ])}
      </Link>
      <Link href="/select-bank" passHref>
        {card("/images/icons/bank.svg", "Bank", [
          "/images/logos/ecobank.svg",
          "/images/logos/dtb.svg",
        ])}
      </Link>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <MainLayout>
        <HeaderLayout>{page}</HeaderLayout>
      </MainLayout>
    </Provider>
  );
};
