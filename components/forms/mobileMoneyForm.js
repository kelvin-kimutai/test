import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import SolidButton from "../../components/buttons/solidButton";
import CheckBox from "../../components/input/checkBox";
import InputField from "../../components/input/inputField";
import { updateMobileNumber } from "../../store/paymentSlice";

export default function MobileMoneyForm() {
  const dispatch = useDispatch();
  const mobileRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const router = useRouter();
  const amount = useSelector((state) => state.payment.amount);
  const mobileNumber = useSelector((state) => state.payment.mobileNumber);

  const formik = useFormik({
    initialValues: {
      mobileNumber,
      amount,
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
      dispatch(updateMobileNumber({ mobileNumber: values.mobileNumber }));
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
          <SolidButton label="Pay KES 12,496.00" />
        </button>
      </form>
    </>
  );
}
