import { useEffect, useState } from "react";

const useCountdown = (targetDateTime) => {
  const countDownDate = new Date(targetDateTime).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDown, countDownDate]);

  if (targetDateTime === null)
    return {
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
      countDown: null,
    };

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  days = ("0" + days).slice(-2);
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  return { days, hours, minutes, seconds, countDown };
};

export { useCountdown };
