import { atom } from "recoil";

const checkoutState = atom({
  key: "checkoutState",
  default: {
    checkout_reference_id: null,
    msisdn: null,
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
        },
      ],
    },
  },
});

export default checkoutState;
