import SolidButton from "../../components/buttons/solidButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/input/inputField";
import CheckBox from "../../components/input/checkBox";
import { useRouter } from "next/router";

export default function CardForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      number: "",
      cvc: "",
      expiryDate: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      number: Yup.string().required("Required"),
      cvc: Yup.string().required("Required"),
      expiryDate: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      router.push("/authorize-payment");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="">
      <div className="grid grid-cols-4 mt-6 gap-y-6 gap-x-4">
        <div className="col-span-4">
          <InputField
            formik={formik}
            variable="fullName"
            type="text"
            label="Full Name"
            autoComplete="cc-name"
          />
        </div>
        <div className="col-span-4">
          <InputField
            formik={formik}
            variable="number"
            type="text"
            label="Card Number"
            autoComplete="cc-number"
          />
        </div>
        <div className="col-span-2">
          <InputField
            formik={formik}
            variable="expiryDate"
            type="text"
            label="Expiry Date"
            autoComplete="cc-exp"
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
        <SolidButton label="Pay KES 12,496.00" />
      </button>
    </form>
  );
}
