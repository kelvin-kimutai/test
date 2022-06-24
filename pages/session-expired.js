import React from "react";
import OutlineButton from "../components/buttons/outlineButton";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import MainLayout from "../components/layouts/mainLayout";
import { useRecoilValue } from "recoil";
import payloadState from "../recoil/payloadAtom";

function Page() {
  const payload = useRecoilValue(payloadState);
  const router = useRouter();

  return (
    <MainLayout>
      <div className="p-8 text-sm sm:text-base">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-56 h-56">
            <Image
              src="/images/illustrations/payment-failed.png"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </div>
          <h2 className="text-xl font-medium text-lipad-red">
            Session Expired
          </h2>
          <p>Your checkout request has expired.</p>
        </div>
        <div className="flex w-full mt-12 gap-x-2">
          <Link href={payload?.merchant_site_data.fail_redirect_url} passHref>
            <div className="w-full">
              <OutlineButton label="Go Back" />
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

export default Page;
