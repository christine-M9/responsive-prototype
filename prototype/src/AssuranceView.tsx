// AssuranceView.tsx
import React, { useState } from 'react';
import Map from './Map';

interface Enterprise {
  id: string;
  lat: number;
  lng: number;
  name: string;
}

const AssuranceView: React.FC = () => {
  const [selectedEnterprise, setSelectedEnterprise] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [enterprises, setEnterprises] = useState<Enterprise[]>([
    { id: '1', lat: 37.7749, lng: -122.4194, name: 'Enterprise 1' },
    { id: '2', lat: 34.0522, lng: -118.2437, name: 'Enterprise 2' },
    // Add more data as needed
  ]);

  const handleMarkerClick = (id: string) => {
    setSelectedEnterprise(id);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredEnterprises = enterprises.filter((enterprise) =>
    enterprise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Service Assurance Map View</h1>
      <input type="text" placeholder="Search enterprises..." value={searchTerm} onChange={handleSearch} />
      <Map data={filteredEnterprises} onMarkerClick={handleMarkerClick} selectedEnterprise={selectedEnterprise} />
      {selectedEnterprise && <p>Selected Enterprise: {selectedEnterprise}</p>}
    </div>
  );
};

export default AssuranceView;
