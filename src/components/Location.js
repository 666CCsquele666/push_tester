import { geolocated } from "react-geolocated";
import '../App.css';
import TheLocalbase from './TheLocalbase';
import Map from "./Map";
import { Link, Route, Routes } from 'react-router-dom';
import NoMatch from "./NoMatch";

function Location({isGeolocationAvailable, isGeolocationEnabled, coords}) {
    if (!isGeolocationAvailable) return <p>Du er en idiot</p>
    if (!isGeolocationEnabled) return <p style={{fontSize:"40px", fontFamily:'fantasy',
        animationName: "extreme",
        animationDuration: "0.01s",
        animationIterationCount: "infinite",}}
        >Du skal give adgang din hund</p>
    
    return coords ? ( 
        <>
        <table style={{margin:"0 auto"}}>
            <h1>Dette er min menneskelort</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/map">Map</Link>
                    <Link to="/database">Database</Link>
                    <Link to="/">jaaaa</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Location />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/database" element={<TheLocalbase />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>

        
                <tbody>
                    <tr>
                        <td style={{fontSize:"70px",
                                    animationName: "glow",
                                    animationDuration: "4s",
                                    animationIterationCount: "infinite",
                                    animationDirection:"alternate"}}>Latitude:</td>
                        <td style={{fontSize:"70px",
                                    animationName: "glow",
                                    animationDuration: "4s",
                                    animationIterationCount: "infinite",
                                    animationDirection:"alternate"}}>{coords.latitude}</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:"70px",
                                    animationName: "glow",
                                    animationDuration: "4s",
                                    animationIterationCount: "infinite",
                                    animationDirection:"alternate"}}>Longitude:</td>
                        <td style={{fontSize:"70px",
                                    animationName: "glow",
                                    animationDuration: "4s",
                                    animationIterationCount: "infinite",
                                    animationDirection:"alternate"}}>{coords.longitude}</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:"70px",
                                    animationName: "glow",
                                    animationDuration: "4s",
                                    animationIterationCount: "infinite",
                                    animationDirection:"alternate"}}>Altitude:</td>
                        <td style={{fontSize:"70px",
                                    animationName: "glow",
                                    animationDuration: "4s",
                                    animationIterationCount: "infinite",
                                    animationDirection:"alternate"}}>{coords.altitude}</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:"70px",
                                    animationName: "glow",
                                    animationDuration: "4s",
                                    animationIterationCount: "infinite",
                                    animationDirection:"alternate"}}>Heading:</td>
                        <td style={{fontSize:"70px",
                                    animationName: "glow",
                                    animationDuration: "4s",
                                    animationIterationCount: "infinite",
                                    animationDirection:"alternate"}}>{coords.heading}</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:"70px",
                                    animationName: "glow",
                                    animationDuration: "4s",
                                    animationIterationCount: "infinite",
                                    animationDirection:"alternate"}}>Speed:</td>
                        <td style={{fontSize:"70px",
                                    animationName: "glow",
                                    animationDuration: "4s",
                                    animationIterationCount: "infinite",
                                    animationDirection:"alternate"}}>{coords.speed}</td>
                    </tr>
                </tbody>
                <TheLocalbase />
                <section className="kort">
                    <Map />
                </section>
            </table>
            </>
    ) : (<p>2 min bro</p>);
    
    
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
    
})(Location);
