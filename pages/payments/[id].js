import Link from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi";
import CardForm from "../../components/forms/cardForm";
import MobileMoneyForm from "../../components/forms/mobileMoneyForm";
import HeaderLayout from "../../components/layouts/headerLayout";
import MainLayout from "../../components/layouts/mainLayout";
import PaymentInstructions from "../../components/paymentInstructions";
import { paymentOptions } from "../../data/paymentOptions";

export async function getStaticPaths() {
  const paths = paymentOptions.map((option) => {
    return { params: { id: option.id } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const paymentOption = paymentOptions.find(
    (option) => option.id === params.id
  );
  return {
    props: {
      paymentOption,
    },
  };
}

export default function Page({ paymentOption }) {
  const paymentOptionId = paymentOption.id;

  const title = (title) => (
    <div className="relative">
      <Link href="/" passHref>
        <div>
          <HiOutlineChevronLeft className="absolute inset-y-0 left-0 w-5 h-5 text-black cursor-pointer" />
        </div>
      </Link>
      <h2 className="text-2xl font-bold text-center">{title}</h2>
    </div>
  );

  if (paymentOptionId == "mpesa" || paymentOptionId == "equitel")
    return (
      <>
        {title(`Pay with ${paymentOption.name}`)}
        <MobileMoneyForm />
      </>
    );
  else if (paymentOptionId == "card")
    return (
      <>
        {title("Enter your Card details")}
        <CardForm />
      </>
    );
  else
    return (
      <>
        {title(`Pay with ${paymentOption.name}`)}
        <PaymentInstructions instructions={paymentOption.paymentInstructions} />
      </>
    );
}

Page.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <HeaderLayout>{page}</HeaderLayout>
    </MainLayout>
  );
};
