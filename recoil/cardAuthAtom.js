import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const cardAuthState = atom({
  key: "cardAuthState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export default cardAuthState;
