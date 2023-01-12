import React, { useState } from "react";
import "../style/LeftSideBar.css";
import { useSelector } from "react-redux";

function LeftSideBar({ lnglat, setLnglat }) {
    const featureCollection = useSelector((state) => state.featureCollection)
    const features = featureCollection[0].features
    const [name, setName] = useState([])
    
    return (
        <div className="left-side-bar">
            <div className="left-sidebar-container">
                <div className="left-sidebar-top">
                    <text>
                        {lnglat}
                    </text>
                    <text>
                        {name}
                    </text>
                </div>

                <div className="left-sidebar-bottom">
                    {features.map((poi) => {
                        return (
                            <button
                                key={poi.properties.name}
                                onClick={() => {
                                    setName(poi.properties.name);
                                    setLnglat(poi.geometry.coordinates);
                                }}>
                                {poi.properties.name}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar;