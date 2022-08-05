import { Formik } from "formik";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import * as Yup from "yup";
import SolidButton from "../../components/buttons/solidButton";
import CheckBox from "../../components/input/checkBox";
import InputField from "../../components/input/inputField";
import checkoutState from "../../recoil/checkoutAtom";
import payloadState from "../../recoil/payloadAtom";
import "yup-phone";
import uiState from "../../recoil/uiAtom";
import { parsePhoneNumber } from "libphonenumber-js";
import { countryCodes } from "../../lib/countryCodes";
import MobileInputField from "../input/mobileInputField";

export default function MobileMoneyForm() {
  const router = useRouter();
  const payment_method_name = router.query.payment_method_name;
  const ui = useRecoilValue(uiState);
  const payload = useRecoilValue(payloadState);
  const setCheckout = useSetRecoilState(checkoutState);

  function convertISO3toISO2(ISO2) {
    return countryCodes.find((e) => e.ISO3 === ISO2).ISO2;
  }

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
    amount: Yup.string().required("Required"),
    saveNumber: Yup.bool(),
  });
  const onSubmit = (values) => {
    const msisdn = `${ui.selectedCountry.phone_code}${values.mobileNumber}`;
    setCheckout((prevState) => ({
      ...prevState,
      payer_msisdn: msisdn,
      request_amount: values.amount,
      country_code: ui.selectedCountry.country_code,
      payment_method_name: payment_method_name,
    }));
    if (values.saveNumber)
      localStorage.setItem("mobileNumber", values.mobileNumber);

    router.push("/authorize-payment");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <form
          onSubmit={props.handleSubmit}
          className="flex flex-col gap-2 mt-4 text-sm sm:text-base"
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
          <button type="submit" className="w-full mt-4">
            <SolidButton label="Confirm Details" />
          </button>
        </form>
      )}
    </Formik>
  );
}
