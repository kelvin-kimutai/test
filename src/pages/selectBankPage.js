import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Container from "../components/layout/container";
import BottomSection from "../components/sections/bottomSection";
import MiddleSection from "../components/sections/middleSection";
import TopSection from "../components/sections/topSection";
import checkoutState from "../recoil/checkoutState";
import payloadState from "../recoil/payloadState";
import { filteredPaymentMethods } from "../util/helpers";

export default function SelectBankPage() {
  const payload = useRecoilValue(payloadState);
  const setCheckout = useSetRecoilState(checkoutState);
  const navigate = useNavigate();

  const options = filteredPaymentMethods({
    payload,
    type: "bank",
  });

  return (
    <Container>
      <div>
        <TopSection />
        <MiddleSection />
        <div className="-mt-8 space-y-2 rounded-t-xl bg-white p-4 sm:p-6">
          <div className="relative">
            <Link to="/">
              <HiOutlineChevronLeft className="absolute inset-y-0 left-0 h-full w-5 cursor-pointer text-black" />
            </Link>
            <h2 className="text-center font-medium">Select your bank</h2>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 px-4">
            {options.map((option, i) => (
              <button
                key={i}
                className="grid h-16 cursor-pointer place-items-center rounded-md border-2 px-3 text-xs font-semibold transition duration-200 hover:border-lipad-green"
                onClick={() => {
                  setCheckout((prevState) => ({
                    ...prevState,
                    payment_method_name: option.payment_method_name,
                  }));
                  navigate("/mobile-banking");
                }}
              >
                <img
                  className="object-contain p-3"
                  src={option.payment_method_icon}
                  alt=""
                />
              </button>
            ))}
          </div>
        </div>
        <BottomSection />
      </div>
    </Container>
  );
}
