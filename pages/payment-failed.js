import Image from "next/image";
import SolidButton from "../components/buttons/solidButton";
import MainLayout from "../components/layouts/mainLayout";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "../store/store";

export default function Page() {
  return (
    <>
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
          <h2 className="text-2xl font-bold sm:text-3xl text-lipad-red">
            Payment Failed
          </h2>
          <p>
            Sorry, something went wrong. We are unable to process your payment
            request at the moment. Please try again later.
          </p>
          <p className="text-xl font-bold">Transaction code: 123AE2</p>
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
