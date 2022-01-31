import HeaderLayout from "../components/layouts/headerLayout";
import MainLayout from "../components/layouts/mainLayout";
import Link from "next/link";
import Image from "next/image";
import { paymentOptions } from "../data/paymentOptions";
import { HiOutlineChevronLeft } from "react-icons/hi";

export default function Page() {
  const title = (title) => (
    <div className="relative">
      <Link href="/" passHref>
        <div>
          <HiOutlineChevronLeft className="absolute inset-y-0 left-0 w-5 h-5 text-black cursor-pointer" />
        </div>
      </Link>
      <h2 className="text-2xl font-bold text-center">{title}</h2>
    </div>
  );

  return (
    <div>
      {title("Select your Bank")}
      <div className="grid grid-cols-3 gap-4 px-4 mt-8">
        {paymentOptions
          .filter((option) => option.type == "bank")
          .map((option) => (
            <div key={option.name}>
              <Link href={`/payments/${option.id}`} passHref>
                <div className="grid h-16 px-4 text-xs font-semibold transition duration-200 border-2 rounded-md cursor-pointer hover:border-lipad-green place-items-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={option.imageSrc}
                      alt=""
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <HeaderLayout>{page}</HeaderLayout>
    </MainLayout>
  );
};
