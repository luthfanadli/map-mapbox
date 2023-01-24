import React, { useEffect, useRef } from 'react';
import "../style/Map.css";
import mapboxgl from 'mapbox-gl';
import { useSelector } from 'react-redux';

function Map({ lnglat }) {
    const darkMode = useSelector((state) => state.darkMode);
    const lightMap = "mapbox://styles/mapbox/light-v11";
    const darkMap = "mapbox://styles/mapbox/dark-v11";
    const mapContainer = useRef(null);
    const map = useRef(null);
    const lng = 114.594376;
    const lat = -3.318607;
    const zoom = 4;
    const marker = new mapboxgl.Marker();

    mapboxgl.accessToken = `${process.env.REACT_APP_ACCESS_TOKEN}`

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: localStorage.theme === "dark" ? darkMap : lightMap,
            center: [lng, lat],
            zoom: zoom
        })
    }, [])

    useEffect(() => {
        darkMode ? map.current.setStyle(darkMap) : map.current.setStyle(lightMap);
    }, [darkMode]);

    useEffect(() => {
        if (lnglat[0] && lnglat[1]) {
            map.current.flyTo({
                center: [lnglat[0], lnglat[1]],
                essential: true,
                duration: 5000,
                zoom: 7
            })
            marker
                .setLngLat([lnglat[0], lnglat[1]])
                .addTo(map.current)
        }
    }, [lnglat])

    return (
        <div className="map-container">
            <div id="map" ref={mapContainer}></div>
        </div>
    )
}

export default Map;