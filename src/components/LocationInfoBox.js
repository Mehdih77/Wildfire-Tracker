export default function LocationInfoBox({ locationInfo }) {
    return (
        <div className='location-info'>
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{locationInfo.id}</strong></li>
                <li>TITLE: <strong>{locationInfo.title}</strong></li>
                <li>DATE: <strong>{locationInfo.date}</strong></li>
            </ul>
        </div>
    )
}
