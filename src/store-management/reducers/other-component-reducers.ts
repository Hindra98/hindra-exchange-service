import { ActionTypes } from "../actions/constants/action-types";
import { produce } from "immer";
import { initialStateToggleSidebar, ToggleStoreShape } from "../actions/other-component";

export const toggleSidebarReducer = (state: ToggleStoreShape = initialStateToggleSidebar, args) =>{
    switch(args.type){
        case ActionTypes.TOGGLE_SIDEBAR:
            return produce(state, draftState => {
                draftState.value = args.payload.query === "true";
            })

        default:
            return state;
    }
}
