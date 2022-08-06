import { prepareParameters } from "../lib/helpers";

export async function getPaymentMethods({
  countryCode,
  serviceCode,
  clientCode,
}) {
  const response = await fetch(
    `https://uat.chekout-api.lipad.io/checkout-processor/client-countries?${prepareParameters(
      { countryCode, serviceCode, clientCode }
    )}`,
    { method: "GET", headers: { "Content-Type": "application/json" } }
  );
  const decodedResponse = await response.json();
  if (response.ok) {
    return decodedResponse;
  }
  throw {
    code: response.status,
    message: decodedResponse.message ?? "Failed to get client types",
  };
}
