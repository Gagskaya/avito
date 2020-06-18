import React from 'react';

export const Items = ({ items ,repos}) => {

  return (
    <ul className="items">
      {items && items.map(item => (
        <li key={item.id}>
          {item.name}
          {item.total_count}
        </li>
      ))}
    </ul>
  );
};

