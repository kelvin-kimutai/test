import { useFormik } from "formik";
import { useRouter } from "next/router";
import numeral from "numeral";
import { useRecoilState, useRecoilValue } from "recoil";
import * as Yup from "yup";
import SolidButton from "../../components/buttons/solidButton";
import CheckBox from "../../components/input/checkBox";
import InputField from "../../components/input/inputField";
import checkoutState from "../../recoil/checkoutAtom";
import payloadState from "../../recoil/payloadAtom";

export default function MobileMoneyForm() {
  const router = useRouter();
  const payload = useRecoilValue(payloadState);
  const [checkout, setCheckout] = useRecoilState(checkoutState);

  const mobileRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      mobileNumber: payload.msisdn,
      amount: payload.request_amount,
      saveNumber: false,
    },
    validationSchema: Yup.object({
      mobileNumber: Yup.string()
        .matches(mobileRegExp, "Mobile number is not valid")
        .required("Required"),
      amount: Yup.string().required("Required"),
      saveNumber: Yup.bool(),
    }),
    onSubmit: (values) => {
      setCheckout((checkout) => ({
        ...checkout,
        msisdn: values.mobileNumber,
        request_amount: values.amount,
      }));
      router.push("/authorize-payment");
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 mt-4">
        <InputField
          formik={formik}
          variable="mobileNumber"
          type="tel"
          label="Mobile number"
        />
        <InputField
          formik={formik}
          variable="amount"
          type="number"
          label="Amount"
        />
        <CheckBox
          formik={formik}
          variable="saveNumber"
          label="Save my information for faster checkout"
        />
        <button type="submit" className="w-full">
          <SolidButton
            label={`Pay KES ${numeral(formik.values.amount).format("0,0.00")}`}
          />
        </button>
      </form>
    </>
  );
}
