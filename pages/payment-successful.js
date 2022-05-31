import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import SolidButton from "../components/buttons/solidButton";
import MainLayout from "../components/layouts/mainLayout";
import payloadState from "../recoil/payloadAtom";
import { useRouter } from "next/router";
import checkoutState from "../recoil/checkoutAtom";

export default function Page() {
  const payload = useRecoilValue(payloadState);
  const checkout = useRecoilValue(checkoutState);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push({
        pathname: payload?.fail_redirect_url,
      });
    }, 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      <div className="p-8 mt-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-56 h-56">
            <Image
              src="/images/illustrations/person-celebrating.png"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-medium text-lipad-green">
            Payment Successful
          </h2>
          <p>
            Your payment of KES{" "}
            {numeral(checkout.request_amount).format("0,0.00")} to{" "}
            <span className="font-medium">
              {payload?.client_data.client_name}
            </span>{" "}
            was successfully completed.
          </p>
          <p className="font-medium">
            Transaction code: {payload?.merchant_transaction_id}
          </p>
        </div>
        <div className="mt-8">
          <Link href={payload?.success_redirect_url} passHref>
            <div>
              <SolidButton label="Okay" />
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
