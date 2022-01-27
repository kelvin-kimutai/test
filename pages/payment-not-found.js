import Image from "next/image";
import OutlineButton from "../components/buttons/outlineButton";
import SolidButton from "../components/buttons/solidButton";
import MainLayout from "../components/layouts/mainLayout";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="px-4 py-16">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-lipad-green">Ooops!</h2>
          <p className="text-lg">We could not find your payment.</p>
          <div className="relative w-48 h-48 m-6">
            <Image
              src="/images/illustrations/person-questioning.svg"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </div>
          <p className="text-lg text-center">
            If you entered the authorization code sent to your phone, click ‘
            <strong>Confirm Payment</strong>’ for your payment to be processed
            again. Click ‘<strong>Cancel</strong>’ to go back and view payment
            instructions.
          </p>
        </div>
        <div className="flex w-full mt-12 gap-x-2">
          <Link href="/" passHref>
            <OutlineButton label="Cancel" src="" />
          </Link>
          <Link href="/" passHref>
            <SolidButton label="Confirm Payment" src="" />
          </Link>
        </div>
      </div>
      <div></div>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
