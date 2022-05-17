import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import payloadState from "../../recoil/payloadAtom";

export default function CountDownTimer() {
  const payload = useRecoilValue(payloadState);

  const countDownTime = new Date(payload.due_date + "Z");

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownTime - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(("0" + days).slice(-2));
        setTimerHours(("0" + hours).slice(-2));
        setTimerMinutes(("0" + minutes).slice(-2));
        setTimerSeconds(("0" + seconds).slice(-2));
      }
    }, 1000);
  };
  useEffect(() => {
    const temp = interval.current;
    startTimer();
    return () => {
      clearInterval(temp);
      // interval.current = null;
    };
  });

  return (
    <div className="flex items-start justify-center space-x-2">
      <div className="flex flex-col items-center ">
        <p className="text-lg font-medium">{timerDays}</p>
        <p className="text-[0.66rem]">DAYS</p>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center ">
        <p className="text-lg font-medium">{timerHours}</p>
        <p className="text-[0.66rem]">HRS</p>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center ">
        <p className="text-lg font-medium">{timerMinutes}</p>
        <p className="text-[0.66rem]">MINS</p>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center ">
        <p className="text-lg font-medium">{timerSeconds}</p>
        <p className="text-[0.66rem]">SECS</p>
      </div>
    </div>
  );
}
