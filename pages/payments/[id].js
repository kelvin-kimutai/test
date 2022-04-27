import { useRouter } from "next/router";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { RecoilRoot } from "recoil";
import CardForm from "../../components/forms/cardForm";
import MobileMoneyForm from "../../components/forms/mobileMoneyForm";
import HeaderLayout from "../../components/layouts/headerLayout";
import MainLayout from "../../components/layouts/mainLayout";

export default function Page() {
  const router = useRouter();
  const payment_method_id = router.query.id;
  const payment_method_name = router.query.payment_method_name;

  const title = (title) => (
    <div className="relative">
      <HiOutlineChevronLeft
        onClick={() => router.back()}
        className="absolute inset-y-0 left-0 w-5 h-full text-black cursor-pointer"
      />
      <h2 className="text-lg font-medium text-center sm:text-2xl">{title}</h2>
    </div>
  );

  return (
    <MainLayout>
      <HeaderLayout>
        {payment_method_id === "m-pesa" && (
          <>
            {title(`Pay with ${payment_method_name}`)}
            <MobileMoneyForm />
          </>
        )}
        {payment_method_id == "visa" ||
          (payment_method_id == "mastercard" && (
            <>
              {title("Enter your Card details")}
              <CardForm />
            </>
          ))}
      </HeaderLayout>
    </MainLayout>
  );

  // else if (payment_method_id == "visa" || payment_method_id == "mastercard")
  //   return (
  //     <>
  //       {title("Enter your Card details")}
  //       <CardForm />
  //     </>
  //   );
  // else
  //   return (
  //     <>
  //       <div>Unsupported payment method</div>
  //       {/* {title(`Pay with ${payment_method_id}`)}
  //       <PaymentInstructions instructions={paymentOption.paymentInstructions} /> */}
  //     </>
  //   );
}
