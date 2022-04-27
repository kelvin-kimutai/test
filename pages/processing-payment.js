/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import socketIOClient from "socket.io-client";
import OutlineButton from "../components/buttons/outlineButton";
import MainLayout from "../components/layouts/mainLayout";
import checkoutState from "../recoil/checkoutAtom";
const ENDPOINT = "http://192.168.1.61:3000";

export default function Page() {
  const checkout = useRecoilValue(checkoutState);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("connect", (data) => {
      console.log("connect: ", data);
      socket.emit("message", checkout.checkout_preprocessor_id);
    });
    socket.on("message", (data) => {
      console.log("message: ", data);
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
