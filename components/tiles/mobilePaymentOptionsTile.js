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
        client_payment_methods: [
          {
            client_payment_method_id: option.client_payment_method_id,
            payment_method: {
              payment_method_id: option.payment_method.payment_method_id,
              payment_method_name: option.payment_method.payment_method_name,
            },
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
            <Disclosure.Button className="flex flex-col w-full p-2 rounded-lg shadow-md sm:p-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-3">
                  <div className="relative w-5 h-5">
                    <Image src={iconSrc} alt="" layout="fill" />
                  </div>
                  <span className="font-medium">{title}</span>
                </div>
                <div className="flex items-center space-x-3">
                  {options.map((option) => (
                    <div
                      key={option.client_payment_method_id}
                      className={`${open ? "hidden" : "block"}`}
                    >
                      <div className="relative w-10 h-6">
                        <Image
                          src={option.payment_method.payment_method_image_url}
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
                      className="grid grid-cols-4 mt-4 gap-x-4"
                    >
                      {options?.map((option) => (
                        <div
                          key={option.client_payment_method_id}
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
                              },
                            }}
                            passHref
                          >
                            <div className="grid text-xs font-medium transition duration-200 border-2 rounded-md h-14 sm:h-16 hover:border-lipad-green place-items-center">
                              <div className="w-full h-full p-2 ">
                                <div className="relative w-full h-full">
                                  <Image
                                    src={
                                      option.payment_method
                                        .payment_method_image_url
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
