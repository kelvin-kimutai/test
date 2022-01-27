import SolidButton from "./buttons/solidButton";
import Link from "next/link";

export default function PaymentInstructions({ instructions }) {
  return (
    <div className="px-2 text-lg">
      <h2 className="font-bold">Payment Instructions</h2>
      <ol className="mt-4 ml-5 list-decimal">
        {instructions.map((instruction, i) => (
          <li key={i} className="">
            {instruction}
          </li>
        ))}
      </ol>
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
