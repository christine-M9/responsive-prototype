import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Make sure to import the 'leaflet' library

interface MapProps {
  data: Array<{ id: string; lat: number; lng: number; name: string }>;
  onMarkerClick: (id: string) => void;
  selectedEnterprise: string | null;
}

const Map: React.FC<MapProps> = ({ data, onMarkerClick, selectedEnterprise }) => {
  const defaultCenter: L.LatLngExpression = [0, 0];
  const defaultZoom = 2;

  const handleMarkerClick = (event: L.LeafletMouseEvent) => {
    const id = event.target.options.id as string;
    onMarkerClick(id);
  };

  return (
    <MapContainer center={defaultCenter} zoom={defaultZoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((item) => {
        const markerIcon = new L.Icon({
          iconUrl: selectedEnterprise === item.id ? 'selected-marker.png' : 'default-marker.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        });

        return (
          <Marker
            key={item.id}
            position={[item.lat, item.lng]}
            eventHandlers={{ click: handleMarkerClick }}
            icon={markerIcon}
          >
            <Popup>{item.name}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
