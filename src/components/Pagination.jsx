import React, { useState } from 'react';

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
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

