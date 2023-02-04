import React, { useState } from "react";
import "../style/LeftSideBar.css";
import { useSelector } from "react-redux";
import PlaceIcon from '@mui/icons-material/Place';
import CloseIcon from '@mui/icons-material/Close';
import MapIcon from '@mui/icons-material/Map';
import { useTranslation } from 'react-i18next';

function LeftSideBar({ lnglat, setLnglat }) {
    const featureCollection = useSelector((state) => state.featureCollection)
    const features = featureCollection[0].features
    const [name, setName] = useState([])

    const [open, setOpen] = useState(true)

    const { t } = useTranslation();

    return (
        <>
            <button
                onClick={() => (open ? setOpen(false) : setOpen(true))}
                style={{ backgroundColor: '#06817c', border: 'none', cursor: 'pointer', borderRadius: '8px', position: 'absolute', left: '16px', top: '115px', zIndex: '10000', height: '2.2rem', width: '2.5rem' }}>
                {open === true ?
                    <CloseIcon sx={{ color: 'white' }} /> :
                    <MapIcon sx={{ color: 'white' }} />
                }
            </button>
            {open === true ?
                <div className="left-side-bar">
                    <div className="left-sidebar-container">
                        <div className="left-sidebar-top">
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px', minHeight: '50%' }}>
                                <PlaceIcon sx={{ color: 'white' }} />
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div>
                                        <text style={{ color: 'white' }}>
                                            {t('SelectedRegion.1')}
                                        </text>
                                    </div>
                                    <text style={{ color: 'white', fontWeight: 'bold' }}>
                                        {name}
                                    </text>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50%', gap: '1rem', flexDirection: 'row' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                    <text style={{ color: 'white' }}>
                                        Longitude
                                    </text>
                                    <text style={{ color: 'white', fontWeight: 'bold' }}>
                                        {lnglat[0]}
                                    </text>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                    <text style={{ color: 'white' }}>
                                        Latitude
                                    </text>
                                    <text style={{ color: 'white', fontWeight: 'bold' }}>
                                        {lnglat[1]}
                                    </text>
                                </div>

                            </div>
                        </div>

                        <div className="left-sidebar-mid">
                            <text> {t('SimilliarPlace.1')}</text>
                            {/* <button
                                style={{ backgroundColor: '#06817c', border: 'none', cursor: 'pointer', borderRadius: '5px', height: 'fit-content', width: 'fit-content', color: '#ffffff', fontSize: '0.rem' }}
                            > + Add Point</button> */}
                        </div>

                        <div className="left-sidebar-bottom">
                            {features.map((poi) => {
                                return (
                                    <div
                                        style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid black', padding: '1rem' }}
                                    >
                                        <text>
                                            {poi.properties.name}
                                        </text>
                                        <span style={{ display: 'flex', flexDirection: 'row', gap: '3rem', justifyContent: 'space-between' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <text style={{ fontSize: 'small' }}>
                                                    Longitude
                                                </text>
                                                <text>
                                                    {poi.geometry.coordinates[0]}
                                                </text>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <text style={{ fontSize: 'small' }}>
                                                    Latitude
                                                </text>
                                                <text>
                                                    {poi.geometry.coordinates[1]}
                                                </text>
                                            </div>
                                            <button
                                                style={{ backgroundColor: '#06817c', border: 'none', cursor: 'pointer', borderRadius: '8px', height: '50%' }}
                                                key={poi.properties.name}
                                                onClick={() => {
                                                    setName(poi.properties.name);
                                                    setLnglat(poi.geometry.coordinates);
                                                }}
                                            >
                                                <PlaceIcon sx={{ color: 'white' }} />
                                            </button>
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}

export default LeftSideBar;