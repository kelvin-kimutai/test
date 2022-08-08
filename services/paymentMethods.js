import { prepareParameters } from "../lib/helpers";

export async function getPaymentMethods({
  clientCode,
  countryCode,
  serviceCode,
}) {
  const response = await fetch(
    `https://uat.chekout-api.lipad.io/checkout-processor/client-countries?${prepareParameters(
      {
        client_code: clientCode,
        country_code: countryCode,
        service_code: serviceCode,
      }
    )}`,
    { method: "GET", headers: { "Content-Type": "application/json" } }
  );
  const decodedResponse = await response.json();
  if (response.ok) {
    return decodedResponse;
  }
  throw {
    code: response.status,
    message: decodedResponse.message ?? "Failed to get payment methods",
  };
}
