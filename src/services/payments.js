import { prepareParameters } from "../util/helpers";

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

export async function getPaymentDetails({ id, body }) {
  const response = await fetch(
    `https://uat.chekout-api.lipad.io/checkout-processor/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  if (response.ok) {
    const decodedResponse = await response.json();
    return decodedResponse;
  }
  throw {
    code: response.status,
    message: "Failed to get payment details",
  };
}

export async function sendPaymentRequest({ checkout, checkout_request_id }) {
  const response = await fetch(
    `https://uat.chekout-api.lipad.io/checkout-processor/${checkout_request_id}`,
    {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkout),
    }
  );
  if (response.ok) {
    return;
  }
  throw {
    code: response.status,
    message: "Failed to send payment request",
  };
}

export async function getCheckoutRequestStatus({ checkout_request_id }) {
  const response = await fetch(
    `https://uat.chekout-api.lipad.io/checkout-processor/${checkout_request_id}`,
    { method: "GET", headers: { "Content-Type": "application/json" } }
  );
  const decodedResponse = await response.json();
  if (response.ok) {
    return decodedResponse;
  }
  throw {
    code: response.status,
    message: decodedResponse.message ?? "Failed to get checkout request status",
  };
}

export async function createCheckoutRequest({ body }) {
  const response = await fetch(
    `https://uat.chekout-api.lipad.io/checkout-processor`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  const decodedResponse = await response.json();
  if (response.ok) {
    return decodedResponse;
  }
  throw {
    code: response.status,
    message: decodedResponse.message ?? "Failed to create checkout request",
  };
}
