export const payload = {
  checkout_request_id: "595",
  merchant_site_data: {
    checkout_request_id: "595",
    msisdn: "0714322405",
    customer_email: "demo@lipad.io",
    customer_first_name: "Demo",
    customer_last_name: "User",
    due_date: "2022-09-25T14:18:10.322Z",
    merchant_transaction_id: "txn_id_342",
    preferred_payment_option_code: "1",
    callback_url: "https://demo.lipad.io/api/payment-notification",
    request_amount: "3",
    request_description: "Dummy merchant transaction",
    success_redirect_url: "https://demo.lipad.io?status=success",
    fail_redirect_url: "https://demo.lipad.io?status=fail",
    invoice_number: "1",
    account_number: "oid39",
    language_code: "en",
    currency_code: "KES",
    client_code: "IRIS",
    service_code: "GEN",
    country_code: "KEN",
  },
  client_data: {
    client_name: "Iris",
    client_code: "IRIS",
    client_description: "Iris Port Logistics",
    client_logo:
      "https://firebasestorage.googleapis.com/v0/b/lipad-checkout.appspot.com/o/logos%2Fkcb.png?alt=media&token=cfea4c5c-4583-4126-b1de-806bbab25787",
    payment_methods: [
      {
        payment_method_id: "1",
        payment_method_name: "MPESA",
        payment_method_icon:
          "https://firebasestorage.googleapis.com/v0/b/lipad-checkout.appspot.com/o/logos%2Fmpesa.svg?alt=media&token=0fba225b-ade5-4f5d-a5c1-21e9b2278df6",
        payment_method_type: "mobile_money",
      },
      {
        payment_method_id: "2",
        payment_method_name: "AIRTELMONEY",
        payment_method_icon:
          "https://firebasestorage.googleapis.com/v0/b/lipad-checkout.appspot.com/o/logos%2Fairtel.svg?alt=media&token=59cee103-a768-4c7e-857b-921ef34198cb",
        payment_method_type: "mobile_money",
      },
    ],
    services: [
      { services_id: "1", service_name: "General", service_code: "GEN" },
    ],
    countries: [
      {
        country_id: "1",
        country_name: "Kenya",
        currency_code: "KES",
        phone_code: "254",
        country_code: "KEN",
        flag: "https://firebasestorage.googleapis.com/v0/b/lipad-checkout.appspot.com/o/flags%2Fkenya-flag-icon-32.png?alt=media&token=a9c627ae-99c0-4475-bf8d-22df69471093",
      },
      {
        country_id: "2",
        country_name: "Tanzania",
        currency_code: "TZS",
        phone_code: "255",
        country_code: "TZA",
        flag: "https://firebasestorage.googleapis.com/v0/b/lipad-checkout.appspot.com/o/flags%2Ftanzania-flag-icon-32.png?alt=media&token=0c6cb06d-b441-4eb6-9a79-4f6122f67244",
      },
      {
        country_id: "3",
        country_name: "Uganda",
        currency_code: "UGX",
        phone_code: "256",
        country_code: "UGA",
        flag: "https://firebasestorage.googleapis.com/v0/b/lipad-checkout.appspot.com/o/flags%2Fuganda-flag-icon-32.png?alt=media&token=9639557b-c54c-4175-90a3-46f1f5783492",
      },
      {
        country_id: "4",
        country_name: "Nigeria",
        currency_code: "NGN",
        phone_code: "234",
        country_code: "NGA",
        flag: "https://firebasestorage.googleapis.com/v0/b/lipad-checkout.appspot.com/o/flags%2Fng.svg?alt=media&token=dec0f661-2f8c-4217-b7fd-f7b96e750ae6",
      },
    ],
  },
};

const encoded =
  "eyJjaGVja291dF9yZXF1ZXN0X2lkIjoiNTk1IiwibWVyY2hhbnRfc2l0ZV9kYXRhIjp7ImNoZWNrb3V0X3JlcXVlc3RfaWQiOiI1OTUiLCJtc2lzZG4iOiIwNzE0MzIyNDA1IiwiY3VzdG9tZXJfZW1haWwiOiJkZW1vQGxpcGFkLmlvIiwiY3VzdG9tZXJfZmlyc3RfbmFtZSI6IkRlbW8iLCJjdXN0b21lcl9sYXN0X25hbWUiOiJVc2VyIiwiZHVlX2RhdGUiOiIyMDIyLTA5LTI1VDE0OjE4OjEwLjMyMloiLCJtZXJjaGFudF90cmFuc2FjdGlvbl9pZCI6InR4bl9pZF8zNDIiLCJwcmVmZXJyZWRfcGF5bWVudF9vcHRpb25fY29kZSI6IjEiLCJjYWxsYmFja191cmwiOiJodHRwczovL2RlbW8ubGlwYWQuaW8vYXBpL3BheW1lbnQtbm90aWZpY2F0aW9uIiwicmVxdWVzdF9hbW91bnQiOiIzIiwicmVxdWVzdF9kZXNjcmlwdGlvbiI6IkR1bW15IG1lcmNoYW50IHRyYW5zYWN0aW9uIiwic3VjY2Vzc19yZWRpcmVjdF91cmwiOiJodHRwczovL2RlbW8ubGlwYWQuaW8/c3RhdHVzPXN1Y2Nlc3MiLCJmYWlsX3JlZGlyZWN0X3VybCI6Imh0dHBzOi8vZGVtby5saXBhZC5pbz9zdGF0dXM9ZmFpbCIsImludm9pY2VfbnVtYmVyIjoiMSIsImFjY291bnRfbnVtYmVyIjoib2lkMzkiLCJsYW5ndWFnZV9jb2RlIjoiZW4iLCJjdXJyZW5jeV9jb2RlIjoiS0VTIiwiY2xpZW50X2NvZGUiOiJJUklTIiwic2VydmljZV9jb2RlIjoiR0VOIiwiY291bnRyeV9jb2RlIjoiS0VOIn0sImNsaWVudF9kYXRhIjp7ImNsaWVudF9uYW1lIjoiSXJpcyIsImNsaWVudF9jb2RlIjoiSVJJUyIsImNsaWVudF9kZXNjcmlwdGlvbiI6IklyaXMgUG9ydCBMb2dpc3RpY3MiLCJjbGllbnRfbG9nbyI6Imh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvbGlwYWQtY2hlY2tvdXQuYXBwc3BvdC5jb20vby9sb2dvcyUyRmtjYi5wbmc/YWx0PW1lZGlhJnRva2VuPWNmZWE0YzVjLTQ1ODMtNDEyNi1iMWRlLTgwNmJiYWIyNTc4NyIsInBheW1lbnRfbWV0aG9kcyI6W3sicGF5bWVudF9tZXRob2RfaWQiOiIxIiwicGF5bWVudF9tZXRob2RfbmFtZSI6Ik1QRVNBIiwicGF5bWVudF9tZXRob2RfaWNvbiI6Imh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvbGlwYWQtY2hlY2tvdXQuYXBwc3BvdC5jb20vby9sb2dvcyUyRm1wZXNhLnN2Zz9hbHQ9bWVkaWEmdG9rZW49MGZiYTIyNWItYWRlNS00ZjVkLWE1YzEtMjFlOWIyMjc4ZGY2IiwicGF5bWVudF9tZXRob2RfdHlwZSI6Im1vYmlsZV9tb25leSJ9LHsicGF5bWVudF9tZXRob2RfaWQiOiIyIiwicGF5bWVudF9tZXRob2RfbmFtZSI6IkFJUlRFTE1PTkVZIiwicGF5bWVudF9tZXRob2RfaWNvbiI6Imh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvbGlwYWQtY2hlY2tvdXQuYXBwc3BvdC5jb20vby9sb2dvcyUyRmFpcnRlbC5zdmc/YWx0PW1lZGlhJnRva2VuPTU5Y2VlMTAzLWE3NjgtNGM3ZS04NTdiLTkyMWVmMzQxOThjYiIsInBheW1lbnRfbWV0aG9kX3R5cGUiOiJtb2JpbGVfbW9uZXkifV0sInNlcnZpY2VzIjpbeyJzZXJ2aWNlc19pZCI6IjEiLCJzZXJ2aWNlX25hbWUiOiJHZW5lcmFsIiwic2VydmljZV9jb2RlIjoiR0VOIn1dLCJjb3VudHJpZXMiOlt7ImNvdW50cnlfaWQiOiIxIiwiY291bnRyeV9uYW1lIjoiS2VueWEiLCJjdXJyZW5jeV9jb2RlIjoiS0VTIiwicGhvbmVfY29kZSI6IjI1NCIsImNvdW50cnlfY29kZSI6IktFTiIsImZsYWciOiJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2xpcGFkLWNoZWNrb3V0LmFwcHNwb3QuY29tL28vZmxhZ3MlMkZrZW55YS1mbGFnLWljb24tMzIucG5nP2FsdD1tZWRpYSZ0b2tlbj1hOWM2MjdhZS05OWMwLTQ0NzUtYmY4ZC0yMmRmNjk0NzEwOTMifSx7ImNvdW50cnlfaWQiOiIyIiwiY291bnRyeV9uYW1lIjoiVGFuemFuaWEiLCJjdXJyZW5jeV9jb2RlIjoiVFpTIiwicGhvbmVfY29kZSI6IjI1NSIsImNvdW50cnlfY29kZSI6IlRaQSIsImZsYWciOiJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2xpcGFkLWNoZWNrb3V0LmFwcHNwb3QuY29tL28vZmxhZ3MlMkZ0YW56YW5pYS1mbGFnLWljb24tMzIucG5nP2FsdD1tZWRpYSZ0b2tlbj0wYzZjYjA2ZC1iNDQxLTRlYjYtOWE3OS00ZjYxMjJmNjcyNDQifSx7ImNvdW50cnlfaWQiOiIzIiwiY291bnRyeV9uYW1lIjoiVWdhbmRhIiwiY3VycmVuY3lfY29kZSI6IlVHWCIsInBob25lX2NvZGUiOiIyNTYiLCJjb3VudHJ5X2NvZGUiOiJVR0EiLCJmbGFnIjoiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9saXBhZC1jaGVja291dC5hcHBzcG90LmNvbS9vL2ZsYWdzJTJGdWdhbmRhLWZsYWctaWNvbi0zMi5wbmc/YWx0PW1lZGlhJnRva2VuPTk2Mzk1NTdiLWM1NGMtNDE3NS05MGEzLTQ2ZjFmNTc4MzQ5MiJ9LHsiY291bnRyeV9pZCI6IjQiLCJjb3VudHJ5X25hbWUiOiJOaWdlcmlhIiwiY3VycmVuY3lfY29kZSI6Ik5HTiIsInBob25lX2NvZGUiOiIyMzQiLCJjb3VudHJ5X2NvZGUiOiJOR0EiLCJmbGFnIjoiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9saXBhZC1jaGVja291dC5hcHBzcG90LmNvbS9vL2ZsYWdzJTJGbmcuc3ZnP2FsdD1tZWRpYSZ0b2tlbj1kZWMwZjY2MS0yZjhjLTQyMTctYjdmZC1mN2I5NmU3NTBhZTYifV19fQ==";
