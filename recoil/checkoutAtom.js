import { atom } from "recoil";

const checkoutState = atom({
  key: "checkoutState",
  default: {
    checkout_reference_id: null,
    msisdn: null,
    card_details: {
      card_name: null,
      card_number: null,
      card_expiry_month: null,
      card_expiry_year: null,
      card_cvv: null,
    },
    request_amount: null,
    client_data: {
      client_code: null,
      client_countries: [
        {
          client_country_id: null,
        },
      ],
      client_payment_methods: [
        {
          client_payment_method_id: null,
          payment_method: {
            payment_method_id: null,
            payment_method_name: null,
          },
        },
      ],
    },
  },
});

export default checkoutState;
