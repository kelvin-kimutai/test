import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";
import Link from "next/link";
import { useRecoilState } from "recoil";
import checkoutState from "../../recoil/checkoutAtom";

export default function MobilePaymentOptionsTile({ options, title, iconSrc }) {
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
    <div className="w-full rounded-2xl bg-gray-50">
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex flex-col w-full p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                  <div className="relative w-5 h-5">
                    <Image src={iconSrc} alt="" layout="fill" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    {title}
                  </span>
                </div>
                <div className="items-center gap-4 hidden sm:flex">
                  {options.map((option, i) => (
                    <div key={i} className={`${open ? "hidden" : "block"}`}>
                      <div className="relative w-10 h-6">
                        <Image
                          src={option.payment_method.payment_method_icon}
                          alt=""
                          objectFit="contain"
                          layout="fill"
                        />
                      </div>
                    </div>
                  ))}

                  <HiChevronUp
                    className={`${
                      open ? "transform rotate-0" : "transform rotate-90"
                    } w-5 h-5 text-lipad-grey`}
                  />
                </div>
              </div>
              <div className="w-full">
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  {open && (
                    <Disclosure.Panel
                      static
                      className="grid grid-cols-4 mt-4 gap-x-2"
                    >
                      {options?.map((option, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setPaymentMethod(option);
                          }}
                        >
                          <Link
                            href={{
                              pathname: `/payments/${option.payment_method.payment_method_name
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`,
                              query: {
                                payment_method_id:
                                  option.payment_method.payment_method_id,
                                payment_method_name:
                                  option.payment_method.payment_method_name,
                                payment_method_type:
                                  option.payment_method.payment_method_type
                                    .payment_method_type_name,
                              },
                            }}
                            passHref
                          >
                            <div className="grid transition duration-200 border-2 rounded-md h-14 sm:h-16 hover:border-lipad-green place-items-center">
                              <div className="w-full h-full p-2 ">
                                <div className="relative w-full h-full">
                                  <Image
                                    src={
                                      option.payment_method.payment_method_icon
                                    }
                                    alt=""
                                    objectFit="contain"
                                    layout="fill"
                                  />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  )}
                </Transition>
              </div>
            </Disclosure.Button>
          </>
        )}
      </Disclosure>
    </div>
  );
}
