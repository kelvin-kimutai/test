import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

const uiState = atom({
  key: "uiState",
  default: {
    toast: false,
    htmlString: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export default uiState;
