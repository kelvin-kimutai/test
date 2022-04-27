import { atom } from "recoil";

const payloadState = atom({
  key: "payloadState",
  default: null,
});

export default payloadState;
