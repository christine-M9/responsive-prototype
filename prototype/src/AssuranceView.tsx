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
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);
  const [editFormData, setEditFormData] = useState<Enterprise | null>(null);

  const enterprises: Enterprise[] = [
    { id: '1', lat: 37.7749, lng: -122.4194, name: 'Enterprise 1', industry: 'tech' },
    { id: '2', lat: 34.0522, lng: -118.2437, name: 'Enterprise 2', industry: 'finance' },
    // Add more data as needed
  ];

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
    // Find the selected enterprise based on the id
    const selectedEnterprise = enterprises.find((enterprise) => enterprise.id === id);

    // Open the edit form
    setIsEditFormOpen(true);

    // Set the form data
    setEditFormData(selectedEnterprise || null);

    console.log(`Edit clicked for enterprise with ID ${id}`);
  };

  const closeEditForm = () => {
    // Close the edit form
    setIsEditFormOpen(false);

    // Clear the form data
    setEditFormData(null);
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

      <Map
        data={filteredEnterprises}
        onMarkerClick={handleMarkerClick}
        selectedEnterprise={selectedEnterprise}
        onPopupEditClick={handlePopupEditClick}
      />
      {selectedEnterprise && <p>Selected Enterprise: {selectedEnterprise}</p>}

      {isEditFormOpen && (
        <div>
          {/* Render your edit form here */}
          <h2>Edit Enterprise</h2>
          <p>Edit form for enterprise with ID {editFormData?.id}</p>
          <button onClick={closeEditForm}>Close Form</button>
        </div>
      )}
    </div>
  );
};

export default AssuranceView;
