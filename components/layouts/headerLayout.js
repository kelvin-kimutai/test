import CountDownTimer from "../timer/countDownTimer";
import numeral from "numeral";
import { useSelector } from "react-redux";

export default function HeaderLayout({ children }) {
  const payment = useSelector((state) => state.payment);

  return (
    <>
      <div className="text-white bg-lipad-green">
        <section className="pt-8 pb-16 space-y-4 sm:pt-12 sm:pb-24">
          <CountDownTimer />
          <p className="px-16 font-semibold text-center ">
            Make a Payment to {payment.merchant.name} for Purchase of goods
          </p>
          <div className="w-8 h-0.5 mx-auto bg-white"></div>
          <div className="gap-y-2">
            <p className="text-3xl font-bold text-center ">
              KES {numeral(payment.amount).format("0,0.00")}
            </p>
            <div className="flex justify-center ">
              <span className="font-bold">Order ID:</span>
              <span className="ml-1 font-medium tracking-tighter">
                {payment.orderId}
              </span>
            </div>
          </div>
        </section>
      </div>
      <div className="p-8 px-4 -mt-8 space-y-4 bg-white rounded-t-2xl">
        {children}
      </div>
    </>
  );
}
