import { useRecoilValue } from "recoil";
import OutlineButton from "../components/buttons/outlineButton";
import SolidButton from "../components/buttons/solidButton";
import Container from "../components/layout/container";
import BottomSection from "../components/sections/bottomSection";
import TopSection from "../components/sections/topSection";
import checkoutState from "../recoil/checkoutState";
import payloadState from "../recoil/payloadState";
import { sendPaymentRequest } from "../services/payments";
import image from "../assets/images/illustrations/hand-holding-phone.svg";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { constants } from "../constants/constants";

export default function AuthorizePaymentPage() {
  const navigate = useNavigate();
  const checkout = useRecoilValue(checkoutState);
  const payload = useRecoilValue(payloadState);
  const toast = useToast();

  return (
    <Container>
      <div>
        <TopSection />
        <div className="p-8 text-sm sm:text-base">
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-xl font-medium text-lipad-green">
              Authorise payment
            </h2>
            <p className="text-center">
              Please ensure you have your phone with you and sufficient balance
              in your account. We will send a prompt to{" "}
              <span className="font-medium">{checkout.payer_msisdn}</span>.
              Enter your PIN to authorize your payment of{" "}
              <span className="font-medium">
                {payload.merchant_site_data.currency_code}{" "}
                {checkout.request_amount}
              </span>{" "}
              to account number{" "}
              <span className="font-medium">
                {payload.merchant_site_data.account_number}.
              </span>
            </p>
            <img className="m-4 h-48 w-48" src={image} alt="" />
            <p>
              Click <strong>Send Prompt</strong> when ready.
            </p>
          </div>
          <div className="mt-8 flex w-full gap-x-2">
            <div className="w-full" onClick={() => navigate(-1)}>
              <OutlineButton label="Back" />
            </div>
            <div
              className="w-full"
              onClick={() => {
                sendPaymentRequest({
                  checkout,
                  checkout_request_id: payload.checkout_request_id,
                }).then(() => {
                  toast({
                    title: "Payment request sent",
                    description:
                      "Your payment request has been sent and is now being processed.",
                    status: "success",
                    duration: constants.TOAST_DURATION,
                    position: constants.TOAST_POSITION,
                    isClosable: true,
                  });
                  navigate("/process-payment");
                });
              }}
            >
              <SolidButton label="Pay Now" />
            </div>
          </div>
        </div>
        <BottomSection />
      </div>
    </Container>
  );
}
