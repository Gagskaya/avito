import React from 'react';

export const Users = ({ users }) => {

  return (
    <ul >
      {users && users.map(user => (
        <li key={user.id}>
          {user.login}
        </li>
      ))}
    </ul>
  );
};

