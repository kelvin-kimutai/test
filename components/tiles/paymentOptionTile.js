import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";
import Link from "next/link";

export default function PaymentOptionTile({ options, title, iconSrc }) {
  return (
    <div className="w-full rounded-2xl">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex flex-col w-full p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                  <div className="relative w-5 h-5">
                    <Image src={iconSrc} alt="" layout="fill" />
                  </div>
                  <span className="font-semibold">{title}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold">
                  {options.map((option) => (
                    <div
                      key={option.name}
                      className={`${open ? "hidden" : "block"}`}
                    ></div>
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
                  <Disclosure.Panel className="grid grid-cols-4 mt-4 gap-x-4">
                    {options.map((option) => (
                      <div key={option.name}>
                        <Link href={`/payments/${option.id}`} passHref>
                          <div className="grid h-16 text-xs font-semibold transition duration-200 border-2 rounded-md hover:border-lipad-green place-items-center">
                            <div className="relative w-full h-full">
                              <Image
                                src={option.imageSrc}
                                alt=""
                                objectFit="contain"
                                layout="fill"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </Disclosure.Panel>
                </Transition>
              </div>
            </Disclosure.Button>
          </>
        )}
      </Disclosure>
    </div>
  );
}
