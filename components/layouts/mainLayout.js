import _ from "lodash";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
import { useRecoilValue } from "recoil";
import payloadState from "../../recoil/payloadAtom";
import CountryDropdown from "../dropdowns/countryDropdown";

export default function MainLayout({ children }) {
  const payload = useRecoilValue(payloadState);

  return (
    <main className="grid place-content-center font-body">
      <section className="w-full sm:w-[32rem] relative min-h-screen p-4 sm:py-16 sm:px-8">
        <div className="absolute hidden p-2 rounded-full sm:block top-16 -right-8 bg-lipad-grey">
          <CgClose
            onClick={() => close()}
            className="text-3xl text-white cursor-pointer"
          />
        </div>
        <div className="flex flex-col h-full shadow-2xl rounded-xl">
          <section className="flex items-center h-12 px-6 py-2 align-middle border-b border-white rounded-t-lg sm:h-16 bg-lipad-green sm:rounded-t-xl">
            <div className="flex items-center w-full h-full space-x-2">
              <div className="h-full p-1 bg-white rounded-md aspect-square">
                <div className="relative h-full">
                  <Image
                    src={payload.client_data.client_image_url}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <span className="text-sm font-medium text-white sm:text-base">
                {payload.client_data.client_name}
              </span>
            </div>
            <div className="mb-1">
              <CountryDropdown
                countries={payload.client_data.client_countries}
              />
            </div>
          </section>
          <div className="grow">{children}</div>
          <div className="w-full pb-6">
            <div className="relative h-10">
              <Image
                src={"/images/logos/lipad-logo-blue-powered-by.svg"}
                alt=""
                layout="fill"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
