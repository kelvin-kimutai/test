export const paymentMethodTypes = [
  { name: "MPESA", type: "mobile_money" },
  { name: "AIRTELMONEY", type: "mobile_money" },
  { name: "CARD", type: "card" },
];

export const filteredPaymentMethods = ({ payload, type }) => {
  return payload.client_data.payment_methods.filter(
    (e) => e.payment_method_type === type
  );
};

export const testBankPaymentOptions = [
  {
    client_service_payment_method_id: "3",
    payment_method: {
      payment_method_id: "4",
      payment_method_name: "CARD",
      payment_method_description:
        "Transactions via card gateway i.e Mastercard, Visa",
      payment_method_icon:
        "https://firebasestorage.googleapis.com/v0/b/lipad-checkout.appspot.com/o/logos%2Fmastercard.svg?alt=media&token=0e16d86a-2a40-457d-8aee-661caf9a03a0",
      payment_method_type: {
        payment_method_type_id: "2",
        payment_method_type_name: "bank",
        payment_method_type_description: "Payments through bank transactions",
      },
    },
  },
];
