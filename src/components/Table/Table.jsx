import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '../TableRow/TableRow';


const propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
};

const defaultProps = {
  data: [],
};


const Table = ({
  columns,
  data,
}) => (
  <table className="table">
    <thead>
      <tr>
        {
          columns.map(i => (
            <th
              key={i.accessor}
              width={i.width}
            >
              <div className="table__header-title">{ i.header }</div>
              { i.filterComponent && (i.filterComponent) }
            </th>
          ))
        }
      </tr>
    </thead>
    <tbody>
      {
        data && data.length
          ? data.map(i => (
            <TableRow
              key={i.uuid}
              name={i.name}
              place={i.place}
              organization={i.organization}
              description={i.description}
              scheme={columns}
            />
          ))
          : (
            <tr>
              <td>
                <div className="table__empty-message">
                  Нет экспонатов
                </div>
              </td>
            </tr>
          )
      }
    </tbody>
  </table>
);


Table.propTypes = { ...propTypes };
Table.defaultProps = { ...defaultProps };


export default Table;
