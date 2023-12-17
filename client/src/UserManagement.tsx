// UserManagement.tsx
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
  // Add more users as needed
];

const userGroups: UserGroup[] = [
  { id: 'group1', groupName: 'Group A', members: [users[0], users[1]] },
  { id: 'group2', groupName: 'Group B', members: [users[1] /* Add more members as needed */] },
  // Add more user groups as needed
];

const UserManagement: React.FC = () => {
  return (
    <div>
      <h1>User Management</h1>

      <div>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>User Groups</h2>
        <ul>
          {userGroups.map((group) => (
            <li key={group.id}>
              <strong>{group.groupName}</strong>
              <ul>
                {group.members.map((member) => (
                  <li key={member.id}>{member.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Add a link to navigate back to the landing page */}
      <Link to="/">BACK</Link>
    </div>
  );
};

export default UserManagement;
