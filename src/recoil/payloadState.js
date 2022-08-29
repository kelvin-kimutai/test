import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const payloadState = atom({
  key: "payloadState",
  effects_UNSTABLE: [persistAtom],
  default: null,
});

export default payloadState;
