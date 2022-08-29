/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import socketIOClient from "socket.io-client";
import Spinner from "../components/animations/spinner";
import OutlineButton from "../components/buttons/outlineButton";
import Container from "../components/layout/container";
import BottomSection from "../components/sections/bottomSection";
import TopSection from "../components/sections/topSection";
import checkoutState from "../recoil/checkoutState";
import payloadState from "../recoil/payloadState";
import { getCheckoutRequestStatus } from "../services/payments";

export default function ProcessingPaymentPage() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();
  const checkout = useRecoilValue(checkoutState);
  const payload = useRecoilValue(payloadState);

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
    const socket = socketIOClient("https://uat.chekout-api.lipad.io");
    // On establishing scoket connection, a "checkout-processor" event is emitted with
    // a payload of the checkout_preprocessor_id object.
    socket.on("connect", (data) => {
      socket.emit("checkout-processor", {
        checkout_request_id: payload.checkout_request_id,
      });
      //TODO: Show toast
    });
    // Listen for "checkout-processor" event and logging the payload.
    socket.on("checkout-processor", (data) => {
      processRedirect(data);
    });
    // Cleanup function for disconnecting socket on unmount.
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonDisabled(false);
    }, 30000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const checkPayment = async () => {
    setButtonDisabled(true);
    try {
      const response = await getCheckoutRequestStatus(
        checkout.checkout_request_id
      );
      processRedirect(response);
    } catch (error) {
      processRedirect();
    }
    setButtonDisabled(false);
  };

  const processRedirect = (data) => {
    if (data?.statusCode === 1) navigate("/payment-successful");
    else {
      navigate("/payment-failed", {
        state: {
          statusDescription:
            data?.statusDescription ??
            "Something went wrong. Please try again.",
        },
      });
    }
  };

  return (
    <Container>
      <div>
        <TopSection />
        <div className="p-8 text-sm sm:text-base">
          <div className="flex flex-col items-center">
            <div className="my-12 h-48 w-48">
              <Spinner pause={!buttonDisabled} />
            </div>
            <h2 className="text-lg font-medium text-lipad-orange">
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
          <div className="mt-12 flex w-full gap-x-2">
            <div
              className="w-full"
              onClick={() => navigate("/authorize-payment")}
            >
              <OutlineButton label="Cancel" />
            </div>
            <div className="confirm-button w-full">
              <button
                disabled={buttonDisabled}
                onClick={() => checkPayment()}
                className={`${
                  buttonDisabled
                    ? "cursor-not-allowed border-[#80859c] bg-[#80859c]"
                    : "cursor-pointer border-lipad-blue bg-lipad-blue"
                } relative w-full rounded-md border-2 py-3 text-center font-medium tracking-wider text-white`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
        <BottomSection />
      </div>
    </Container>
  );
}
