import PaymentOptionTile from "../components/tiles/paymentOptionTile";
import { paymentOptions } from "../data/paymentOptions";
import HeaderLayout from "../components/layouts/headerLayout";
import MainLayout from "../components/layouts/mainLayout";

export default function Page() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-center">
        How would you like to pay?
      </h2>
      <PaymentOptionTile
        options={paymentOptions.filter((option) => option.type == "mobile")}
        title="Mobile Money"
        iconSrc="/images/icons/mobile-money.svg"
      />
      <PaymentOptionTile
        options={paymentOptions.filter((option) => option.type == "card")}
        title="Card"
        iconSrc="/images/icons/card.svg"
      />
      <PaymentOptionTile
        options={paymentOptions.filter((option) => option.type == "bank")}
        title="Bank"
        iconSrc="/images/icons/bank.svg"
      />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <HeaderLayout>{page}</HeaderLayout>
    </MainLayout>
  );
};
