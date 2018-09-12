import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './Pagination.css';


const propTypes = {
  pagesNumber: PropTypes.number,
  currentPage: PropTypes.number,
};

const defaultProps = {
  pagesNumber: 0,
  currentPage: 0,
};


const Pagination = ({
  pagesNumber,
  currentPage,
}) => {
  const pages = [];

  if (pagesNumber) {
    for (let i = 1; i < pagesNumber + 1; i += 1) {
      const item = (
        <li
          className={classNames({
            'nav-item': true,
            'nav-item_active': i === currentPage,
          })}
          key={i}
        >
          <Link
            className="nav-link"
            to={{
              search: `?page=${i}`,
            }}
          >
            {i}
          </Link>
        </li>
      );
      pages.push(item);
    }
  }

  return (
    <ul className="pagination nav justify-content-center">
      {pages}
    </ul>
  );
};


Pagination.propTypes = { ...propTypes };
Pagination.defaultProps = { ...defaultProps };


export default Pagination;
