import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const uiState = atom({
  key: "uiState",
  effects_UNSTABLE: [persistAtom],
  default: {
    selectedCountry: {},
  },
});

export default uiState;
