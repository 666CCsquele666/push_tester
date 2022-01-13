import { geolocated } from "react-geolocated";
import '../App.css';

function Location({isGeolocationAvailable, isGeolocationEnabled, coords}) {
    if (!isGeolocationAvailable) return <p>Du er en idiot</p>
    if (!isGeolocationEnabled) return <p style={{fontSize:"40px", fontFamily:'fantasy',
        animationName: "extreme",
        animationDuration: "0.01s",
        animationIterationCount: "infinite",}}
        >Du skal give adgang din hund</p>
    
    return coords ? ( 
        <table style={{margin:"0 auto"}}>
                <tbody>
                    <tr>
                        <td style={{fontSize:"70px",
                                    animationName: "glow",
                                    animationDuration: "4s",
                                    animationIterationCount: "infinite",
                                    animationDirection:"alternate"}}>Latitude</td>
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
                                    animationDirection:"alternate"}}>Longitude</td>
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
                                    animationDirection:"alternate"}}>Altitude</td>
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
                                    animationDirection:"alternate"}}>Heading</td>
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
                                    animationDirection:"alternate"}}>Speed</td>
                        <td style={{fontSize:"70px",
                                    animationName: "glow",
                                    animationDuration: "4s",
                                    animationIterationCount: "infinite",
                                    animationDirection:"alternate"}}>{coords.speed}</td>
                    </tr>
                </tbody>
            </table>
    ) : (<p>2 min bro</p>);
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Location);