import { Formik } from "formik";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import * as Yup from "yup";
import SolidButton from "../../components/buttons/solidButton";
import CheckBox from "../../components/input/checkBox";
import InputField from "../../components/input/inputField";
import checkoutState from "../../recoil/checkoutAtom";
import payloadState from "../../recoil/payloadAtom";
import "yup-phone";

export default function MobileMoneyForm() {
  const router = useRouter();
  const payload = useRecoilValue(payloadState);
  const [checkout, setCheckout] = useRecoilState(checkoutState);

  const initialValues = {
    mobileNumber: payload.merchant_site_data.msisdn
      ? payload.merchant_site_data.msisdn
      : localStorage.getItem("mobileNumber") ?? "",
    amount: payload.merchant_site_data.request_amount,
    saveNumber: false,
  };
  const validationSchema = Yup.object({
    mobileNumber: Yup.string()
      .phone(undefined, undefined, "Invalid phone number")
      .required("Required"),
    amount: Yup.string().required("Required"),
    saveNumber: Yup.bool(),
  });
  const onSubmit = (values) => {
    console.log(values.mobileNumber.replace("+", ""));
    setCheckout((checkout) => ({
      ...checkout,
      msisdn: values.mobileNumber.replace("+", ""),
      request_amount: values.amount,
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
          <InputField
            name="mobileNumber"
            type="tel"
            label="Mobile number"
            placeholder="+254 712 345678"
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
