import SolidButton from "../../components/buttons/solidButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/input/inputField";
import { useRouter } from "next/router";
import numeral from "numeral";
import { useRecoilState, useRecoilValue } from "recoil";
import payloadState from "../../recoil/payloadAtom";
import checkoutState from "../../recoil/checkoutAtom";

export default function CardForm() {
  const router = useRouter();
  const payload = useRecoilValue(payloadState);
  const [checkout, setCheckout] = useRecoilState(checkoutState);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      number: "",
      cvc: "",
      expiryDate: "",
      amount: payload.request_amount,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      number: Yup.string().required("Required"),
      cvc: Yup.string().required("Required"),
      expiryDate: Yup.string().required("Required"),
      amount: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setCheckout((checkout) => ({
        ...checkout,
        request_amount: values.amount,
        card_details: {
          card_number: values.number,
          card_expiry_date: values.expiryDate,
          card_cvc: values.cvc,
        },
      }));
      console.log("checkout");
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
        <SolidButton
          label={`Pay KES ${numeral(formik.values.amount).format("0,0.00")}`}
        />
      </button>
    </form>
  );
}
