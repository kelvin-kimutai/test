import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";
import Link from "next/link";

export default function PaymentOptionTile({ options, title, iconSrc }) {
  return (
    <div className="w-full text-sm rounded-2xl bg-gray-50 sm:text-base">
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
                      key={option.name}
                      className={`${open ? "hidden" : "block"}`}
                    >
                      <div className="relative w-10 h-6">
                        <Image
                          src={option.imageSrc}
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
                      {options.map((option) => (
                        <div key={option.name}>
                          <Link href={`/payments/${option.id}`} passHref>
                            <div className="grid text-xs font-medium transition duration-200 border-2 rounded-md h-14 sm:h-16 hover:border-lipad-green place-items-center">
                              <div className="w-full h-full p-2 ">
                                <div className="relative w-full h-full">
                                  <Image
                                    src={option.imageSrc}
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
