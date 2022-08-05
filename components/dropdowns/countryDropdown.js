/* eslint-disable react-hooks/exhaustive-deps */
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { HiCheck, HiOutlineChevronDown } from "react-icons/hi";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import checkoutState from "../../recoil/checkoutAtom";
import payloadState from "../../recoil/payloadAtom";
import uiState from "../../recoil/uiAtom";

export default function CountryDropdown({ countries }) {
  const router = useRouter();
  const [ui, setUiState] = useRecoilState(uiState);
  const payload = useRecoilValue(payloadState);

  const [selected, setSelected] = useState(ui.selectedCountry);
  const setCheckout = useSetRecoilState(checkoutState);

  useEffect(() => {
    setUiState((prevState) => ({
      ...prevState,
      selectedCountry: selected,
    }));
  }, [selected]);

  return (
    <div className={`${router.pathname != "/" ? "hidden" : "block"} w-32`}>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative flex items-center w-full py-1 pl-3 pr-10 text-left bg-white rounded-md shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
            <div className="relative w-4 h-3">
              {selected.flag && (
                <Image
                  src={selected.flag}
                  alt={`Flag of ${selected.country_name}`}
                  layout="fill"
                />
              )}
            </div>
            <span className="ml-2 text-sm">{selected.country_name}</span>
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
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                          selected ? "font-medium" : ""
                        } block truncate text-sm`}
                      >
                        {country.country_name}
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
                              src={country.flag}
                              alt={`Flag of ${country.country_name}`}
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
