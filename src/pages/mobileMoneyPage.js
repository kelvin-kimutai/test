import { Formik } from "formik";
import { parsePhoneNumber } from "libphonenumber-js";
import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import * as Yup from "yup";
import SolidButton from "../components/buttons/solidButton";
import CheckBox from "../components/input/checkBox";
import InputField from "../components/input/inputField";
import MobileInputField from "../components/input/mobileInputField";
import Container from "../components/layout/container";
import BottomSection from "../components/sections/bottomSection";
import MiddleSection from "../components/sections/middleSection";
import TopSection from "../components/sections/topSection";
import { countryCodes } from "../data/countryCodes";
import checkoutState from "../recoil/checkoutState";
import payloadState from "../recoil/payloadState";
import uiState from "../recoil/uiState";
import { convertISO3toISO2 } from "../util/helpers";

function MobileMoneyPage() {
  const navigate = useNavigate();
  const ui = useRecoilValue(uiState);
  const payload = useRecoilValue(payloadState);
  const [checkout, setCheckout] = useRecoilState(checkoutState);

  let initialPhoneNumber = (
    payload.merchant_site_data.msisdn
      ? payload.merchant_site_data.msisdn
      : localStorage.getItem("mobileNumber") ?? ""
  ).replace("+", "");

  if (!initialPhoneNumber.startsWith(ui.selectedCountry.phone_code))
    initialPhoneNumber = "";
  else
    initialPhoneNumber = initialPhoneNumber.replace(
      ui.selectedCountry.phone_code,
      ""
    );

  const initialValues = {
    mobileNumber: initialPhoneNumber,
    amount: payload.merchant_site_data.request_amount,
    saveNumber: false,
  };

  const validationSchema = Yup.object({
    mobileNumber: Yup.string()
      .test("phoneNumberValidation", "Invalid phone number", (value) => {
        try {
          return parsePhoneNumber(
            value,
            convertISO3toISO2(ui.selectedCountry.country_code)
          ).isValid();
        } catch (error) {
          return false;
        }
      })
      .required("Required"),
    amount: Yup.number().required("Required"),
    saveNumber: Yup.bool(),
  });

  const onSubmit = (values) => {
    const msisdn = `${ui.selectedCountry.phone_code}${values.mobileNumber}`;
    setCheckout((prevState) => ({
      ...prevState,
      payer_msisdn: msisdn,
      request_amount: values.amount,
    }));
    if (values.saveNumber)
      localStorage.setItem("mobileNumber", values.mobileNumber);

    navigate("/authorize-payment");
  };

  return (
    <Container>
      <div>
        <TopSection />
        <MiddleSection />
        <div className="-mt-8 space-y-2 rounded-t-xl bg-white p-4 sm:p-6">
          <div className="relative">
            <Link to="/">
              <HiOutlineChevronLeft className="absolute inset-y-0 left-0 h-full w-5 cursor-pointer text-black" />
            </Link>
            <h2 className="text-center font-medium">{`Pay with ${checkout.payment_method_name}`}</h2>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <form
                onSubmit={props.handleSubmit}
                className="mt-4 flex flex-col gap-2 text-sm sm:text-base"
              >
                <MobileInputField
                  name="mobileNumber"
                  type="tel"
                  label="Mobile number"
                  placeholder="712 345678"
                  flag={ui.selectedCountry.flag}
                  phoneCode={ui.selectedCountry.phone_code}
                />
                <InputField
                  name="amount"
                  type="number"
                  label="Amount"
                  placeholder="100"
                />
                <CheckBox
                  name="saveNumber"
                  label="Save my information for faster checkout"
                />
                <div className="mt-4 w-full">
                  <SolidButton type="submit" label="Confirm Details" />
                </div>
              </form>
            )}
          </Formik>
        </div>
        <BottomSection />
      </div>
    </Container>
  );
}

export default MobileMoneyPage;
