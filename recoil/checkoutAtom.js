import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

const checkoutState = atom({
  key: "checkoutState",
  effects_UNSTABLE: [persistAtom],
  default: {
    checkout_reference_id: null,
    msisdn: null,
    card: {
      name_on_card: null,
      number: null,
      expiry_month: null,
      expiry_year: null,
      cvv: null,
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
