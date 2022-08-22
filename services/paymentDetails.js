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
