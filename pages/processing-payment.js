/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import socketIOClient from "socket.io-client";
import OutlineButton from "../components/buttons/outlineButton";
import MainLayout from "../components/layouts/mainLayout";
import checkoutState from "../recoil/checkoutAtom";

export default function Page() {
  const router = useRouter();
  const checkout = useRecoilValue(checkoutState);

  useEffect(() => {
    const socket = socketIOClient(
      process.env.NEXT_PUBLIC_CHECKOUT_SOCKET_ENDPOINT
    );
    // On establishing scoket connection, a "checkout-processor" event is emitted with
    // a payload of the checkout_preprocessor_id object.
    socket.on("connect", (data) => {
      socket.emit(
        "checkout-processor",
        JSON.stringify({
          checkout_preprocessor_id: checkout.checkout_preprocessor_id,
        })
      );
      console.log("Connected to socket.");
    });
    // Listen for "checkout-processor" event and logging the payload.
    socket.on("checkout-processor", (data) => {
      if (data.payment_status === "Failed") router.push("/payment-failed");
      else router.push("/payment-successful");
    });
    // Cleanup function for disconnecting socket on unmount.
    return () => {
      socket.disconnect();
      console.log("disconnect");
    };
  }, []);

  return (
    <MainLayout>
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
          <h2 className="text-2xl font-medium sm:text-3xl text-lipad-orange">
            Processing payment
          </h2>
          <p className="px-12 text-center">
            Please wait while we confirm your payment status.
          </p>
        </div>
        <div className="mt-12">
          <Link href="/" passHref>
            <div>
              <OutlineButton label="Cancel" />
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
