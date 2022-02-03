import Image from "next/image";
import OutlineButton from "../components/buttons/outlineButton";
import MainLayout from "../components/layouts/mainLayout";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "../store/store";

export default function Page() {
  return (
    <>
      <div className="p-8 mt-8 sm:text-lg">
        <div className="flex flex-col items-center">
          <div className="relative w-56 h-56 m-6">
            <Image
              src="/images/illustrations/person-reading-newspaper.png"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl text-lipad-orange">
            Processing payment
          </h2>
          <p className="px-12 text-center">
            Please wait while we confirm your payment status.
          </p>
        </div>
        <div className="mt-12">
          <Link href="/" passHref>
            <OutlineButton label="Cancel" />
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
