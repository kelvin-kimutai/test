import { useRecoilValue } from "recoil";
import { useCountdown } from "../../hooks/useCountdown";
import payloadState from "../../recoil/payloadAtom";

export default function CountDownTimer() {
  const payload = useRecoilValue(payloadState);
  const countDownTime = new Date(payload.merchant_site_data.due_date);
  const [days, hours, minutes, seconds] = useCountdown(countDownTime);

  return (
    <div className="flex items-start justify-center space-x-2">
      <div className="flex flex-col items-center ">
        <p>{days}</p>
        <p className="text-[10px]">DAYS</p>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center ">
        <p>{hours}</p>
        <p className="text-[10px]">HRS</p>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center ">
        <p>{minutes}</p>
        <p className="text-[10px]">MINS</p>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center ">
        <p>{seconds}</p>
        <p className="text-[10px]">SECS</p>
      </div>
    </div>
  );
}
