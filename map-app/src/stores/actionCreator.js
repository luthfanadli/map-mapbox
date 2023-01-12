import { SET_DARK_MODE } from "./actionType";

export const setDarkMode = (payload) => {
    return (dispatch) => {
        dispatch({
            type: SET_DARK_MODE,
            payload
        })
        localStorage.setItem("theme", payload ? "dark" : "light")
    }
}