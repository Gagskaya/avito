import React, { useState } from 'react';

export const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number}>
            <span onClick={() => paginate(number)} >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

