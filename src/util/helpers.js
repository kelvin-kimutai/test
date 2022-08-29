import { Buffer } from "buffer";
import { countryCodes } from "../data/countryCodes";

export const prepareParameters = (params) => {
  const preparedParameters = [];
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      preparedParameters.push(`${key}=${params[key]}`);
    }
  }
  return preparedParameters.join("&");
};

export const decodeBase64 = (encodedData) => {
  let buffer = Buffer.from(encodedData, "base64");
  let data = JSON.parse(buffer.toString("utf8"));
  return data;
};

export const filteredPaymentMethods = ({ payload, type }) => {
  return payload.client_data.payment_methods.filter(
    (e) => e.payment_method_type === type
  );
};

export function convertISO3toISO2(ISO2) {
  return countryCodes.find((e) => e.ISO3 === ISO2).ISO2;
}
