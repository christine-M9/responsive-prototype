import React from 'react';
import { Link } from 'react-router-dom';

interface User {
  id: string;
  name: string;
}

interface UserGroup {
  id: string;
  groupName: string;
  members: User[];
}

const users: User[] = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
 
];

const userGroups: UserGroup[] = [
  { id: 'group1', groupName: 'Group A', members: [users[0], users[1]] },
  { id: 'group2', groupName: 'Group B', members: [users[1] /* Add more members as needed */] },
 
];

const UserManagement: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}>User Management</h1>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#555', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Users</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((user) => (
            <li key={user.id} style={{ marginBottom: '8px', fontSize: '16px' }}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 style={{ color: '#555', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>User Groups</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {userGroups.map((group) => (
            <li key={group.id} style={{ marginBottom: '20px', fontSize: '18px' }}>
              <strong>{group.groupName}</strong>
              <ul style={{ listStyle: 'none', marginTop: '8px', paddingLeft: '20px' }}>
                {group.members.map((member) => (
                  <li key={member.id} style={{ marginBottom: '8px', fontSize: '16px' }}>
                    {member.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      
      <Link to="/" style={{ display: 'block', marginTop: '20px', color: '#007bff', textDecoration: 'none', textAlign: 'center' }}>
        BACK
      </Link>
    </div>
  );
};

export default UserManagement;
