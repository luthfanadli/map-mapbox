import React, { useState, useEffect, useRef } from 'react';
import "../style/Map.css";
import mapboxgl from 'mapbox-gl';
import { useSelector } from 'react-redux';

function Map({ lnglat }) {
    const lightMap = "mapbox://styles/mapbox/streets-v12";
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(106.81666);
    const [lat, setLat] = useState(-6.2000);
    const [zoom, setZoom] = useState(7);
    const marker = new mapboxgl.Marker()

    mapboxgl.accessToken = "pk.eyJ1IjoibHV0aGZhbndpY2Frc29ubyIsImEiOiJjbGJnY2gzMGEwZXBwM29xd3dmbzRtdHRkIn0.ty0WZVkVNGXyyxOzNiW7QA"

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: lightMap,
            center: [lng, lat],
            zoom: zoom
        })
    }, [])
    
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