// AssuranceView.tsx

import React, { useState } from 'react';
import Map from './Map';

const AssuranceView: React.FC = () => {
  const [selectedEnterprise, setSelectedEnterprise] = useState<string | null>(null);

  const enterprises = [
    { id: '1', lat: 37.7749, lng: -122.4194, name: 'Enterprise 1' },
    { id: '2', lat: 34.0522, lng: -118.2437, name: 'Enterprise 2' },
    // Add more data as needed
  ];

  const handleMarkerClick = (id: string) => {
    setSelectedEnterprise(id);
  };

  return (
    <div>
      <h1>Service Assurance Map View</h1>
      <Map data={enterprises} onMarkerClick={handleMarkerClick} />
      {selectedEnterprise && <p>Selected Enterprise: {selectedEnterprise}</p>}
    </div>
  );
};

export default AssuranceView;
