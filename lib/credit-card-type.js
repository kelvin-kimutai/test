export function creditCardType(cc) {
  let visa = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
  let mastercard = new RegExp("^5[1-5][0-9]{14}$");
  let mastercard2 = new RegExp("^2[2-7][0-9]{14}$");

  if (visa.test(cc)) {
    return "VISA";
  }
  if (mastercard.test(cc) || mastercard2.test(cc)) {
    return "MASTERCARD";
  }
  return undefined;
}
