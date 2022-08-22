import { useEffect } from "react";
import { useRecoilState } from "recoil";
import checkoutState from "../recoil/checkoutAtom";
import payloadState from "../recoil/payloadAtom";
import uiState from "../recoil/uiAtom";

const useSetGlobalState = (data) => {
  const [ui, setUiState] = useRecoilState(uiState);
  const [payload, setPayload] = useRecoilState(payloadState);
  const [checkout, setCheckout] = useRecoilState(checkoutState);

  useEffect(() => {
    localStorage.clear();
    if (data !== null) {
      setPayload(data);
      setUiState((prevState) => ({
        ...prevState,
        selectedCountry: data.client_data.countries.find(
          (e) => e.country_code === data.merchant_site_data.country_code
        ),
      }));
      setCheckout((prevState) => ({
        ...prevState,
        client_code: data.merchant_site_data.client_code,
        service_code: data.merchant_site_data.service_code,
        payer_msisdn: data.merchant_site_data.msisdn,
        request_amount: data.merchant_site_data.request_amount,
      }));
    } else {
      setPayload(null);
    }
  }, [data, setCheckout, setPayload, setUiState]);
  return { payload };
};

export default useSetGlobalState;
