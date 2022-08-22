import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { useRecoilValue } from "recoil";
import HeaderLayout from "../components/layouts/headerLayout";
import MainLayout from "../components/layouts/mainLayout";
import { filteredPaymentMethods } from "../lib/paymentMethods";
import payloadState from "../recoil/payloadAtom";

export default function Page() {
  const router = useRouter();
  const payload = useRecoilValue(payloadState);

  const options = filteredPaymentMethods({
    payload,
    type: "bank",
  });

  const title = (title) => (
    <div className="relative">
      <HiOutlineChevronLeft
        onClick={() => router.back()}
        className="absolute inset-y-0 left-0 w-5 h-full text-black cursor-pointer"
      />
      <h2 className="font-medium text-center">{title}</h2>
    </div>
  );

  return (
    <MainLayout>
      <HeaderLayout>
        {title("Select your Bank")}
        <div className="grid grid-cols-3 gap-4 px-4 mt-8">
          {options.map((option) => (
            <div key={option.payment_method_name}>
              <Link
                href={{
                  pathname: `/payments/${option.payment_method_id}`,
                  query: {
                    payment_method_name: option.payment_method_name,
                    payment_method_type: option.payment_method_type,
                  },
                }}
                passHref
              >
                <div className="grid h-16 px-3 text-xs font-semibold transition duration-200 border-2 rounded-md cursor-pointer hover:border-lipad-green place-items-center">
                  <div className="relative p-5">
                    <Image
                      src={option.payment_method_icon}
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
      </HeaderLayout>
    </MainLayout>
  );
}
