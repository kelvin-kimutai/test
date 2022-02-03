import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheck, HiOutlineChevronDown } from "react-icons/hi";
import Image from "next/image";

const countries = [
  { name: "Kenya", imageSrc: "/images/flags/kenya-flag-icon-32.png" },
  { name: "Uganda", imageSrc: "/images/flags/uganda-flag-icon-32.png" },
  { name: "Tanzania", imageSrc: "/images/flags/tanzania-flag-icon-32.png" },
];

export default function CountryDropdown() {
  const [selected, setSelected] = useState(countries[0]);

  return (
    <div className="w-32 text-xs sm:text-sm">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative flex items-center w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
            <div className="relative w-4 h-3">
              <Image
                src={selected.imageSrc}
                alt={`Flag of ${selected.name}`}
                layout="fill"
              />
            </div>
            <span className="ml-2">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <HiOutlineChevronDown className="w-5 h-5 text-black" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-xs bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
              {countries.map((country, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) =>
                    `${active ? "text-blue-900 bg-blue-100" : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={country}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {country.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-blue-600" : "text-blue-600"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <HiCheck className="w-5 h-5" />
                        </span>
                      ) : (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <div className="relative w-4 h-3">
                            <Image
                              src={country.imageSrc}
                              alt={`Flag of ${country.name}`}
                              layout="fill"
                            />
                          </div>
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
