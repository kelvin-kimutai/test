import CountDownTimer from "../timer/countDownTimer";
import numeral from "numeral";
import { useRecoilValue } from "recoil";
import payloadState from "../../recoil/payloadAtom";

export default function HeaderLayout({ children }) {
  const payload = useRecoilValue(payloadState);

  return (
    <div>
      <div className="text-white bg-lipad-green text-sm sm:text-base">
        <section className="pt-6 space-y-4 pb-14 sm:pb-20">
          <CountDownTimer />
          <p className="px-16 text-center ">
            Make a payment to {payload.client_data.client_name} for purchase of
            goods
          </p>
          <div className="w-8 h-0.5 mx-auto bg-white"></div>
          <div className="gap-y-2">
            <p className="text-xl font-medium text-center">
              KES{" "}
              {numeral(payload.merchant_site_data.request_amount).format(
                "0,0.00"
              )}
            </p>
            <div className="flex justify-center ">
              <span>Order ID:</span>
              <span className="ml-1">
                {payload.merchant_site_data.merchant_transaction_id}
              </span>
            </div>
          </div>
        </section>
      </div>
      <div className="p-4 -mt-8 bg-white sm:p-8 rounded-t-xl ">{children}</div>
    </div>
  );
}
