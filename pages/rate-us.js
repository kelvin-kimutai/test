import Image from "next/image";
import SolidButton from "../components/buttons/solidButton";
import Rate from "../components/rate";
import MainLayout from "../components/layouts/mainLayout";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "../store/store";

export default function Page() {
  return (
    <>
      <div className="p-8 mt-8 sm:text-lg">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-28 h-28">
            <Image
              src="/images/icons/smiley-face.png"
              alt=""
              objectFit="contain"
              layout="fill"
            />
          </div>
          <Rate />
          <h2 className="text-2xl font-bold sm:text-3xl text-lipad-green">
            Rate Us
          </h2>
          <p className="px-4">
            Your opinion matters to us! How was your payment experience?
          </p>
          <div className="w-full">
            <textarea
              placeholder="Leave a comment."
              className="w-full p-2 border rounded bg-lipad-ghost-white"
            ></textarea>
          </div>
        </div>
        <div className="mt-8">
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
  return (
    <Provider store={store}>
      <MainLayout>{page}</MainLayout>
    </Provider>
  );
};
