export const paymentOptions = [
  {
    name: "WEMABANK",
    type: "bank",
    list: ({ accountNumber, accountName, bankName }) => (
      <>
        <li key={1}>Login to your mobile or internet banking</li>
        <li key={2}>Select Transfer to other banks or Mobile Money</li>
        <li key={3}>{`Select ${bankName} as the bank to transfer to`}</li>
        <li key={4}>{`Enter account name ${accountName}`}</li>
        <li key={4}>{`Enter account number ${accountNumber}`}</li>
        <li key={5}>Enter amount</li>
      </>
    ),
  },
];
