/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPaymentDetails } from "../services/paymentDetails";
import SolidButton from "./buttons/solidButton";
import payloadState from "../recoil/payloadAtom";
import { useRecoilState } from "recoil";
import checkoutState from "../recoil/checkoutAtom";
import uiState from "../recoil/uiAtom";

export default function PaymentInstructions({ instructions }) {
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
          payment_method_name: instructions.name,
        },
      });
      setPaymentDetails(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <></>;

  return (
    <div className="p-2 space-y-2">
      <h2 className="font-medium">Payment Instructions</h2>
      <ol className="ml-4 list-decimal">
        {instructions.list({
          accountNumber: paymentDetails.accountNumber,
          accountName: paymentDetails.accountName,
          bankName: paymentDetails.bankName,
        })}
      </ol>
      <Link href="/" passHref>
        <div>
          <SolidButton label="Confirm Payment" />
        </div>
      </Link>
    </div>
  );
}
