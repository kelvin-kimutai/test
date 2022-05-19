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
          checkout_reference_id: checkout.checkout_reference_id,
        })
      );
      console.log("Connected to socket.");
    });
    // Listen for "checkout-processor" event and logging the payload.
    socket.on("checkout-processor", (data) => {
      processRedirect(data);
    });
    // Cleanup function for disconnecting socket on unmount.
    return () => {
      socket.disconnect();
      console.log("disconnect");
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(
        `${process.env.NEXT_PUBLIC_CHECKOUT_PAYMENT_REQUEST_ENDPOINT}/${checkout.checkout_reference_id}/status`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          processRedirect(data);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  const processRedirect = (data) => {
    if (data.payment_status === 1)
      router.push({
        pathname: "/payment-successful",
      });
    else
      router.push({
        pathname: "/payment-failed",
      });
  };

  return (
    <MainLayout>
      <div className="p-8 mt-8">
        <div className="flex flex-col items-center">
          <div className="relative w-56 h-56 m-6">
            <Image
              src="/images/illustrations/person-reading-newspaper.png"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-medium text-lipad-orange">
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
