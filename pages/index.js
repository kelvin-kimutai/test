import HeaderLayout from "../components/layouts/headerLayout";
import MainLayout from "../components/layouts/mainLayout";
import ErrorScreen from "../components/screen/errorScreen";
import MobilePaymentOptionsTile from "../components/tiles/mobilePaymentOptionsTile";
import useSetGlobalState from "../hooks/useSetGlobalState";
import { filteredPaymentMethods } from "../lib/paymentMethods";
import CardPaymentOptionsTile from "../components/tiles/cardPaymentOptionsTile";
import BankPaymentOptionsTile from "../components/tiles/bankPaymentOptionsTile";

export default function Page({ data }) {
  const { payload } = useSetGlobalState(data);

  if (payload === null) return <ErrorScreen />;

  const mobilePaymentOptions = filteredPaymentMethods({
    payload,
    type: "mobile_money",
  });

  const cardPaymentOptions = filteredPaymentMethods({
    payload,
    type: "card",
  });

  const bankPaymentOptions = filteredPaymentMethods({
    payload,
    type: "bank",
  });

  return (
    <MainLayout>
      <HeaderLayout>
        <div className="space-y-2">
          <h2 className="text-lg font-medium text-center">
            How would you like to pay?
          </h2>
          {mobilePaymentOptions.length > 0 && (
            <MobilePaymentOptionsTile options={mobilePaymentOptions} />
          )}
          {cardPaymentOptions.length > 0 && (
            <CardPaymentOptionsTile options={cardPaymentOptions} />
          )}
          {bankPaymentOptions.length > 0 && (
            <BankPaymentOptionsTile options={bankPaymentOptions} />
          )}
        </div>
      </HeaderLayout>
    </MainLayout>
  );
}

export const getServerSideProps = async ({ query }) => {
  try {
    let buffer = Buffer.from(query.params, "base64");
    let data = JSON.parse(buffer.toString("utf8"));
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
};
