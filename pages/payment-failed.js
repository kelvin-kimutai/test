import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import SolidButton from "../components/buttons/solidButton";
import MainLayout from "../components/layouts/mainLayout";
import payloadState from "../recoil/payloadAtom";
import { useRouter } from "next/router";
import OutlineButton from "../components/buttons/outlineButton";

export default function Page() {
  const payload = useRecoilValue(payloadState);
  const router = useRouter();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push({
  //       pathname: payload?.fail_redirect_url,
  //     });
  //   }, 30000);
  //   return () => clearTimeout(timer);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <MainLayout>
      <div className="p-8 mt-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-56 h-56">
            <Image
              src="/images/illustrations/payment-failed.png"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-medium text-lipad-red">
            Payment Failed
          </h2>
          <p>{router.query.payment_description}</p>
          <p className="font-medium">
            Transaction code: {payload?.merchant_transaction_id}
          </p>
        </div>
        <div className="flex w-full mt-12 gap-x-2">
          <Link href={payload?.fail_redirect_url} passHref>
            <div className="w-full">
              <OutlineButton label="Go Back" />
            </div>
          </Link>
          <Link href="/" passHref>
            <button className=" w-full py-3 font-medium tracking-wider text-center text-white border-2 rounded-md relative bg-lipad-blue border-lipad-blue">
              Retry
            </button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
