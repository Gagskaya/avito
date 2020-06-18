import React from 'react';

export const Items = ({ items ,totalCount}) => {

  return (
    <ul className="items">
      {items && items.map(item => (
        <li key={item.id}>
          <span>{item.name}</span>
          <span>{totalCount}</span>
          <span> Updated on {item.updated_at} <img src="../assets/img/star.svg" alt=""/></span>
          <a href={`${item.html_url}`}>Ссылка</a>
        </li>
      ))}
    </ul>
  );
};

