import React from 'react';
import PropTypes from 'prop-types';
import Table from '../Table/Table';
import SearchForm from '../SearchForm/SearchForm';
import FilterSelector from '../FilterSelector/FilterSelector';
import Pagination from '../Pagination/Pagination';
import './Exhibits.css';


const propTypes = {
  items: PropTypes.array,
  filterData: PropTypes.array,
  currentPage: PropTypes.number,
  setExhibitsFilter: PropTypes.func.isRequired,
  setExhibitsSearchString: PropTypes.func.isRequired,
};

const defaultProps = {
  items: [],
  filterData: [],
  currentPage: 0,
};


const Exhibits = ({
  items,
  filterData,
  currentPage,
  pagesNumber,
  setExhibitsFilter,
  setExhibitsSearchString,
}) => {
  const columns = [
    {
      header: 'Название',
      accessor: 'name',
      width: '200px',
    },
    {
      header: 'Место создания',
      accessor: 'place',
      width: '200px',
      filterComponent: (
        <FilterSelector
          type="place"
          options={filterData}
          handler={setExhibitsFilter}
        />
      ),
    },
    {
      header: 'Организация',
      accessor: 'organization',
      width: '200px',
    },
    {
      header: 'Описание',
      accessor: 'description',
      width: '',
    },
  ];

  return (
    <div className="exhibits">
      <h1>Экспонаты</h1>
      <SearchForm
        setSearchString={setExhibitsSearchString}
      />
      <Table
        columns={columns}
        data={items}
      />
      <Pagination
        currentPage={currentPage}
        pagesNumber={pagesNumber}
      />
    </div>
  );
};


Exhibits.propTypes = { ...propTypes };
Exhibits.defaultProps = { ...defaultProps };


export default Exhibits;
