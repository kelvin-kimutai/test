const paymentOptions = [
  {
    id: "mpesa",
    name: "M-Pesa",
    imageSrc: "/images/logos/mpesa.png",
    type: "mobile",
  },
  {
    id: "airtel",
    name: "Airtel",
    imageSrc: "/images/logos/airtel.png",
    type: "mobile",
    paymentInstructions: [
      "Go to your Airtel SIM tool kit",
      "Select Airtel money",
      "Instruction 3 goes here",
      "Instruction 4 goes here",
      "Confirm your payment ",
      "Click ‘Confirm Payment’ below",
    ],
  },
  {
    id: "equitel",
    name: "Equitel",
    imageSrc: "/images/logos/equitel.png",
    type: "mobile",
  },
  {
    id: "visa",
    name: "Visa",
    imageSrc: "/images/logos/equitel.png",
    type: "card",
  },
  {
    id: "masterCard",
    name: "MasterCard",
    imageSrc: "/images/logos/equitel.png",
    type: "card",
  },
  {
    id: "ecobank",
    name: "Ecobank",
    imageSrc: "/images/logos/equitel.png",
    type: "bank",
    paymentInstructions: [
      "Go to your Airtel SIM tool kit",
      "Select Airtel money",
      "Instruction 3 goes here",
      "Instruction 4 goes here",
      "Confirm your payment ",
      "Click ‘Confirm Payment’ below",
    ],
  },
  {
    id: "dtb",
    name: "DTB",
    imageSrc: "/images/logos/equitel.png",
    type: "bank",
    paymentInstructions: [
      "Go to your Airtel SIM tool kit",
      "Select Airtel money",
      "Instruction 3 goes here",
      "Instruction 4 goes here",
      "Confirm your payment ",
      "Click ‘Confirm Payment’ below",
    ],
  },
];

export { paymentOptions };
