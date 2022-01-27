import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import CountryDropdown from "../dropdowns/countryDropdown";
import { merchants } from "../../data/merchants";

export default function MainLayout({ children }) {
  return (
    <main className="grid place-content-center font-body">
      <section className="w-full sm:w-[32rem] relative min-h-screen py-16 px-8">
        <div className="absolute hidden p-2 rounded-full sm:block top-16 -right-10 bg-lipad-grey">
          <AiOutlineClose className="text-white" />
        </div>
        <div className="flex flex-col h-full rounded-lg shadow-2xl">
          <section className="flex items-center justify-between h-16 px-6 py-2 border-b border-white bg-lipad-green rounded-t-md">
            <div className="flex items-center h-full space-x-2">
              <div className="h-full p-1 bg-white rounded-md aspect-square">
                <div className="relative h-full">
                  <Image src={merchants[0].imageSrc} alt="" layout="fill" />
                </div>
              </div>
              <span className="text-base font-semibold text-white">
                {merchants[0].name}
              </span>
            </div>
            <CountryDropdown />
          </section>
          <div className="grow">{children}</div>
          <div className="w-full mt-4 mb-8">
            <div className="relative h-8">
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
