import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default function Map({ center, zoom }) {
    return (
        <div className='map'>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBk4oX3dA9zFy2yysc_EkD3LAXcdZGnyXs'}}
            defaultCenter={ center }
            defaultZoom={ zoom }
            >
                <LocationMarker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
        </div>
    )
}
