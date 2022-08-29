import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import SolidButton from "../components/buttons/solidButton";
import Container from "../components/layout/container";
import BottomSection from "../components/sections/bottomSection";
import MiddleSection from "../components/sections/middleSection";
import TopSection from "../components/sections/topSection";
import { constants } from "../constants/constants";
import checkoutState from "../recoil/checkoutState";
import payloadState from "../recoil/payloadState";
import uiState from "../recoil/uiState";
import { getPaymentDetails } from "../services/payments";
import { paymentOptions } from "../util/paymentOptions";

function MobileBankingPage() {
  const toast = useToast();
  const navigate = useNavigate();
  const [payload, setPayload] = useRecoilState(payloadState);
  const [checkout, setCheckout] = useRecoilState(checkoutState);
  const [isLoading, setIsLoading] = useState(true);
  const [ui, setUiState] = useRecoilState(uiState);
  const [paymentDetails, setPaymentDetails] = useState(null);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await getPaymentDetails({
        id: payload.checkout_request_id,
        body: {
          ...checkout,
          country_code: ui.selectedCountry.country_code,
        },
      });
      setPaymentDetails(response);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch payment details.",
        status: "error",
        duration: constants.TOAST_DURATION,
        position: constants.TOAST_POSITION,
        isClosable: true,
      });
      navigate(-1);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <></>;

  return (
    <Container>
      <div>
        <TopSection />
        <MiddleSection />
        <div className="-mt-8 space-y-2 rounded-t-xl bg-white p-4 sm:p-6">
          <div className="relative">
            <Link to="/select-bank">
              <HiOutlineChevronLeft className="absolute inset-y-0 left-0 h-full w-5 cursor-pointer text-black" />
            </Link>
            <h2 className="text-center font-medium">{`Pay with ${checkout.payment_method_name}`}</h2>
          </div>
          <div className="space-y-2 p-2">
            <h2 className="font-medium">Payment Instructions</h2>
            <ol className="ml-4 list-decimal">
              {paymentOptions
                .find((e) => e.name === checkout.payment_method_name)
                .list({
                  accountNumber: paymentDetails.accountNumber,
                  accountName: paymentDetails.accountName,
                  bankName: paymentDetails.bankName,
                })}
            </ol>
            <SolidButton label="Confirm Payment" />
          </div>
        </div>
        <BottomSection />
      </div>
    </Container>
  );
}

export default MobileBankingPage;
