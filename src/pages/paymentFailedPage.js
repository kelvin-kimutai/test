import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Container from "../components/layout/container";
import BottomSection from "../components/sections/bottomSection";
import TopSection from "../components/sections/topSection";
import payloadState from "../recoil/payloadState";
import { createCheckoutRequest } from "../services/payments";
import image from "../assets/images/illustrations/payment-failed.png";
import OutlineButton from "../components/buttons/outlineButton";
import SolidButton from "../components/buttons/solidButton";

export default function PaymentFailedPage() {
  const payload = useRecoilValue(payloadState);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { statusDescription } = state;

  const retryPayment = async () => {
    try {
      const response = await createCheckoutRequest({
        body: payload.merchant_site_data,
      });
      navigate(`/?params=${response.payload}`, "_self");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div>
        <TopSection />
        <div className="p-8 text-sm sm:text-base">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="relative h-56 w-56">
              <img src={image} alt="" />
            </div>
            <h2 className="text-xl font-medium text-lipad-red">
              Payment Failed
            </h2>
            <p>{statusDescription}</p>
            <p className="font-medium">
              Transaction code:{" "}
              {payload.merchant_site_data.merchant_transaction_id}
            </p>
          </div>
          <div className="mt-12 flex w-full gap-x-2">
            <Link to="/authorize-payment" className="w-full">
              <OutlineButton label="Go Back" />
            </Link>
            <SolidButton
              onClick={() => {
                retryPayment();
              }}
              label="Retry"
            />
          </div>
        </div>
        <BottomSection />
      </div>
    </Container>
  );
}
