import { HiChevronLeft } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import payloadState from "../../recoil/payloadState";
import CountryDropdown from "../dropdowns/countryDropdown";

export default function TopSection() {
  const location = useLocation();
  const payload = useRecoilValue(payloadState);

  return (
    <div className="relative w-full font-medium">
      <div className="absolute -top-8">
        <Link
          className="flex w-fit items-center gap-2"
          to={payload.merchant_site_data.fail_redirect_url}
        >
          <HiChevronLeft className="h-6 w-auto" />
          <div>Back to {payload.client_data.client_name}</div>
        </Link>
      </div>
      <div className="flex items-center rounded-t-xl border-b border-white bg-lipad-green px-2 py-2">
        <div className="flex h-full w-full items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-white p-1">
            <img
              className="h-full object-cover"
              src={payload.client_data.client_logo}
              alt=""
            />
          </div>
          <span className="text-white">{payload.client_data.client_name}</span>
        </div>
        {location.pathname === "/" ? (
          <CountryDropdown countries={payload.client_data.countries} />
        ) : null}
      </div>
    </div>
  );
}
