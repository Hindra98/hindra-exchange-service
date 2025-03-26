import { SharedConstants } from "@/core/constants/common-constants";
import { getStorage } from "@/core/storage/storage";

export interface ToggleStoreShape {
  value: boolean;
}

export const initialStateToggleSidebar: ToggleStoreShape = {
  value: getStorage(SharedConstants.TOGGLE_SIDEBAR) === "true",
};
