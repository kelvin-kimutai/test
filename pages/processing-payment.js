/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import socketIOClient from "socket.io-client";
import Spinner from "../components/animations/spinner";
import OutlineButton from "../components/buttons/outlineButton";
import MainLayout from "../components/layouts/mainLayout";
import checkoutState from "../recoil/checkoutAtom";
import uiState from "../recoil/uiAtom";

export default function Page() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [retries, setRetries] = useState(0);
  const router = useRouter();
  const checkout = useRecoilValue(checkoutState);
  const [ui, setUiState] = useRecoilState(uiState);

  const showToast = () => {
    setUiState((prevState) => ({
      ...prevState,
      toast: true,
    }));
  };

  useEffect(() => {
    if (!buttonDisabled) {
      gsap
        .timeline()
        .to(".confirm-button", {
          scale: 1.1,
          backgroundColor: "#80859c",
          borderColor: "#80859c",
          borderRadius: "0.375rem",
          duration: 0.25,
        })
        .to(".confirm-button", {
          scale: 1.0,
          backgroundColor: "#263470",
          borderColor: "#263470",
          borderRadius: "0.375rem",
          duration: 0.25,
        });
    }
  }, [buttonDisabled]);

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
      showToast();
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
      setButtonDisabled(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const checkPayment = () => {
    setButtonDisabled(true);
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
        processRedirect();
      })
      .finally(() => setButtonDisabled(false));
  };

  const processRedirect = (data) => {
    if (data?.payment_status === 1)
      router.push({
        pathname: "/payment-successful",
      });
    else {
      if (retries > 2) {
        router.push({
          pathname: "/payment-failed",
          query: {
            payment_description: data
              ? data.payment_description
              : "Something went wrong. Please try again.",
          },
        });
        return;
      } else {
        setRetries((prevState) => prevState + 1);
      }
    }
  };

  return (
    <MainLayout>
      <div className="p-8 mt-8">
        <div className="flex flex-col items-center">
          {/* <div className="relative w-56 h-56 m-6">
            <Image
              src="/images/illustrations/person-reading-newspaper.png"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </div> */}
          <div className="h-96 w-96 scale-150">
            <Spinner pause={!buttonDisabled} />
          </div>
          <h2 className="text-xl sm:text-2xl font-medium text-lipad-orange">
            Processing payment
          </h2>
          <span className="px-12 text-center">
            {buttonDisabled ? (
              <p>Please wait while we confirm your payment status.</p>
            ) : (
              <p>
                Please ensure you have paid before clicking{" "}
                <strong>CONFIRM.</strong>
              </p>
            )}
          </span>
        </div>
        <div className="flex w-full mt-12 gap-x-2">
          <div className="w-full" onClick={() => router.back()}>
            <OutlineButton label="Cancel" />
          </div>
          <div className="w-full confirm-button">
            <button
              disabled={buttonDisabled}
              onClick={() => checkPayment()}
              className={`${
                buttonDisabled
                  ? "cursor-not-allowed bg-[#80859c] border-[#80859c]"
                  : "cursor-pointer bg-lipad-blue border-lipad-blue"
              } w-full py-3 font-medium tracking-wider text-center text-white border-2 rounded-md relative`}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
