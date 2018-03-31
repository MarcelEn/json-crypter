export const actionNames = {
    TOGGLE_SHOW_SETTING: "TOGGLE_SHOW_SETTING",
    TOGGLE_OPEN_MENU_POINT: "TOGGLE_OPEN_MENU_POINT"
}

export const actions = {
    toggleShowSettings: () => ({
        type: actionNames.TOGGLE_SHOW_SETTING
    }),
    toggleOpenMenuPoint: path => ({
        type: actionNames.TOGGLE_OPEN_MENU_POINT,
        payload: path
    })
}