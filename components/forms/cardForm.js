import SolidButton from "../../components/buttons/solidButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/input/inputField";
import { useRouter } from "next/router";
import numeral from "numeral";
import { useRecoilState, useRecoilValue } from "recoil";
import payloadState from "../../recoil/payloadAtom";
import checkoutState from "../../recoil/checkoutAtom";
import valid from "card-validator";

export default function CardForm() {
  const router = useRouter();
  const payload = useRecoilValue(payloadState);
  const [checkout, setCheckout] = useRecoilState(checkoutState);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      number: "",
      cvc: "",
      expiryMonth: "",
      expiryYear: "",
      amount: payload.request_amount,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
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
      expiryMonth: Yup.string()
        .test("len", "Month is invalid", (value) => value?.length === 2)
        .test(
          "test-number",
          "Month is invalid",
          (value) => valid.expirationMonth(value).isValid
        )
        .required("Required"),
      expiryYear: Yup.string()
        .test("len", "Year is invalid", (value) => value?.length === 2)
        .test(
          "test-number",
          "Year is invalid",
          (value) => valid.expirationYear(value).isValid
        )
        .required("Required"),
      amount: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setCheckout((checkout) => ({
        ...checkout,
        request_amount: values.amount,
        card_details: {
          card_name: values.fullName,
          card_number: values.number,
          card_expiry_month: values.expiryMonth,
          card_expiry_year: values.expiryYear,
          card_cvc: values.cvc,
        },
      }));
      router.push("/processing-payment");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="">
      <div className="grid grid-cols-2 mt-6 gap-y-6 gap-x-4">
        <div className="col-span-2">
          <InputField
            formik={formik}
            variable="fullName"
            type="text"
            label="Full Name"
            autoComplete="cc-name"
          />
        </div>
        <div className="col-span-2">
          <InputField
            formik={formik}
            variable="number"
            type="text"
            label="Card Number"
            autoComplete="cc-number"
          />
        </div>
        <div className="col-span-1">
          <InputField
            formik={formik}
            variable="expiryMonth"
            type="text"
            label="Expiry Month"
            autoComplete="cc-exp-month"
          />
        </div>
        <div className="col-span-1">
          <InputField
            formik={formik}
            variable="expiryYear"
            type="text"
            label="Expiry Year"
            autoComplete="cc-exp-year"
          />
        </div>
        <div className="col-span-2">
          <InputField
            formik={formik}
            variable="cvc"
            type="text"
            label="CVC"
            autoComplete="csc"
          />
        </div>
      </div>
      <button type="submit" className="w-full mt-8">
        <SolidButton
          label={`Pay KES ${numeral(formik.values.amount).format("0,0.00")}`}
        />
      </button>
    </form>
  );
}
