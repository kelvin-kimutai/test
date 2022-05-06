/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import socketIOClient from "socket.io-client";
import OutlineButton from "../components/buttons/outlineButton";
import MainLayout from "../components/layouts/mainLayout";
import checkoutState from "../recoil/checkoutAtom";

export default function Page() {
  const checkout = useRecoilValue(checkoutState);

  useEffect(() => {
    const socket = socketIOClient(`${process.env.CHECKOUT_SOCKET_ENDPOINT}`);
    socket.on("connect", (data) => {
      socket.emit("checkout", JSON.stringify({ ...checkout }));
    });
    socket.on("checkout-processor", (data) => {
      console.log("checkout-processor-message: ", data);
    });
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
