// AssuranceView.tsx

import React, { useState } from 'react';
import Tree from 'react-d3-tree';
import { Button, TextField, Typography } from '@material-ui/core';
import Map from './Map'; 

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
   
  };

  const handleZoomIn = () => {
    setTreeZoom(treeZoom * 1.2);
  };

  const handleZoomOut = () => {
    setTreeZoom(treeZoom / 1.2);
  };

  const handleFilter = () => {
    
  };

  const handleMapZoomIn = () => {
    
  };

  const handleMapZoomOut = () => {
    
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewAddress(event.target.value);
  };

  const handleSaveAddress = () => {
   
    setIsEditFormOpen(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ marginBottom: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
          onClick={() => setIsTreeView(true)}
        >
          Switch to Tree View
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsTreeView(false)}
        >
          Switch to Map View
        </Button>
      </div>

      {isTreeView ? (
        <div style={{ marginTop: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <Button variant="contained" color="primary" onClick={handleZoomIn} style={{ marginRight: '10px' }}>
              Zoom In
            </Button>
            <Button variant="contained" color="primary" onClick={handleZoomOut}>
              Zoom Out
            </Button>
          </div>
          <div style={{ width: '100%', height: '500px' }}>
            <Tree data={treeData} orientation="vertical" translate={{ x: 100, y: 100 }} />
          </div>
        </div>
      ) : (
        <>
          <Map
            data={enterprises}
            onMarkerClick={handleMarkerClick}
            selectedEnterprise={selectedEnterprise}
            onPopupEditClick={() => setIsEditFormOpen(true)}
          />
          {selectedEnterprise && <p style={{ marginTop: '10px' }}>Selected Enterprise: {selectedEnterprise}</p>}
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <TextField
                label="Search Enterprise"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={handleFilter} style={{ marginLeft: '10px' }}>
                Filter
              </Button>
            </div>
            <div>
              <Button variant="contained" color="primary" onClick={handleMapZoomIn} style={{ marginRight: '10px' }}>
                Zoom In
              </Button>
              <Button variant="contained" color="primary" onClick={handleMapZoomOut}>
                Zoom Out
              </Button>
            </div>
          </div>
        </>
      )}

      {isEditFormOpen && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h5">Edit Enterprise</Typography>
          <TextField
            label="New Address"
            variant="outlined"
            fullWidth
            value={newAddress}
            onChange={handleAddressChange}
            style={{ marginTop: '10px' }}
          />
          <Button variant="contained" color="primary" onClick={handleSaveAddress} style={{ marginTop: '10px' }}>
            Save
          </Button>
        </div>
      )}
    </div>
  );
};

export default AssuranceView;
