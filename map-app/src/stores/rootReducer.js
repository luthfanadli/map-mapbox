import { SET_DARK_MODE } from "./actionType"


const featureCollection = [
    {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        106.816666,
                        -6.200000
                    ]
                },
                "properties": {
                    "name": "Jakarta, Indonesia"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        113.482498,
                        -7.161367
                    ]
                },
                "properties": {
                    "name": "Pamekasan, Pamekasan Regency, East Jawa, Indonesia"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        95.323753,
                        5.548290
                    ]
                },
                "properties": {
                    "name": "Banda Aceh, Banda Aceh City, Aceh, Indonesia"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        128.190643,
                        -3.654703
                    ]
                },
                "properties": {
                    "name": "Ambon, Ambon Island, Maluku, Indonesia"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        120.195465,
                        -2.994494
                    ]
                },
                "properties": {
                    "name": "Palopo, Wara, South Sulawesi, Indonesia"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        107.519760,
                        -7.025253
                    ]
                },
                "properties": {
                    "name": "Soreang, Bandung, West Java, Indonesia"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        101.445007,
                        1.694394
                    ]
                },
                "properties": {
                    "name": "Dumai, Dumai Province, Riau, Indonesia"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        99.068169,
                        2.970042
                    ]
                },
                "properties": {
                    "name": "Pematang Siantar City, North Sumatra, Indonesia"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        110.828316,
                        -7.550676
                    ]
                },
                "properties": {
                    "name": "Banjarsari, Surakarta City, Central Java, Indonesia"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        97.318123,
                        5.051701
                    ]
                },
                "properties": {
                    "name": "Lhoksukon, Aceh Utara, Aceh, Indonesia"
                }
            }
        ]
    }
]

const initialState = {
    darkMode: false,
    featureCollection: featureCollection
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_DARK_MODE:
            return {
                ...state,
                darkMode: payload
            }
        default:
            return state
    }
}

export default rootReducer;