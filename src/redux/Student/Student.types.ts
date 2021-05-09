export enum StudentActionsTypes{
    CHANGE_SECTION = "CHANGE_SECTION",
    TOGGLE_MENU = "TOGGLE_MENU"
}
export interface ActionType{
    type: StudentActionsTypes,
    payload?: any
}
export interface StudentStore{
    currentSection: string,
    toggle: boolean
}