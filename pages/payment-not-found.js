import Image from "next/image";
import OutlineButton from "../components/buttons/outlineButton";
import SolidButton from "../components/buttons/solidButton";
import MainLayout from "../components/layouts/mainLayout";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "../store/store";

export default function Page() {
  return (
    <div className="p-8 mt-8 sm:text-lg">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold sm:text-3xl text-lipad-green">
          Ooops!
        </h2>
        <p>We could not find your payment.</p>
        <div className="relative w-48 h-48 m-6">
          <Image
            src="/images/illustrations/person-questioning.svg"
            alt=""
            objectFit="contain"
            layout="fill"
          />
        </div>
        <p>
          If you entered the authorization code sent to your phone, click ‘
          <strong>Confirm Payment</strong>’ for your payment to be processed
          again. Click ‘<strong>Cancel</strong>’ to go back and view payment
          instructions.
        </p>
      </div>
      <div className="flex w-full mt-12 text-sm sm:text-lg gap-x-2">
        <Link href="/" passHref>
          <OutlineButton label="Cancel" />
        </Link>
        <Link href="/" passHref>
          <SolidButton label="Confirm Payment" />
        </Link>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <MainLayout>{page}</MainLayout>
    </Provider>
  );
};
