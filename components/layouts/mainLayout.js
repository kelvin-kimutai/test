import { CgClose } from "react-icons/cg";
import Image from "next/image";
import CountryDropdown from "../dropdowns/countryDropdown";
import { useSelector } from "react-redux";

export default function MainLayout({ children }) {
  const merchant = useSelector((state) => state.payment.merchant);
  return (
    <main className="grid place-content-center font-body">
      <section className="w-full sm:w-[32rem] relative sm:min-h-screen p-6 sm:py-16 sm:px-8">
        <div className="absolute hidden p-2 rounded-full sm:block top-16 -right-8 bg-lipad-grey">
          <CgClose className="text-3xl text-white" />
        </div>
        <div className="flex flex-col h-full shadow-2xl rounded-xl">
          <section className="flex items-center justify-between h-16 px-6 py-2 border-b border-white bg-lipad-green rounded-t-xl">
            <div className="flex items-center h-full space-x-2 w-full">
              <div className="h-full p-1 bg-white rounded-md aspect-square">
                <div className="relative h-full">
                  <Image src={merchant.logoUrl} alt="" layout="fill" />
                </div>
              </div>
              <span className="text-base font-semibold text-white">
                {merchant.name}
              </span>
            </div>
            <CountryDropdown />
          </section>
          <div className="grow">{children}</div>
          <div className="w-full mt-4 mb-8">
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
