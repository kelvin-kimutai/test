import { useRecoilValue } from "recoil";
import OutlineButton from "../components/buttons/outlineButton";
import payloadState from "../recoil/payloadState";
import image from "../assets/images/illustrations/payment-failed.png";
import TopSection from "../components/sections/topSection";
import BottomSection from "../components/sections/bottomSection";
import Container from "../components/layout/container";

export default function SessionExpiredPage() {
  const payload = useRecoilValue(payloadState);

  return (
    <Container>
      <div>
        <TopSection />
        <div className="p-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="relative h-56 w-56">
              <img src={image} alt="" />
            </div>
            <h2 className="text-xl font-medium text-lipad-red">
              Session Expired
            </h2>
            <p>Your checkout request has expired.</p>
          </div>
          <div className="mx-auto mt-12 w-full ">
            <div className="w-full">
              <OutlineButton
                onClick={() =>
                  window.open(
                    payload != null
                      ? payload.merchant_site_data.fail_redirect_url
                      : "",
                    "_self"
                  )
                }
                label="Go Back"
              />
            </div>
          </div>
        </div>
        <BottomSection />
      </div>
    </Container>
  );
}
