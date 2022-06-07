import _ from "lodash";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import HeaderLayout from "../components/layouts/headerLayout";
import MainLayout from "../components/layouts/mainLayout";
import MobilePaymentOptionsTile from "../components/tiles/mobilePaymentOptionsTile";
import PaymentOptionsTile from "../components/tiles/paymentOptionsTile";
import checkoutState from "../recoil/checkoutAtom";
import payloadState from "../recoil/payloadAtom";
import uiState from "../recoil/uiAtom";

export default function Page({ data }) {
  const [payload, setPayload] = useRecoilState(payloadState);
  const [checkout, setCheckout] = useRecoilState(checkoutState);

  useEffect(() => {
    if (!_.isEmpty(data)) {
      // Set application wide state with data from the query parameters
      setPayload(data);
      // Start to populate the checkout object
      setCheckout((checkout) => ({
        ...checkout,
        checkout_reference_id: data.checkout_reference_id,
        client_data: {
          ...checkout.client_data,
          client_code: data.client_data.client_code,
        },
      }));
    }
  }, [data, setCheckout, setPayload]);

  const isPaymentMethodAvailable = (paymentMethod) => {
    if (_.isEmpty(data)) return false;
    return data.client_data.client_payment_methods.filter(
      (client_payment_method) =>
        client_payment_method.payment_method.payment_method_type
          .payment_method_type_name === paymentMethod
    ).length > 0
      ? true
      : false;
  };

  const filteredPaymentMethods = (paymentMethod) => {
    if (_.isEmpty(data)) return [];
    return data.client_data.client_payment_methods.filter(
      (client_payment_method) =>
        client_payment_method.payment_method.payment_method_type
          .payment_method_type_name === paymentMethod
    );
  };

  if (_.isEmpty(data))
    return (
      <div className="grid place-content-center h-screen">
        Something went wrong
      </div>
    );

  if (new Date(data.due_date + "Z") - new Date().getTime() < 0)
    return (
      <div className="grid place-content-center h-screen">
        Session has expired
      </div>
    );

  return (
    <MainLayout>
      <HeaderLayout>
        <div className="space-y-4 min-h-[22rem]">
          <h2
            className="text-lg sm:text-xl font-medium text-center"
            onClick={() => showToast()}
          >
            How would you like to pay?
          </h2>
          {isPaymentMethodAvailable("mobile_money") && (
            <MobilePaymentOptionsTile
              options={filteredPaymentMethods("mobile_money")}
              title="Mobile Money"
              iconSrc="/images/icons/mobile-money.svg"
            />
          )}
          {isPaymentMethodAvailable("card") && (
            <PaymentOptionsTile
              options={filteredPaymentMethods("card")}
              title="Card"
              titleIcon={"/images/icons/card.svg"}
              paymentIcons={[
                "/images/logos/visa.svg",
                "/images/logos/mastercard.svg",
              ]}
            />
          )}
          {/* 
          {isPaymentMethodAvailable("bank") && (
            <Link href="/payments/select-bank" passHref>
              <PaymentOptionsTile
                title="Bank"
                titleIcon={"/images/icons/bank.svg"}
                paymentIcons={[
                  "/images/logos/ecobank.svg",
                  "/images/logos/dtb.svg",
                ]}
              />
            </Link>
          )} */}
        </div>
      </HeaderLayout>
    </MainLayout>
  );
}

export const getServerSideProps = async ({ query }) => {
  // Check if query parameters exist. If not, return an empty data object
  if (!query.params)
    return {
      props: {
        data: {},
      },
    };
  // Attempt to decode base64 encypted paramaters.
  // If decoding fails, return an empty data object
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
        data: {},
      },
    };
  }
};
