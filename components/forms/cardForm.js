import { Formik } from "formik";
import SolidButton from "../../components/buttons/solidButton";

import valid from "card-validator";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import * as Yup from "yup";
import InputField from "../../components/input/inputField";
import checkoutState from "../../recoil/checkoutAtom";
import payloadState from "../../recoil/payloadAtom";
import CardAuthModal from "../cardAuthModal";
import CardDateInputField from "../input/cardDateInputField";
import CardNumberInputField from "../input/cardNumberInputField";
import uiState from "../../recoil/uiAtom";
import { useRouter } from "next/router";

export default function CardForm() {
  const payload = useRecoilValue(payloadState);
  const [checkout, setCheckout] = useRecoilState(checkoutState);
  const [ui, setUi] = useRecoilState(uiState);
  const router = useRouter();

  const initialValues = {
    fullName: "",
    number: "",
    cvc: "",
    expiry: "",
    amount: payload.merchant_site_data.request_amount,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .test(
        "test-number",
        "Name is invalid",
        (value) => valid.cardholderName(value).isValid
      )
      .required("Required"),
    number: Yup.string()
      .test(
        "test-number",
        "Credit card number is invalid",
        (value) => valid.number(value).isValid
      )
      .required("Required"),
    cvc: Yup.string()
      .test(
        "test-number",
        "CVC is invalid",
        (value) => valid.cvv(value).isValid
      )
      .required("Required"),
    expiry: Yup.string()
      .test("len", "Expiry is invalid", (value) => value?.length === 5)
      .test(
        "test-number",
        "Expiry is invalid",
        (value) => valid.expirationDate(value).isValid
      )
      .required("Required"),
    amount: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    setCheckout((checkout) => ({
      ...checkout,
      request_amount: values.amount,
      card: {
        name_on_card: values.fullName,
        number: values.number,
        expiry_month: values.expiry.split("/")[0],
        expiry_year: values.expiry.split("/")[1],
        cvv: values.cvc,
      },
    }));

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CHECKOUT_PAYMENT_REQUEST_ENDPOINT}/${checkout.checkout_request_id}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...checkout,
          request_amount: values.amount,
          card: {
            name_on_card: values.fullName,
            number: values.number,
            expiry_month: values.expiry.split("/")[0],
            expiry_year: values.expiry.split("/")[1],
            cvv: values.cvc,
          },
        }),
      }
    );
    if (response.ok) {
      const decodedResponse = await response.json();
      const htmlString = decodedResponse.authentication_redirect;
      setUi((ui) => ({
        ...ui,
        htmlString,
      }));
      router.push("/processing-payment");
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="grid grid-cols-2 mt-6 gap-y-4 gap-x-4">
              <div className="col-span-2">
                <InputField
                  name="fullName"
                  type="text"
                  label="Full Name"
                  autoComplete="cc-name"
                />
              </div>
              <div className="col-span-2">
                <CardNumberInputField
                  name="number"
                  type="text"
                  label="Card Number"
                  autoComplete="cc-number"
                />
              </div>
              <div className="col-span-1">
                <CardDateInputField
                  name="expiry"
                  type="text"
                  label="Expiry (MM/YY)"
                  autoComplete="cc-exp"
                />
              </div>
              <div className="col-span-1">
                <InputField
                  name="cvc"
                  type="text"
                  label="CVC"
                  autoComplete="csc"
                />
              </div>
            </div>
            <button type="submit" className="w-full mt-8">
              <SolidButton label="Confirm Details" />
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
