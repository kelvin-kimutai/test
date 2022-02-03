import SolidButton from "../../components/buttons/solidButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/input/inputField";
import CheckBox from "../../components/input/checkBox";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function MobileMoneyForm() {
  const mobileRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const router = useRouter();
  const amount = useSelector((state) => state.payment.amount);

  const formik = useFormik({
    initialValues: {
      mobileNumber: "",
      amount: amount,
      saveNumber: false,
    },
    validationSchema: Yup.object({
      mobileNumber: Yup.string()
        .matches(mobileRegExp, "Mobile number is not valid")
        .required("Please enter a mobile number"),
      amount: Yup.string().required("Please enter an amount"),
      saveNumber: Yup.bool(),
    }),
    onSubmit: (values) => {
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
          label="Enter mobile number"
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
          <SolidButton label="Pay KES 12,496.00" />
        </button>
      </form>
    </>
  );
}
