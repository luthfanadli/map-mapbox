import React, { useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import Map from "../components/Map";
import NavigationBar from "../components/NavigationBar";
function Home() {
    const [lnglat, setLnglat] = useState([])

    return (
        <div>
            <NavigationBar />
            <LeftSideBar
                lnglat={lnglat}
                setLnglat={setLnglat}
            />
            <Map lnglat={lnglat} />
        </div>
    )
}

export default Home;