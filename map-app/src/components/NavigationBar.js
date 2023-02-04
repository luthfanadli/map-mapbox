import React from "react";
import "../style/NavigationBar.css";
import ToogleModeButton from "./ToogleModeButton";
import { useTranslation } from 'react-i18next';

function NavigationBar() {
    const { i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-left-section">
                    <ToogleModeButton />
                </div>
                <div className="navbar-right-section">
                    <select
                        onClick={(e) => handleClick(e.target.value)}
                        style={{ borderRadius: '3px', margin: '1rem' }}
                    >
                        <option value={"id"}
                        > ID </option>
                        <option value={"en"}
                        > EN </option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;