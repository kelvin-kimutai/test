import SolidButton from "../../components/buttons/solidButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/input/inputField";
import CheckBox from "../../components/input/checkBox";

export default function MobileMoneyForm({ title }) {
  const mobileRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      mobileNumber: "",
      amount: "",
      saveNumber: false,
    },
    validationSchema: Yup.object({
      mobileNumber: Yup.string()
        .matches(mobileRegExp, "Mobile number is not valid")
        .required("Please enter a mobile number"),
      amount: Yup.string().required("Please enter an amount"),
      saveNumber: Yup.bool(),
    }),
    onSubmit: (values) => {},
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 mt-4">
        <InputField
          formik={formik}
          variable="mobileNumber"
          type="tel"
          label="mobile number"
        />
        <InputField
          formik={formik}
          variable="amount"
          type="text"
          label="amount"
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
