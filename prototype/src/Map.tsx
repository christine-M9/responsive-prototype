// Map.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Make sure to import the 'leaflet' library

interface MapProps {
  data: Array<{ id: string; lat: number; lng: number; name: string; industry: string }>;
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

  const handlePopupEditClick = (id: string) => {
    // Implement your logic for opening an edit form for the selected enterprise
    // You can use state to manage the form data
    console.log(`Edit clicked for enterprise with ID ${id}`);
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
            <Popup>
              <div>
                <p>{item.name}</p>
                <p>Industry: {item.industry}</p>
                {/* Add other enterprise details */}
                <button onClick={() => handlePopupEditClick(item.id)}>Edit Address</button>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
