import Image from "next/image";
import SolidButton from "../components/buttons/solidButton";
import Rate from "../components/rate";
import MainLayout from "../components/layouts/mainLayout";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="px-4 py-16">
        <div className="flex flex-col items-center">
          <div className="relative w-28 h-28">
            <Image
              src="/images/icons/smiley-face.png"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </div>
          <Rate />
          <h2 className="mt-4 text-3xl font-bold text-lipad-green">Rate Us</h2>
          <p className="px-4 mt-4 text-lg font-semibold text-center">
            Your opinion matters to us! How was your payment experience?
          </p>
          <div className="w-full mt-12">
            <textarea
              placeholder="Leave a comment."
              className="w-full p-2 text-lg border rounded bg-lipad-ghost-white"
            ></textarea>
          </div>
        </div>
        <div className="mt-12">
          <Link href="/" passHref>
            <SolidButton label="Submit" />
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
