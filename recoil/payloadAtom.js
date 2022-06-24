import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

const payloadState = atom({
  key: "payloadState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export default payloadState;
