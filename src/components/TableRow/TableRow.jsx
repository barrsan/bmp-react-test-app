import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  name: PropTypes.string,
  place: PropTypes.string,
  organization: PropTypes.string,
  description: PropTypes.string,
  scheme: PropTypes.array.isRequired,
};

const defaultProps = {
  name: '',
  place: '',
  organization: '',
  description: '',
};


const TableRow = ({
  name,
  place,
  organization,
  description,
  scheme,
}) => {
  const data = {
    name,
    place,
    organization,
    description,
  };

  return (
    <tr>
      {scheme.map(i => <td key={i.accessor}>{data[i.accessor]}</td>)}
    </tr>
  );
};


TableRow.propTypes = { ...propTypes };
TableRow.defaultProps = { ...defaultProps };


export default TableRow;
