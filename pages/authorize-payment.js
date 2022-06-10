import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import OutlineButton from "../components/buttons/outlineButton";
import SolidButton from "../components/buttons/solidButton";
import MainLayout from "../components/layouts/mainLayout";
import checkoutState from "../recoil/checkoutAtom";
import payloadState from "../recoil/payloadAtom";

export default function AuthorizePayment() {
  const router = useRouter();
  const checkout = useRecoilValue(checkoutState);
  const payload = useRecoilValue(payloadState);

  const sendPaymentRequest = () => {
    fetch(
      `${process.env.NEXT_PUBLIC_CHECKOUT_PAYMENT_REQUEST_ENDPOINT}/${checkout.checkout_reference_id}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...checkout }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <MainLayout>
      <div className="p-8 mt-8">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-medium text-lipad-green">
            Authorise payment
          </h2>
          <p className="text-center">
            Please ensure you have your phone with you and sufficient balance in
            your account. We&apos;ll send a prompt to{" "}
            <span className="font-medium">{checkout.msisdn}</span>. Enter your
            PIN to authorize your payment of{" "}
            <span className="font-medium">
              {payload.merchant_site_data.currency_code}{" "}
              {checkout.request_amount}
            </span>{" "}
            to account number{" "}
            <span className="font-medium">
              {payload.merchant_site_data.account_number}.
            </span>
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
            onClick={() => {
              sendPaymentRequest();
              router.push("/processing-payment");
            }}
          >
            <SolidButton label="Send Prompt" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
