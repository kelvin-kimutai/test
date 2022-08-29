/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useCountdown } from "../hooks/useCountdown";
import AuthorizePaymentPage from "../pages/authorizePaymentPage";
import ErrorPage from "../pages/errorPage";
import MobileBankingPage from "../pages/mobileBankingPage";
import MobileMoneyPage from "../pages/mobileMoneyPage";
import NotFoundPage from "../pages/notFoundPage";
import PaymentFailedPage from "../pages/paymentFailedPage";
import SelectPaymentMethodPage from "../pages/paymentMethodsPage";
import PaymentSuccessfulPage from "../pages/paymentSuccessful";
import ProcessingPaymentPage from "../pages/processingPaymentPage";
import SelectBankPage from "../pages/selectBankPage";
import SessionExpiredPage from "../pages/sessionExpiredPage";
import checkoutState from "../recoil/checkoutState";
import payloadState from "../recoil/payloadState";
import uiState from "../recoil/uiState";
import { decodeBase64 } from "../util/helpers";

function App() {
  const navigate = useNavigate();
  const setUiState = useSetRecoilState(uiState);
  const [payload, setPayload] = useRecoilState(payloadState);
  const setCheckout = useSetRecoilState(checkoutState);
  const [mounted, setMounted] = useState(false);
  const [sesionExpired, setSessionExpired] = useState(false);
  const [checkoutId, setCheckoutId] = useState();
  const [searchParams] = useSearchParams();
  const params = searchParams.get("params");
  const { countDown } = useCountdown(
    payload !== null ? new Date(payload.merchant_site_data.due_date) : null
  );

  useEffect(() => {
    document.title = "Lipad Checkout";
  }, []);

  useEffect(() => {
    // Checking if the page has been loaded with the base64 parameters
    // If yes, decode and pre-set the application's global state
    if (params !== null) {
      try {
        const data = decodeBase64(params);
        setCheckoutId(data.checkout_request_id);
        setPayload(data);
        setUiState((prevState) => ({
          ...prevState,
          selectedCountry: payload.client_data.countries.find(
            (e) => e.country_code === payload.merchant_site_data.country_code
          ),
        }));
        setCheckout((prevState) => ({
          ...prevState,
          client_code: payload.merchant_site_data.client_code,
          service_code: payload.merchant_site_data.service_code,
          payer_msisdn: payload.merchant_site_data.msisdn,
          request_amount: payload.merchant_site_data.request_amount,
          country_code: payload.merchant_site_data.country_code,
        }));
      } catch (error) {
        // Redirect to error page: Invalid parameters
        navigate("/error");
      }
    } else if (payload === null) {
      // Redirect to error page: No global state
      navigate("/error");
    }
    setMounted(true);
  }, [searchParams, setCheckout, setPayload, setUiState]);

  // Check if the chekout instance has expired
  // useEffect(() => {
  //   console.log(countDown);
  //   if (
  //     mounted &&
  //     countDown !== null &&
  //     countDown <= 0 &&
  //     checkoutId === payload.checkout_request_id &&
  //     !sesionExpired
  //   ) {
  //     setSessionExpired(true);
  //     // Redirect to session expired page
  //     navigate("/session-expired");
  //   }
  // }, [countDown, checkoutId, payload, mounted]);

  if (!mounted) return null;

  return (
    <Routes>
      <Route path="/" element={<SelectPaymentMethodPage />} />
      <Route path="select-bank" element={<SelectBankPage />} />
      <Route path="mobile-money" element={<MobileMoneyPage />} />
      <Route path="mobile-banking" element={<MobileBankingPage />} />
      <Route path="authorize-payment" element={<AuthorizePaymentPage />} />
      <Route path="process-payment" element={<ProcessingPaymentPage />} />
      <Route path="payment-failed" element={<PaymentFailedPage />} />
      <Route path="payment-successful" element={<PaymentSuccessfulPage />} />
      <Route path="session-expired" element={<SessionExpiredPage />} />
      <Route path="error" element={<ErrorPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
