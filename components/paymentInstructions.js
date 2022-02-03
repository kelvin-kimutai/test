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
    <div className="p-2 space-y-4 text-sm sm:text-base">
      <h2 className="font-bold">Payment Instructions</h2>
      <ol className="ml-10 list-decimal">
        {instructions.map((instruction, i) => (
          <li key={i} className="">
            {instruction}
          </li>
        ))}
      </ol>
      <CheckBox
        formik={formik}
        variable="saveBank"
        label="Save my information for faster checkout"
      />
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
