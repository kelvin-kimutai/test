import Image from "next/image";
import SolidButton from "../components/buttons/solidButton";
import MainLayout from "../components/layouts/mainLayout";
import Link from "next/link";
import { Provider } from "react-redux";

export default function Page() {
  return (
    <>
      <div className="px-4 py-16">
        <div className="flex flex-col items-center">
          <div className="relative w-56 h-56 m-6">
            <Image
              src="/images/illustrations/person-celebrating.png"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </div>
          <h2 className="text-3xl font-bold text-lipad-green">
            Payment Successful
          </h2>
          <p className="mt-4 text-lg font-semibold text-center px-14">
            Your payment of KES 12,496.00 to{" "}
            <span className="font-black">Jumia</span> was successfully
            completed.
          </p>
          <p className="mt-12 text-xl font-extrabold">
            Transaction code: 123AE2
          </p>
        </div>
        <div className="mt-8">
          <Link href="/" passHref>
            <SolidButton label="Okay" />
          </Link>
        </div>
      </div>
      <div></div>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <MainLayout>{page}</MainLayout>
    </Provider>
  );
};
