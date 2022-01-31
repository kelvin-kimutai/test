import SolidButton from "../../components/buttons/solidButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/input/inputField";
import CheckBox from "../../components/input/checkBox";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function CardForm() {
  const router = useRouter();
  const amount = useSelector((state) => state.payment.amount);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      number: "",
      cvc: "",
      expiryDate: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Please enter your full name"),
      number: Yup.string().required("Please enter a card number"),
      cvc: Yup.string().required("Please enter a CVC number"),
      expiryDate: Yup.string().required("Please enter an expiry date"),
    }),
    onSubmit: (values) => {
      router.push("/authorize-payment");
    },
  });

  return null;

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 mt-4">
      <InputField
        formik={formik}
        variable="fullName"
        type="text"
        label="Card Holder’s Fullname"
      />
      <InputField formik={formik} variable="number" type="text" label="" />
      <div className="flex gap-6 w-full">
        <div className="basis-24">
          s
          <InputField
            formik={formik}
            variable="expiryDate"
            type="date"
            label="Expiry Date"
          />
        </div>
        <div className="w-24">
          <InputField
            formik={formik}
            variable="cvc"
            type="number"
            label="CVC"
          />
        </div>
      </div>
      <button type="submit" className="w-full">
        <SolidButton label="Pay KES 12,496.00" />
      </button>
    </form>
  );
}
