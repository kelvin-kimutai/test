/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import gsap from "gsap";

function Spinner({ pause }) {
  const tl = gsap.timeline({ repeat: -1, yoyo: true });
  useEffect(() => {
    tl.to(".lds-ring div", {
      duration: 3,
      borderColor: "#21C463 transparent transparent transparent",
    });
    tl.play();
  }, []);

  useEffect(() => {
    if (pause === true)
      gsap.to(".lds-ring div", {
        duration: 0.5,
        opacity: 0,
      });
    else
      gsap.to(".lds-ring div", {
        duration: 0.5,
        opacity: 1,
      });
  }, [pause]);

  return (
    <div className="relative h-full">
      <div className="absolute">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="w-full h-full grid place-content-center">
        <svg
          width="113"
          height="44"
          viewBox="0 0 113 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-auto mr-2 mt-2"
        >
          <g clipPath="url(#clip0_702_2575)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.78757 1.44082C8.76917 1.44082 7.9436 2.24398 7.9436 3.23473V40.765C7.9436 41.7558 8.76917 42.559 9.78757 42.559H27.8499C28.8683 42.559 29.6939 41.7558 29.6939 40.765V3.23473C29.6939 2.24399 28.8683 1.44082 27.8499 1.44082H9.78757ZM7.08594 3.23473C7.08594 1.78317 8.2955 0.606445 9.78757 0.606445H27.8499C29.342 0.606445 30.5515 1.78317 30.5515 3.23473V40.765C30.5515 42.2166 29.342 43.3933 27.8499 43.3933H9.78757C8.2955 43.3933 7.08594 42.2166 7.08594 40.765V3.23473Z"
              fill="#263470"
            />
            <path
              d="M20.1905 4.78662H17.3945C16.5229 4.78662 15.8164 5.47398 15.8164 6.32188V37.7195C15.8164 38.5674 16.5229 39.2548 17.3945 39.2548H20.1905C21.062 39.2548 21.7686 38.5674 21.7686 37.7195V6.32188C21.7686 5.47398 21.062 4.78662 20.1905 4.78662Z"
              fill="#263470"
            />
            <path
              d="M19.6255 8.16591C17.4008 7.49849 15.0461 7.34849 12.751 7.72799C10.4559 8.10748 8.28439 9.00587 6.4113 10.3508C4.53821 11.6958 3.01585 13.4498 1.96675 15.4717C0.917642 17.4935 0.371094 19.7267 0.371094 21.9915C0.371094 24.2564 0.917642 26.4896 1.96675 28.5114C3.01585 30.5333 4.53821 32.2873 6.4113 33.6323C8.28439 34.9772 10.4559 35.8756 12.751 36.2551C15.0461 36.6346 17.4008 36.4846 19.6255 35.8172V8.16591Z"
              fill="#21C463"
            />
            <path
              d="M15.4819 27.8824V29.7263H13.7666V27.9324C12.2608 27.8864 10.7986 27.4296 9.54688 26.6141L10.4817 24.6032C11.4546 25.2621 12.5863 25.6646 13.7666 25.7714V23.0179C11.8883 22.5757 9.78702 21.9666 9.78702 19.6053C9.78702 17.8615 11.0907 16.3596 13.7666 16.0592V14.2319H15.4819V16.0258C16.691 16.0958 17.8662 16.4417 18.9125 17.0354L18.0549 19.063C17.2608 18.6255 16.387 18.3421 15.4819 18.2286V21.0321C17.3602 21.4576 19.4271 22.0667 19.4271 24.3696C19.4271 26.0884 18.1406 27.5653 15.4819 27.8824ZM13.7666 20.5982V18.2536C12.9089 18.4539 12.5144 18.9295 12.5144 19.4718C12.5144 20.0142 13.0376 20.3646 13.7837 20.5982H13.7666ZM16.6826 24.5699C16.6826 23.9942 16.1937 23.6771 15.4647 23.4268V25.7046C16.3224 25.5211 16.6998 25.0955 16.6998 24.5699H16.6826Z"
              fill="white"
            />
            <path
              d="M40.2095 9.83472V37.0021H34.3945V9.83472H40.2095Z"
              fill="#263470"
            />
            <path
              d="M50.6019 13.0303C50.6038 13.4645 50.5102 13.8941 50.3274 14.2902C50.1411 14.6803 49.879 15.0316 49.5555 15.3248C49.2303 15.628 48.8491 15.8686 48.432 16.0341C47.9972 16.2094 47.5304 16.2974 47.0597 16.2927C46.6056 16.2982 46.1555 16.21 45.7389 16.0341C45.3319 15.8642 44.96 15.6239 44.6411 15.3248C44.3246 15.0313 44.071 14.6797 43.895 14.2902C43.7149 13.8935 43.6242 13.4639 43.6291 13.0303C43.6242 12.5886 43.7148 12.1508 43.895 11.7454C44.0727 11.3495 44.3259 10.9899 44.6411 10.6857C44.9581 10.3865 45.3306 10.1486 45.7389 9.98483C46.1601 9.81627 46.6132 9.73664 47.0683 9.7512C47.539 9.74653 48.0058 9.83451 48.4406 10.0099C48.8586 10.1697 49.2404 10.4078 49.5641 10.7107C49.887 11.0141 50.1488 11.3735 50.336 11.7704C50.5124 12.1682 50.6029 12.5971 50.6019 13.0303V13.0303Z"
              fill="#21C463"
            />
            <path
              d="M50.0111 18.1868H44.2305V37.0103H50.0111V18.1868Z"
              fill="#263470"
            />
            <path
              d="M59.4883 20.5064C60.2321 19.7294 61.1012 19.0756 62.0612 18.5706C63.1234 18.0481 64.3021 17.7901 65.4919 17.8197C66.4656 17.8109 67.4263 18.0374 68.2879 18.4788C69.1698 18.9296 69.9307 19.5755 70.5092 20.3645C71.1812 21.2771 71.6781 22.3004 71.9758 23.385C72.3461 24.706 72.525 26.0709 72.5075 27.44C72.5201 28.7704 72.3145 30.0942 71.8986 31.3616C71.5249 32.4939 70.9438 33.5511 70.1833 34.4822C69.4873 35.3428 68.61 36.0483 67.6103 36.5514C66.5564 37.0527 65.3955 37.3044 64.2225 37.2857C63.345 37.3124 62.4707 37.1707 61.6496 36.8685C60.9704 36.5939 60.3418 36.2135 59.7884 35.7421V42.9678H54.0078V18.1868H57.5843C57.896 18.1594 58.2078 18.2386 58.4661 18.4107C58.7244 18.5827 58.9129 18.837 58.9994 19.1296L59.4883 20.5064ZM59.8399 31.8873C60.2292 32.3132 60.7131 32.647 61.255 32.8635C61.7655 33.0598 62.31 33.1589 62.8589 33.1555C63.3682 33.1621 63.8725 33.0566 64.334 32.8468C64.8038 32.6222 65.2057 32.283 65.5005 31.8622C65.8673 31.3238 66.129 30.7241 66.2724 30.0934C66.4772 29.2234 66.5722 28.3324 66.5554 27.44C66.5683 26.6005 66.4936 25.7618 66.3324 24.9369C66.2209 24.3505 66.0093 23.7865 65.7063 23.2681C65.4772 22.8877 65.1448 22.576 64.7457 22.367C64.3545 22.1869 63.9263 22.0956 63.4935 22.1C62.7704 22.0716 62.0521 22.2269 61.4094 22.5506C60.8071 22.8955 60.2751 23.3452 59.8399 23.8772V31.8873Z"
              fill="#263470"
            />
            <path
              d="M75.0813 20.7984C76.2159 19.8141 77.5351 19.052 78.9665 18.5539C80.4395 18.0592 81.988 17.8109 83.5464 17.8197C84.6287 17.8025 85.7041 17.9924 86.7111 18.3787C87.6112 18.7195 88.4247 19.2462 89.0954 19.9223C89.7583 20.5935 90.2695 21.3921 90.5963 22.2669C90.9545 23.2209 91.1318 24.2301 91.1195 25.2456V37.002H88.4779C88.0514 37.0286 87.6247 36.9542 87.2343 36.7851C86.8976 36.5715 86.6487 36.2496 86.531 35.8756L86.1193 34.841C85.6391 35.2415 85.1673 35.5919 84.7214 35.9006C84.2838 36.198 83.8186 36.455 83.3319 36.6683C82.8423 36.8802 82.3304 37.0397 81.8053 37.1439C81.2111 37.2486 80.6081 37.2989 80.0042 37.2941C79.188 37.3045 78.375 37.1919 77.5942 36.9603C76.9182 36.7569 76.2931 36.4188 75.7588 35.9674C75.2472 35.5223 74.848 34.9684 74.5924 34.3487C74.306 33.6338 74.1662 32.8713 74.1807 32.1042C74.1942 31.3878 74.373 30.6835 74.7039 30.0433C75.1301 29.2692 75.7532 28.6142 76.5136 28.1409C77.5674 27.479 78.7266 26.9913 79.9442 26.6975C81.7427 26.2629 83.5886 26.0416 85.4418 26.0383V25.2039C85.5202 24.3524 85.2728 23.5027 84.7471 22.8176C84.4884 22.5642 84.1771 22.3676 83.8339 22.241C83.4907 22.1143 83.1236 22.0606 82.7573 22.0833C82.1771 22.061 81.5971 22.1343 81.042 22.3003C80.6414 22.4296 80.2538 22.5944 79.8841 22.7926C79.5411 22.9678 79.2066 23.1347 78.8807 23.2765C78.5166 23.433 78.1207 23.5072 77.7229 23.4934C77.3662 23.5027 77.0154 23.4036 76.7194 23.2098C76.454 23.0215 76.227 22.7866 76.0504 22.5172L75.0813 20.7984ZM85.4847 29.3424C84.5295 29.3731 83.5779 29.4707 82.6372 29.6345C82.024 29.7403 81.4273 29.9226 80.8619 30.1768C80.4941 30.3382 80.1815 30.5988 79.9613 30.9278C79.789 31.1981 79.6998 31.5108 79.704 31.8289C79.6764 32.0798 79.711 32.3335 79.805 32.5687C79.899 32.804 80.0497 33.0138 80.2444 33.1806C80.7153 33.4759 81.2724 33.6136 81.831 33.5727C82.5059 33.5865 83.1758 33.4584 83.7951 33.1973C84.4381 32.8886 85.019 32.4704 85.5104 31.9624L85.4847 29.3424Z"
              fill="#263470"
            />
            <path
              d="M112.33 9.83472V37.0021H108.754C108.441 37.0266 108.13 36.9465 107.871 36.775C107.612 36.6035 107.421 36.3509 107.33 36.0592L106.884 34.6241C106.509 35.0164 106.104 35.3817 105.675 35.7171C105.248 36.0403 104.788 36.3199 104.302 36.5515C103.797 36.7917 103.265 36.9737 102.716 37.0938C102.113 37.2244 101.498 37.2888 100.88 37.2857C99.905 37.2936 98.9424 37.0703 98.0758 36.6349C97.1998 36.1791 96.4428 35.534 95.863 34.7492C95.1925 33.8328 94.6958 32.807 94.3964 31.7204C94.0245 30.394 93.8455 29.0234 93.8647 27.6487C93.8518 26.3217 94.0545 25.001 94.465 23.7354C94.8361 22.6021 95.4175 21.5444 96.1804 20.6149C96.8932 19.7528 97.7883 19.05 98.8048 18.554C99.8561 18.0531 101.013 17.7988 102.184 17.8114C103.047 17.7882 103.907 17.9299 104.714 18.2286C105.394 18.5074 106.024 18.8874 106.584 19.355V9.83472H112.33ZM106.549 23.2265C106.162 22.8023 105.677 22.4735 105.134 22.2669C104.622 22.0766 104.079 21.9804 103.531 21.9833C103.021 21.9784 102.517 22.0838 102.055 22.292C101.583 22.5172 101.181 22.8598 100.889 23.2849C100.517 23.8205 100.254 24.4212 100.117 25.0538C99.9129 25.9154 99.8179 26.798 99.834 27.6821C99.8211 28.5216 99.8958 29.3603 100.057 30.1852C100.163 30.773 100.375 31.3379 100.683 31.8539C100.91 32.2363 101.243 32.5486 101.644 32.7551C102.033 32.9402 102.463 33.0318 102.896 33.0221C103.28 33.029 103.663 32.9898 104.037 32.9053C104.364 32.8334 104.681 32.7212 104.98 32.5715C105.276 32.4248 105.55 32.2395 105.795 32.0208C106.065 31.7804 106.318 31.521 106.549 31.2448V23.2265Z"
              fill="#263470"
            />
            <path
              d="M52.8828 15.4509H53.8397V13.4632H54.8121C56.0286 13.4632 56.8499 12.8876 56.8499 11.6788C56.8499 10.6389 56.2726 9.87146 54.9244 9.87146H52.8828V15.4509ZM53.8397 12.6036V10.7195H54.785C55.4746 10.7195 55.8581 11.0764 55.8581 11.6635C55.8581 12.2161 55.5056 12.6075 54.7191 12.6075L53.8397 12.6036Z"
              fill="#21C463"
            />
            <path
              d="M60.476 15.5123C62.1031 15.5123 63.3157 14.3649 63.3157 12.6612C63.3157 10.9574 62.1031 9.81006 60.476 9.81006C58.783 9.81006 57.6247 11.0226 57.6247 12.6612C57.6247 14.3036 58.783 15.5123 60.476 15.5123ZM60.476 14.6259C59.3758 14.6259 58.6203 13.7548 58.6203 12.6612C58.6203 11.5675 59.3758 10.6926 60.476 10.6926C61.5181 10.6926 62.3201 11.5138 62.3201 12.6573C62.3201 13.8009 61.5181 14.6259 60.476 14.6259Z"
              fill="#21C463"
            />
            <path
              d="M70.2929 9.87146L69.0764 13.9121H69.0687L67.9685 9.87146H66.9496L65.8416 13.9006H65.8338L64.629 9.87146H63.6024L65.3883 15.4509H66.2832L67.461 11.2567H67.4726L68.627 15.4509H69.522L71.3079 9.87146H70.2929Z"
              fill="#21C463"
            />
            <path
              d="M72.2532 15.4509H75.9645V14.6029H73.2101V13.1101H75.306V12.2583H73.2101V10.7195H75.8018V9.87146H72.2571L72.2532 15.4509Z"
              fill="#21C463"
            />
            <path
              d="M81.2836 15.4509L79.8425 13.3749V13.3596C80.6057 13.1524 81.0783 12.5959 81.0783 11.6788C81.0783 10.6389 80.4895 9.86762 79.1568 9.86762H77.0764V15.4509H78.0294V13.4593H78.7887L80.133 15.4509H81.2836ZM78.0294 10.7195H79.0096C79.6992 10.7195 80.0866 11.0725 80.0866 11.6596C80.0866 12.2161 79.7146 12.6075 78.9437 12.6075H78.0294V10.7195Z"
              fill="#21C463"
            />
            <path
              d="M82.2638 15.4509H85.9752V14.6029H83.2207V13.1101H85.3166V12.2583H83.2207V10.7195H85.8124V9.87146H82.2677L82.2638 15.4509Z"
              fill="#21C463"
            />
            <path
              d="M87.0831 15.4509H88.9001C90.7093 15.4509 91.8018 14.3151 91.8018 12.6689C91.8018 11.0188 90.6628 9.87146 88.8768 9.87146H87.0831V15.4509ZM88.04 14.6029V10.7195H88.8962C90.0236 10.7195 90.8139 11.5368 90.8139 12.6689C90.8139 13.774 90.0352 14.599 88.842 14.599L88.04 14.6029Z"
              fill="#21C463"
            />
            <path
              d="M98.0158 12.5039V12.4923C98.5891 12.2659 98.841 11.7479 98.841 11.2337C98.841 10.3204 98.1707 9.87146 97.0085 9.87146H95.0482V15.4509H97.2758C98.5233 15.4509 99.1238 14.8101 99.1238 13.9198C99.1238 13.1524 98.6666 12.665 98.0158 12.5039ZM96.0051 10.7195H96.8226C97.5625 10.7195 97.8647 11.0073 97.8647 11.4409C97.8647 11.9705 97.3959 12.1815 96.9194 12.1815H96.0051V10.7195ZM96.9969 14.599H96.0051V13.0027H97.0124C97.7446 13.0027 98.1242 13.3174 98.1242 13.8162C98.1242 14.3419 97.6632 14.5952 96.993 14.599H96.9969Z"
              fill="#21C463"
            />
            <path
              d="M103.184 9.87146L101.929 12.0357H101.905L100.646 9.87146H99.5538L101.433 12.9874V15.4509H102.393V12.9874L104.288 9.87146H103.184Z"
              fill="#21C463"
            />
          </g>
          <defs>
            <clipPath id="clip0_702_2575">
              <rect
                width="111.959"
                height="42.7869"
                fill="white"
                transform="translate(0.378906 0.606445)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Spinner;
