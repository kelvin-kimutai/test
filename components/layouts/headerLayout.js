import CountDownTimer from "../timer/countDownTimer";

export default function HeaderLayout({ children }) {
  const countDownDate = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);

  return (
    <>
      <div className="text-white bg-lipad-green">
        <section className="pt-8 pb-24 space-y-4">
          <CountDownTimer countDownDate={countDownDate} />
          <p className="px-16 text-base font-bold text-center ">
            Make a Payment to Jumia Kenya for Purchase of goods
          </p>
          <div className="w-8 h-0.5 mx-auto bg-white"></div>
          <p className="text-3xl font-bold text-center ">KES 12,496.00</p>
          <div className="flex justify-center ">
            <span className="font-bold">Order ID:</span>
            <span className="ml-1 font-medium tracking-tighter">172750</span>
          </div>
        </section>
      </div>
      <div className="p-8 px-4 -mt-8 space-y-4 bg-white rounded-t-2xl">
        {children}
      </div>
    </>
  );
}
