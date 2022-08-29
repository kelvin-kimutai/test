import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const checkoutState = atom({
  key: "checkoutState",
  effects_UNSTABLE: [persistAtom],
  default: null,
});

export default checkoutState;
