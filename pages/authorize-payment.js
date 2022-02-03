import Image from "next/image";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import OutlineButton from "../components/buttons/outlineButton";
import SolidButton from "../components/buttons/solidButton";
import MainLayout from "../components/layouts/mainLayout";
import store from "../store/store";

export default function AuthorizePayment() {
  const router = useRouter();

  return (
    <>
      <div className="p-8 mt-8 sm:text-lg">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-bold sm:text-3xl text-lipad-green">
            Authorise payment
          </h2>
          <p className="text-center">
            Please ensure you have your phone with you and sufficient balance in
            your account. We&apos;ll send a prompt to +254xxxxxx444. Enter your
            PIN to authorize payment.
          </p>
          <div className="relative w-56 h-56 m-6">
            <Image
              src="/images/illustrations/hand-holding-phone.svg"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </div>
          <p>
            Click <strong>Send Prompt</strong> when ready.{" "}
          </p>
        </div>
        <div className="flex w-full mt-12 gap-x-2">
          <div className="w-full" onClick={() => router.back()}>
            <OutlineButton label="Back" />
          </div>
          <div
            className="w-full"
            onClick={() => router.push("/processing-payment")}
          >
            <SolidButton label="Send Prompt" />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

AuthorizePayment.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <MainLayout>{page}</MainLayout>
    </Provider>
  );
};
