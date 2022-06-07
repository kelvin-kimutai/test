/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { HiCheckCircle, HiX } from "react-icons/hi";
import gsap from "gsap";
import { useRecoilState, useRecoilValue } from "recoil";
import uiState from "../../recoil/uiAtom";

function Toast() {
  const [ui, setUiState] = useRecoilState(uiState);
  useEffect(() => {
    if (ui.toast == true) showToast();
  }, [ui.toast]);

  const showToast = () => {
    console.log("showToast");
    gsap.to(".toast", {
      x: "0%",
    });
    setTimeout(hideToast, 10000);
  };

  const hideToast = () => {
    gsap.to(".toast", {
      x: "110%",
    });
    setUiState((prevState) => ({
      ...prevState,
      toast: false,
    }));
  };

  return (
    <div className="toast flex  gap-4 shadow-xl border-gray-100 border bg-slate-50 translate-x-[110%] m-8">
      <div className="bg-[#DDF7E0] p-4 grid place-content-center">
        <HiCheckCircle className="text-lipad-green w-8 h-8" />
      </div>
      <div className="text-lipad-blue space-y-1 w-72 py-4">
        <p className="font-semibold">Payment request sent</p>
        <p>Your payment request has been sent and is now being processed.</p>
      </div>
      <div className="p-4">
        <HiX
          className="text-lipad-blue w-6 h-6 cursor-pointer"
          onClick={() => hideToast()}
        />
      </div>
    </div>
  );
}

export default Toast;
