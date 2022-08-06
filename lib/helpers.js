export const threeDS = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Process Secure Payment</title><meta http-equiv="content-type" content="text/html;charset=ASCII"><meta name="description" content="Process Secure Payment"><meta name="robots" content="noindex"><style type="text/css">body {font-family:"Trebuchet MS",sans-serif; background-color: #FFFFFF; }#msg {border:5px solid #666; background-color:#fff; margin:20px; padding:25px; max-width:40em; -webkit-border-radius: 10px; -khtml-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px;}#submitButton { text-align: center ; }#footnote {font-size:0.8em;}</style></head><body onload="return window.document.echoForm.submit()"><form name="echoForm" method="POST" action="https://ap.gateway.mastercard.com/acs/VisaACS/ec928fee-025e-432c-bd19-3dcb2834f9f7" accept-charset="ASCII"><input type="hidden" name="PaReq" value="eAFVUU1vgkAQvZv4Hzbcyy4UEcy4hoq1RG2sYtIrhY2SwKJ8qP33nRWp7R42+2Z23rx5A5NrnpGzKKu0kGPN0JlGhIyLJJX7sbYLX58cbcL7PQgPpRD+VsRNKTisRFVFe0HSBGsYY7Y1dOwhc22Nw9rbiBOHOydHSt0E2kEsLeNDJGsOUXx6Cd65xUzG8McdQi7KwOeG+WwN7KEDtMUgo1zwZbD2fBLOpm9kGayCcOYDvSUgLhpZl9/IZgHtADRlxi+Xi56lxyjR0wKoigB9iFg3Sk6FM13ThMvNojmzc1B/unG888U8SD7m3peZDYMxUPUDkqgW3GSmyWzmEOaOBsZIyb/FIcqVDr6YbclieyAGM3XGcLY2DEfVzWsB5lTqbwjQ3RLt78boEIjrsZACibHR7xvoQ/z0TfkZ1+icZVm4ETyui5ehurcJxZKiRSi9pVEAqCql96WhMbfFYuTfwvu9H2U2r3M="><input type="hidden" name="TermUrl" value="https://f8d3-197-248-91-233.ngrok.io/3DSecure"><input type="hidden" name="MD" value=""><noscript><div id="msg"><div id="submitButton"><input type="submit" value="AUTHORIZE" class="button"></div></div></noscript></form></body></html>
`;

export const prepareParameters = (params) => {
  const preparedParameters = [];
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      preparedParameters.push(`${key}=${params[key]}`);
    }
  }
  return preparedParameters.join("&");
};
