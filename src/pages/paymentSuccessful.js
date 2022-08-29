import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Container from "../components/layout/container";
import BottomSection from "../components/sections/bottomSection";
import TopSection from "../components/sections/topSection";
import checkoutState from "../recoil/checkoutState";
import payloadState from "../recoil/payloadState";
import image from "../assets/images/illustrations/person-celebrating.png";
import numeral from "numeral";
import SolidButton from "../components/buttons/solidButton";

export default function PaymentSuccessfulPage() {
  const payload = useRecoilValue(payloadState);
  const checkout = useRecoilValue(checkoutState);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.open(payload.merchant_site_data.success_redirect_url, "_self");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate, payload.merchant_site_data.success_redirect_url]);

  return (
    <Container>
      <div>
        <TopSection />
        <div className="p-8 text-sm sm:text-base">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="relative h-56 w-56">
              <img src={image} alt="" />
            </div>
            <h2 className="text-xl font-medium text-lipad-green">
              Payment Successful
            </h2>
            <p>
              Your payment of {payload.merchant_site_data.currency_code}{" "}
              {numeral(checkout.request_amount).format("0,0.00")} to{" "}
              <span className="font-medium">
                {payload.client_data.client_name}
              </span>{" "}
              was successfully completed.
            </p>
            <p className="font-medium">
              Transaction code:{" "}
              {payload.merchant_site_data.merchant_transaction_id}
            </p>
          </div>
          <div className="mt-8">
            <SolidButton
              onClick={() =>
                window.open(
                  payload.merchant_site_data.success_redirect_url,
                  "_self"
                )
              }
              label="Okay"
            />
          </div>
        </div>
        <BottomSection />
      </div>
    </Container>
  );
}
