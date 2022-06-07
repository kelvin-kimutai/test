import { atom } from "recoil";

const uiState = atom({
  key: "uiState",
  default: {
    toast: false,
  },
});

export default uiState;
