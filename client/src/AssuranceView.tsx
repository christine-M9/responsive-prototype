import React, { useState } from 'react';
import Tree from 'react-d3-tree';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { TextField, Button, Typography } from '@material-ui/core';

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

interface Enterprise {
  id: string;
  lat: number;
  lng: number;
  name: string;
  industry: string;
  address: string;
}

const initialEnterprisesData: Enterprise[] = [
  { id: '1', lat: 37.7749, lng: -122.4194, name: 'Enterprise 1', industry: 'tech', address: '123 Main St' },
  { id: '2', lat: 34.0522, lng: -118.2437, name: 'Enterprise 2', industry: 'finance', address: '456 Oak St' },
  // Add more data as needed
];

const treeData: TreeNode = {
  id: 'root',
  name: 'Root Node',
  children: [
    {
      id: 'branch1',
      name: 'Branch 1',
      children: [
        { id: 'leaf1', name: 'Leaf 1' },
        { id: 'leaf2', name: 'Leaf 2' },
      ],
    },
    {
      id: 'branch2',
      name: 'Branch 2',
      children: [
        { id: 'leaf3', name: 'Leaf 3' },
        { id: 'leaf4', name: 'Leaf 4' },
      ],
    },
  ],
};

const AssuranceView: React.FC = () => {
  const [selectedEnterprise, setSelectedEnterprise] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [industryFilter, setIndustryFilter] = useState<string | null>(null);
  const [isTreeView, setIsTreeView] = useState<boolean>(false);
  const [treeZoom, setTreeZoom] = useState<number>(1);
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);
  const [editFormData, setEditFormData] = useState<Enterprise | null>(null);
  const [enterprises, setEnterprises] = useState<Enterprise[]>(initialEnterprisesData);
  const [newAddress, setNewAddress] = useState<string>('');

  const handleMarkerClick = (id: string) => {
    setSelectedEnterprise(id);
  };

  const handleNodeClick = (nodeData: any) => {
    setSelectedEnterprise(nodeData.name);
    // Additional logic to handle highlighting descendants
  };

  const handleZoomIn = () => {
    setTreeZoom(treeZoom * 1.2);
  };

  const handleZoomOut = () => {
    setTreeZoom(treeZoom / 1.2);
  };

  const handleFilter = () => {
    // Implement filter functionality based on searchTerm
  };

  const handleMapZoomIn = () => {
    // Implement map zoom in functionality
  };

  const handleMapZoomOut = () => {
    // Implement map zoom out functionality
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewAddress(event.target.value);
  };

  const handleSaveAddress = () => {
    // Implement logic to save the edited address
    setIsEditFormOpen(false);
  };

  return (
    <div>
      <div>
        <button onClick={() => setIsTreeView(true)}>Switch to Tree View</button>
        <button onClick={() => setIsTreeView(false)}>Switch to Map View</button>
      </div>

      {isTreeView ? (
        <div>
          <div>
            <button onClick={handleZoomIn}>Zoom In</button>
            <button onClick={handleZoomOut}>Zoom Out</button>
          </div>
          <div style={{ width: '100%', height: '500px' }}>
            <Tree data={treeData} orientation="vertical" translate={{ x: 100, y: 100 }} />
          </div>
        </div>
      ) : (
        <>
          <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {enterprises
              .filter((enterprise) => enterprise.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .filter((enterprise) => !industryFilter || enterprise.industry === industryFilter)
              .map((item) => (
                <Marker
                  key={item.id}
                  position={[item.lat, item.lng]}
                  eventHandlers={{ click: () => handleMarkerClick(item.id) }}
                >
                  <Popup>
                    {item.name}
                    <br />
                    <button onClick={() => setIsEditFormOpen(true)}>Edit Address</button>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
          {selectedEnterprise && <p>Selected Enterprise: {selectedEnterprise}</p>}
          <div>
            <TextField
              label="Search Enterprise"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleFilter}>
              Filter
            </Button>
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={handleMapZoomIn}>
              Zoom In
            </Button>
            <Button variant="contained" color="primary" onClick={handleMapZoomOut}>
              Zoom Out
            </Button>
          </div>
        </>
      )}

      {isEditFormOpen && (
        <div>
          <Typography variant="h5">Edit Enterprise</Typography>
          <TextField
            label="New Address"
            variant="outlined"
            fullWidth
            value={newAddress}
            onChange={handleAddressChange}
          />
          <Button variant="contained" color="primary" onClick={handleSaveAddress}>
            Save
          </Button>
        </div>
      )}
    </div>
  );
};

export default AssuranceView;
