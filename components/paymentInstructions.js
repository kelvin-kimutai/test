import SolidButton from "./buttons/solidButton";
import Link from "next/link";
import CheckBox from "./input/checkBox";
import { useFormik } from "formik";

export default function PaymentInstructions({ instructions }) {
  const formik = useFormik({
    initialValues: {
      saveBank: false,
    },
    onSubmit: (values) => {},
  });
  return (
    <div className="px-2 text-lg">
      <h2 className="font-bold">Payment Instructions</h2>
      <ol className="mt-4 ml-12 list-decimal">
        {instructions.map((instruction, i) => (
          <li key={i} className="">
            {instruction}
          </li>
        ))}
      </ol>
      <div className="mt-4">
        <CheckBox
          formik={formik}
          variable="saveBank"
          label="Save my information for faster checkout"
        />
      </div>
      <div className="mt-8">
        <Link href="/" passHref>
          <div>
            <SolidButton label="Confirm Payment" />
          </div>
        </Link>
      </div>
    </div>
  );
}
