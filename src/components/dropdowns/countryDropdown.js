/* eslint-disable react-hooks/exhaustive-deps */
import { useToast } from "@chakra-ui/react";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { HiCheck, HiOutlineChevronDown } from "react-icons/hi";
import { useRecoilState, useSetRecoilState } from "recoil";
import { constants } from "../../constants/constants";
import checkoutState from "../../recoil/checkoutState";
import payloadState from "../../recoil/payloadState";
import uiState from "../../recoil/uiState";
import { getPaymentMethods } from "../../services/payments";
import Loading from "../modals/loading";

export default function CountryDropdown({ countries }) {
  const toast = useToast();
  const [ui, setUiState] = useRecoilState(uiState);
  const setCheckoutState = useSetRecoilState(checkoutState);
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useRecoilState(payloadState);
  const [selected, setSelected] = useState(ui.selectedCountry);

  const fetchPaymentMethods = async (selected) => {
    setIsLoading(true);
    try {
      const paymentMethods = await getPaymentMethods({
        clientCode: payload.merchant_site_data.client_code,
        countryCode: selected.country_code,
        serviceCode: payload.merchant_site_data.service_code,
      });
      setPayload((prevState) => ({
        ...prevState,
        client_data: {
          ...prevState.client_data,
          payment_methods: paymentMethods.payment_methods,
        },
      }));
    } catch (error) {
      setPayload((prevState) => ({
        ...prevState,
        client_data: {
          ...prevState.client_data,
          payment_methods: [],
        },
      }));
      toast({
        title: "Error",
        description: "Failed to fetch payment methods.",
        status: "error",
        duration: constants.TOAST_DURATION,
        position: constants.TOAST_POSITION,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPaymentMethods(selected).then(() => {
      setUiState((prevState) => ({
        ...prevState,
        selectedCountry: selected,
      }));
      setCheckoutState((prevState) => ({
        ...prevState,
        country_code: selected.country_code,
      }));
    });
  }, [selected]);

  return (
    <>
      <Loading isOpen={isLoading} message={"Fething payment options"} />
      <div className="w-32 font-normal">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="relative flex w-full cursor-default items-center rounded-md bg-white py-1 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
              {selected.flag && (
                <div className="h-3 w-4">
                  <img
                    className="object-cover"
                    src={selected.flag}
                    alt={`Flag of ${selected.country_name}`}
                  />
                </div>
              )}
              <span className="ml-2 text-sm">{selected.country_name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <HiOutlineChevronDown className="h-5 w-5 text-black" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {countries.map((country, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `${active ? "bg-blue-100 text-blue-900" : "text-gray-900"}
                        relative cursor-default select-none py-2 pl-10 pr-4`
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
                            <HiCheck className="h-5 w-5" />
                          </span>
                        ) : (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <div className="relative h-3 w-4">
                              <img
                                src={country.flag}
                                alt={`Flag of ${country.country_name}`}
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
    </>
  );
}
