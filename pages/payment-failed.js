import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import SolidButton from "../components/buttons/solidButton";
import MainLayout from "../components/layouts/mainLayout";
import payloadState from "../recoil/payloadAtom";

export default function Page() {
  const payload = useRecoilValue(payloadState);

  const router = useRouter();
  const { redirect_url } = router.query;
  return (
    <MainLayout>
      <div className="p-8 mt-8 sm:text-lg">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-56 h-56">
            <Image
              src="/images/illustrations/payment-failed.png"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </div>
          <h2 className="text-2xl font-medium sm:text-3xl text-lipad-red">
            Payment Failed
          </h2>
          <p>
            Sorry, something went wrong. We are unable to process your payment
            request at the moment. Please try again later.
          </p>
          <p className="text-xl font-medium">
            Transaction code: {payload.merchant_transaction_id}
          </p>
        </div>
        <div className="mt-8">
          <Link href={redirect_url} passHref>
            <div>
              <SolidButton label="Okay" />
            </div>
          </Link>
        </div>
      </div>
      <div></div>
    </MainLayout>
  );
}
