import gsap from "gsap";
import { useEffect, useState } from "react";
import { HiChevronUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import mobileMoney from "../../assets/images/icons/mobile-money.svg";
import checkoutState from "../../recoil/checkoutState";

export default function MobilePaymentOptionsTile({ options }) {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

  const setCheckout = useSetRecoilState(checkoutState);

  const animateCard = (expanded) => {
    if (expanded)
      gsap.to("#tile", { height: "auto", duration: 0.3, ease: "power1.inOut" });
    else gsap.to("#tile", { height: 0, duration: 0.3, ease: "power1.inOut" });
  };

  useEffect(() => {
    animateCard(expanded);
  }, [expanded]);

  return (
    <div className="w-full rounded-2xl bg-gray-50">
      <div className="flex w-full flex-col rounded-lg p-4 shadow-md">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2">
            <div className="relative h-5 w-5">
              <img src={mobileMoney} alt="" />
            </div>
            <span className="text-sm font-medium sm:text-base">
              Mobile Money
            </span>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            {options.slice(0, 2).map((option, i) => (
              <div key={i} className={`${expanded ? "hidden" : "block"}`}>
                <img
                  className="h-6 w-10"
                  src={option.payment_method_icon}
                  alt=""
                />
              </div>
            ))}

            <button onClick={() => setExpanded(!expanded)}>
              <HiChevronUp
                className={`${
                  expanded ? "rotate-0 transform" : "rotate-90 transform"
                } h-5 w-5 text-lipad-grey`}
              />
            </button>
          </div>
        </div>
        <div
          id="tile"
          className="mt-4 grid h-auto grid-cols-4 gap-x-2 overflow-hidden"
        >
          {options?.map((option, i) => (
            <button
              key={i}
              className="grid h-14 place-items-center rounded-md border-2 transition duration-200 hover:border-lipad-green sm:h-16"
              onClick={() => {
                setCheckout((prevState) => ({
                  ...prevState,
                  payment_method_name: option.payment_method_name,
                }));
                navigate("/mobile-money");
              }}
            >
              <img
                className="object-contain p-2"
                src={option.payment_method_icon}
                alt=""
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
