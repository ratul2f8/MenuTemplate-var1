import {
  StudentActionsTypes,
  ActionType,
  StudentStore,
} from "../Student.types";
const INITIALSTATE: StudentStore = {
  currentSection: "home",
  toggle: false
};

export const studentSectionReducer = function (
  state: StudentStore = INITIALSTATE,
  action: ActionType
): StudentStore {
  switch (action.type) {
    case StudentActionsTypes.CHANGE_SECTION:
      return {
        ...state,
        currentSection: action.payload,
        toggle: false
      };
    case StudentActionsTypes.TOGGLE_MENU:
      return{
        ...state,
        toggle: !state.toggle
      }  
    default:
      return state;
  }
};
