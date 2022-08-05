import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";
import Link from "next/link";
import { useRecoilState } from "recoil";
import checkoutState from "../../recoil/checkoutAtom";

export default function BankPaymentOptionsTile({ options }) {
  const [checkout, setCheckout] = useRecoilState(checkoutState);

  const setPaymentMethod = (option) => {
    setCheckout((checkout) => ({
      ...checkout,
      client_data: {
        ...checkout.client_data,
        client_services: [
          {
            client_service_id:
              checkout.client_data.client_services[0].client_service_id,
            client_service_payment_methods: [
              {
                client_service_payment_method_id:
                  option.payment_method.payment_method_id,
              },
            ],
          },
        ],
      },
    }));
  };

  return (
    <Link
      href={{
        pathname: `/`,
      }}
      passHref
    >
      <div className="flex flex-col w-full p-4 rounded-lg shadow-md cursor-pointer bg bg-gray-50">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <div className="relative w-5 h-5">
              <Image src="/images/icons/card.svg" alt="" layout="fill" />
            </div>
            <span className="font-medium text-sm sm:text-base">Bank</span>
          </div>
          <div className="flex items-center space-x-3">
            {options.slice(0, 2).map((option, i) => (
              <div key={i} className="relative w-10 h-6">
                <Image
                  src={option.payment_method.payment_method_icon}
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
