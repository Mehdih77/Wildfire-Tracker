import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from './LocationInfoBox';

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default function Map({ eventData, center, zoom }) {

    const [locationInfo, setLocationInfo] = useState(null);

    const marker = eventData.map(ev => {
        // in if condition >>> id === 8 means categories should be Wildfires
        if (ev.categories[0].id === 8) {
            return <LocationMarker 
            lng={ev.geometries[0].coordinates[0]}
            lat={ev.geometries[0].coordinates[1]}
            onClick={() => setLocationInfo({id: ev.id, title: ev.title, date: ev.geometries[0].date})}    
            />
        }
        return null;
    })

    return (
        <div className='map'>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
            defaultCenter={ center }
            defaultZoom={ zoom }
            >
                {marker}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox locationInfo={locationInfo} />}
        </div>
    )
}
