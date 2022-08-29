import React from "react";
import { useRecoilValue } from "recoil";
import Container from "../components/layout/container";
import BottomSection from "../components/sections/bottomSection";
import MiddleSection from "../components/sections/middleSection";
import TopSection from "../components/sections/topSection";
import BankPaymentOptionsTile from "../components/tiles/bankPaymentOptionsTile";
import CardPaymentOptionsTile from "../components/tiles/cardPaymentOptionsTile";
import MobilePaymentOptionsTile from "../components/tiles/mobilePaymentOptionsTile";
import payloadState from "../recoil/payloadState";
import { filteredPaymentMethods } from "../util/helpers";

function PaymentMethodsPage() {
  const payload = useRecoilValue(payloadState);
  const mobilePaymentOptions = filteredPaymentMethods({
    payload,
    type: "mobile_money",
  });

  const cardPaymentOptions = filteredPaymentMethods({
    payload,
    type: "card",
  });

  const bankPaymentOptions = filteredPaymentMethods({
    payload,
    type: "bank",
  });

  return (
    <Container>
      <div>
        <TopSection />
        <MiddleSection />
        <div className="space-y-2 p-4 sm:p-6 -mt-8 bg-white rounded-t-xl">
          <h2 className="text-lg font-medium text-center">
            How would you like to pay?
          </h2>
          {mobilePaymentOptions.length > 0 && (
            <MobilePaymentOptionsTile options={mobilePaymentOptions} />
          )}
          {cardPaymentOptions.length > 0 && (
            <CardPaymentOptionsTile options={cardPaymentOptions} />
          )}
          {bankPaymentOptions.length > 0 && (
            <BankPaymentOptionsTile options={bankPaymentOptions} />
          )}
        </div>
        <BottomSection />
      </div>
    </Container>
  );
}

export default PaymentMethodsPage;
