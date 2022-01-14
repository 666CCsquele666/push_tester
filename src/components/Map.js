import ReactMapGL, {Marker, NavigationControl, GeolocateControl} from 'react-map-gl';
import {useState} from 'react';

function Map() {

    const [viewport, setViewport] = useState({
        latitude: 55.6860989,
        longitude: 12.5601893,
        zoom:16,
        width: "100vp",
        height: "50vh"
    });

    const navigationControlStyle = {
        right: 20,
        top: 20,
    }

    const GeolocateControlStyle = {
        left: 20,
        top: 20,
    }

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            onViewportChange={setViewport}
            mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
        >   
            <NavigationControl style={navigationControlStyle}/>
            <GeolocateControl 
                style={GeolocateControlStyle} 
                trackUserLocation={true}
                positionOptions={{enableHighAccuracy: true}}
                showAccuracyCircle={true}/>
            <Marker latitude={55.6860989} longitude={12.5601893}>
                <div className="marker"></div>
            </Marker>
        </ReactMapGL>
    );
}

export default Map;