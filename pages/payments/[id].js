import { useRouter } from "next/router";
import { HiOutlineChevronLeft } from "react-icons/hi";
import CardForm from "../../components/forms/cardForm";
import MobileMoneyForm from "../../components/forms/mobileMoneyForm";
import HeaderLayout from "../../components/layouts/headerLayout";
import MainLayout from "../../components/layouts/mainLayout";
import PaymentInstructions from "../../components/paymentInstructions";
import { paymentOptions } from "../../data/paymentOptions";

export default function Page() {
  const router = useRouter();
  const payment_method_name = router.query.payment_method_name;
  const payment_method_type = router.query.payment_method_type;

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
        {payment_method_type == "mobile_money" && (
          <>
            {title(`Pay with ${payment_method_name}`)}
            <MobileMoneyForm />
          </>
        )}
        {payment_method_type == "card" && (
          <>
            {title("Enter Card details")}
            <CardForm />
          </>
        )}
        {payment_method_type == "bank" && (
          <>
            {title(`Pay with ${payment_method_name}`)}
            <PaymentInstructions
              instructions={
                paymentOptions.find((e) => e.name === payment_method_name)
                  .paymentInstructions
              }
            />
          </>
        )}
      </HeaderLayout>
    </MainLayout>
  );
}
