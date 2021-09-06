import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/fire-alert';

export default function LocationMarker({ lat, lng, onClick}) {
    //! lat & lng : google map handle it automatically

    
    return (
        <div className='location-marker' onClick={onClick}>
         <Icon icon={locationIcon} className='location-icon' />
        </div>
    )
}
