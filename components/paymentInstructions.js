import Link from "next/link";
import SolidButton from "./buttons/solidButton";

export default function PaymentInstructions({ instructions }) {
  return (
    <div className="p-2 space-y-4">
      <h2 className="font-medium">Payment Instructions</h2>
      <ol className="ml-4 list-decimal">
        {instructions.map((instruction, i) => (
          <li key={i} className="">
            {instruction}
          </li>
        ))}
      </ol>
      <Link href="/" passHref>
        <div>
          <SolidButton label="Confirm Payment" />
        </div>
      </Link>
    </div>
  );
}
