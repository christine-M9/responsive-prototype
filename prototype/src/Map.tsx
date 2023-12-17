// Map.tsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple, LeafletMouseEvent } from 'leaflet';

interface MapProps {
  data: Array<{ id: string; lat: number; lng: number; name: string }>;
  onMarkerClick: (id: string) => void;
}

const Map: React.FC<MapProps> = ({ data, onMarkerClick }) => {
  const defaultCenter: LatLngTuple = [0, 0];
  const defaultZoom = 2;

  const handleMarkerClick = (event: LeafletMouseEvent) => {
    const id = event.target.options.id as string;
    onMarkerClick(id);
  };

  return (
    <MapContainer center={defaultCenter} zoom={defaultZoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((item) => (
        <Marker
          key={item.id}
          position={[item.lat, item.lng]}
          eventHandlers={{ click: handleMarkerClick }}
        >
          <Popup>{item.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;