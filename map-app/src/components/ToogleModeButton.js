import React from "react";
import '../style/ToogleModeButton.css';
import { setDarkMode } from "../stores/actionCreator";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function ToogleModeButton() {
    const darkMode = useSelector((state) => state.darkMode);
    const dispatch = useDispatch();

    const handleClick = (payload) => {
        dispatch(setDarkMode(payload))
    };
    
    return (
        <div className="toogle-mode-button">
            <label className="switch">
                <input
                    onClick={() => handleClick(darkMode ? false : true)}
                    type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default ToogleModeButton;