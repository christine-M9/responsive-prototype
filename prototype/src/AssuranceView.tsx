// AssuranceView.tsx
import React, { useState } from 'react';
import Map from './Map';

interface Enterprise {
  id: string;
  lat: number;
  lng: number;
  name: string;
  industry: string;
}

const AssuranceView: React.FC = () => {
  const [selectedEnterprise, setSelectedEnterprise] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [industryFilter, setIndustryFilter] = useState<string | null>(null);

  const [enterprises, setEnterprises] = useState<Enterprise[]>([
    { id: '1', lat: 37.7749, lng: -122.4194, name: 'Enterprise 1', industry: 'tech' },
    { id: '2', lat: 34.0522, lng: -118.2437, name: 'Enterprise 2', industry: 'finance' },
    // Add more data as needed
  ]);

  const handleMarkerClick = (id: string) => {
    setSelectedEnterprise(id);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleIndustryFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIndustryFilter(event.target.value === 'all' ? null : event.target.value);
  };

  const handlePopupEditClick = (id: string) => {
    // Implement your logic for opening an edit form for the selected enterprise
    // You can use state to manage the form data
    console.log(`Edit clicked for enterprise with ID ${id}`);
  };

  const filteredEnterprises = enterprises
    .filter((enterprise) => enterprise.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((enterprise) => !industryFilter || enterprise.industry === industryFilter);

  return (
    <div>
      <h1>Service Assurance Map View</h1>
      <input type="text" placeholder="Search enterprises..." value={searchTerm} onChange={handleSearch} />

      {/* Industry Filter */}
      <label>
        Industry Filter:
        <select value={industryFilter || 'all'} onChange={handleIndustryFilterChange}>
          <option value="all">All Industries</option>
          <option value="tech">Technology</option>
          <option value="finance">Finance</option>
          {/* Add more industries as needed */}
        </select>
      </label>

      <Map data={filteredEnterprises} onMarkerClick={handleMarkerClick} selectedEnterprise={selectedEnterprise} />
      {selectedEnterprise && <p>Selected Enterprise: {selectedEnterprise}</p>}
    </div>
  );
};

export default AssuranceView;
