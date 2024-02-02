import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useContext, useEffect } from 'react';
import { Context } from '../context';
import { Icon } from 'leaflet';

function Map()
{
    const { location } = useContext(Context);
    const legalIcon = new Icon ({
        iconUrl : 'https://upload.wikimedia.org/wikipedia/commons/8/81/Stop_sign.png',
        iconSize : [35,35], 
        iconAnchor : [22,94],
        popupAnchor : [-3, -76] 
    
      })
    return (   
        <MapContainer  center={location}  zoom={13} >  
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={legalIcon} position={location}>
                <Popup>
                    Stop Location
                </Popup>
            </Marker>
            
        </MapContainer>
        );
}

export default Map;
