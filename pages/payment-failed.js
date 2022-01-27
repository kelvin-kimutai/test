import Image from "next/image";
import SolidButton from "../components/buttons/solidButton";
import MainLayout from "../components/layouts/mainLayout";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="px-4 py-16">
        <div className="flex flex-col items-center">
          <div className="relative w-56 h-56 m-6">
            <Image
              src="/images/illustrations/payment-failed.png"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </div>
          <h2 className="text-3xl font-bold text-lipad-red">Payment Failed</h2>
          <p className="mt-4 text-lg font-semibold text-center px-14">
            Sorry, something went wrong. We are unable to process your payment
            request at the moment. Please try again later.
          </p>
          <p className="mt-12 text-xl font-extrabold">
            Transaction code: 123AE2
          </p>
        </div>
        <div className="mt-8">
          <Link href="/" passHref>
            <SolidButton src="/" label="Okay" />
          </Link>
        </div>
      </div>
      <div></div>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
