import { StudentActionsTypes, ActionType } from "../Student.types";

export const changeStudentSection  = function( section: string): ActionType{
    return {
        type: StudentActionsTypes.CHANGE_SECTION,
        payload: section
    }
}
export const toggleMenu = function():ActionType{
    return{
        type: StudentActionsTypes.TOGGLE_MENU
    }
}