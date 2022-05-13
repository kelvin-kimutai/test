/* eslint-disable react-hooks/exhaustive-deps */
import _ from "lodash";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import HeaderLayout from "../components/layouts/headerLayout";
import MainLayout from "../components/layouts/mainLayout";
import MobilePaymentOptionsTile from "../components/tiles/mobilePaymentOptionsTile";
import checkoutState from "../recoil/checkoutAtom";
import payloadState from "../recoil/payloadAtom";

export default function Page({ data }) {
  const [payload, setPayload] = useRecoilState(payloadState);
  const [checkout, setCheckout] = useRecoilState(checkoutState);

  useEffect(() => {
    setPayload(data);
  }, []);

  useEffect(() => {
    setCheckout((checkout) => ({
      ...checkout,
      checkout_reference_id: data.checkout_reference_id,
      client_data: {
        ...checkout.client_data,
        client_code: data.client_data.client_code,
      },
    }));
  }, []);

  const isPaymentMethodAvailable = (paymentMethod) =>
    payload.client_data.client_payment_methods.filter(
      (client_payment_method) =>
        client_payment_method.payment_method.payment_method_type
          .payment_method_type_name === paymentMethod
    ).length > 0
      ? true
      : false;

  const filteredPaymentMethods = (paymentMethod) =>
    payload.client_data.client_payment_methods.filter(
      (client_payment_method) =>
        client_payment_method.payment_method.payment_method_type
          .payment_method_type_name === paymentMethod
    );

  if (_.isEmpty(payload)) return <div>No params</div>;

  return (
    <MainLayout>
      <HeaderLayout>
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-center sm:text-2xl">
            How would you like to pay?
          </h2>
          {isPaymentMethodAvailable("mobile_money") && (
            <MobilePaymentOptionsTile
              options={filteredPaymentMethods("mobile_money")}
              title="Mobile Money"
              iconSrc="/images/icons/mobile-money.svg"
            />
          )}
          {/* {isPaymentMethodAvailable("card") && (
            <Link href="/payments/card" passHref>
              <PaymentOptionsTile
                title="Card"
                titleIcon={"/images/icons/card.svg"}
                paymentIcons={[
                  "/images/logos/visa.svg",
                  "/images/logos/mastercard.svg",
                ]}
              />
            </Link>
          )}
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
  console.log(query.params);
  if (!query.params)
    return {
      props: {
        data: {},
      },
    };

  let buffer = Buffer.from(query.params, "base64");
  let data = JSON.parse(buffer.toString("utf8"));
  return {
    props: {
      data,
    },
  };
};
