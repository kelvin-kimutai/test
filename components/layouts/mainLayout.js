import _ from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { useRecoilValue } from "recoil";
import { useCountdown } from "../../hooks/useCountdown";
import payloadState from "../../recoil/payloadAtom";
import CountryDropdown from "../dropdowns/countryDropdown";
import Toast from "../notifications/toast";

export default function MainLayout({ children }) {
  const router = useRouter();
  const payload = useRecoilValue(payloadState);

  const [countDown] = useCountdown();

  useEffect(() => {
    if (countDown < 0) router.push("/session-expired");
  }, [countDown, router]);

  if (_.isEmpty(payload)) return <div></div>;

  return (
    <main className="grid place-content-center min-h-screen p-8 sm:p-16 relative scrollbar-hide">
      <div className="absolute top-4 right-0 overflow-hidden z-50">
        <Toast />
      </div>
      <section className="w-full sm:w-[25rem] space-y-1">
        <div className="cursor-pointer">
          <Link href={payload.merchant_site_data.fail_redirect_url} passHref>
            <div className="flex items-center">
              <HiChevronLeft className="h-6 w-auto" />
              <div className="font-medium">
                Back to {payload.client_data.client_name}
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col shadow-2xl rounded-xl">
          <section className="flex items-center px-6 py-2 align-middle border-b border-white rounded-t-lg bg-lipad-green sm:rounded-t-xl">
            <div className="flex items-center w-full h-full space-x-2">
              <div className="h-8 p-0.5 bg-white rounded-md aspect-square">
                <div className="relative h-full">
                  <Image
                    src={payload.client_data.client_image_url}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <span className="font-medium text-white text-sm sm:text-base">
                {payload.client_data.client_name}
              </span>
            </div>
            <div className="mb-1">
              <CountryDropdown
                countries={payload.client_data.client_countries}
              />
            </div>
          </section>
          <div>{children}</div>
          <div className="relative h-9 m-3">
            <Image
              src={"/images/logos/lipad-logo-blue-powered-by.svg"}
              alt=""
              priority="true"
              layout="fill"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
