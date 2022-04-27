import Image from "next/image";
import { HiChevronUp } from "react-icons/hi";
import { useRecoilState } from "recoil";
import checkoutState from "../../recoil/checkoutAtom";

export default function PaymentOptionsTile({ title, titleIcon, paymentIcons }) {
  const [checkout, setCheckout] = useRecoilState(checkoutState);

  const setPaymentMethodId = (paymentMethodId) => {
    setCheckout((checkout) => ({
      ...checkout,
      client_data: {
        ...checkout.client_data,
        client_payment_methods: {
          client_payment_method_id: paymentMethodId,
        },
      },
    }));
  };
  return (
    <div className="flex flex-col w-full p-4 text-sm rounded-lg shadow-md cursor-pointer bg bg-gray-50 sm:text-base">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <div className="relative w-5 h-5">
            <Image src={iconSrc} alt="" layout="fill" />
          </div>
          <span className="font-medium">{title}</span>
        </div>
        <div className="flex items-center space-x-3">
          {paymentIcons.map((paymentIcon, i) => (
            <div
              key={i}
              onClick={() => {
                setPaymentMethodId(option.client_payment_method_id);
              }}
            >
              <div className="relative w-10 h-6">
                <Image
                  src={paymentIcon}
                  alt=""
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            </div>
          ))}
          <HiChevronUp
            className={`w-5 h-5 text-lipad-grey transform rotate-90`}
          />
        </div>
      </div>
    </div>
  );
}
