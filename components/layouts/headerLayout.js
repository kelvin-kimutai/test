import CountDownTimer from "../timer/countDownTimer";
import numeral from "numeral";
import { useRecoilValue } from "recoil";
import payloadState from "../../recoil/payloadAtom";

export default function HeaderLayout({ children }) {
  const payload = useRecoilValue(payloadState);

  return (
    <>
      <div className="text-sm text-white sm:text-base bg-lipad-green">
        <section className="pt-6 space-y-4 pb-14 sm:pt-12 sm:pb-24">
          <CountDownTimer />
          <p className="px-16 font-medium text-center ">
            Make a Payment to {payload.client_name} for Purchase of goods
          </p>
          <div className="w-8 h-0.5 mx-auto bg-white"></div>
          <div className="gap-y-2">
            <p className="text-2xl font-medium text-center">
              KES {numeral(payload.request_amount).format("0,0.00")}
            </p>
            <div className="flex justify-center ">
              <span className="font-medium">Order ID:</span>
              <span className="ml-1 tracking-tighter">{24356}</span>
            </div>
          </div>
        </section>
      </div>
      <div className="p-4 px-4 -mt-8 space-y-4 bg-white sm:p-8 rounded-t-2xl">
        {children}
      </div>
    </>
  );
}
