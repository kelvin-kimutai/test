import Image from "next/image";
import SolidButton from "../components/buttons/solidButton";
import MainLayout from "../components/layouts/mainLayout";
import Link from "next/link";

export default function Page() {
  return (
    <MainLayout>
      <div className="p-8 mt-8 sm:text-lg">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-56 h-56">
            <Image
              src="/images/illustrations/person-celebrating.png"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </div>
          <h2 className="text-2xl font-medium sm:text-3xl text-lipad-green">
            Payment Successful
          </h2>
          <p>
            Your payment of KES 12,496.00 to{" "}
            <span className="font-bold">Jumia</span> was successfully completed.
          </p>
          <p className="text-xl font-medium">Transaction code: 123AE2</p>
        </div>
        <div className="mt-8">
          <Link href="/" passHref>
            <SolidButton label="Okay" />
          </Link>
        </div>
      </div>
      <div></div>
    </MainLayout>
  );
}
