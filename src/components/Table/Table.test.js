import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';


describe('Table component', () => {
  describe('renders with not empty props.data', () => {
    const FilterComponent = () => <div>FilterComponent</div>;
    const props = {
      columns: [
        {
          header: 'Test 1',
          accessor: 'name',
        },
        {
          header: 'Test 2',
          accessor: 'organization',
        },
        {
          header: 'Test 3',
          accessor: 'place',
          filterComponent: (<FilterComponent />),
        },
      ],
      data: [
        { uuid: '1', name: 'Test name 1' },
        { uuid: '2', name: 'Test name 2' },
      ],
    };

    const wrapper = shallow(<Table {...props} />);

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('renders without crashing', () => {
      expect(wrapper).toHaveLength(1);
    });

    test('renders header columns according to the scheme', () => {
      expect(wrapper.find('.table__header-title').at(0).text())
        .toBe(props.columns[0].header);
      expect(wrapper.find('.table__header-title').at(1).text())
        .toBe(props.columns[1].header);
      expect(wrapper.find('.table__header-title').at(2).text())
        .toBe(props.columns[2].header);
    });

    test('renders 2 rows', () => {
      expect(wrapper.find('TableRow')).toHaveLength(2);
    });
  });


  describe('renders with empty props.data', () => {
    const props = {
      columns: [
        {
          header: 'Test 1',
          accessor: 'name',
        },
        {
          header: 'Test 2',
          accessor: 'organization',
        },
      ],
    };

    const wrapper = shallow(<Table {...props} />);

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('renders without crashing', () => {
      expect(wrapper).toHaveLength(1);
    });

    test('renders with empty data', () => {
      expect(wrapper.find('.table__empty-message')).toHaveLength(1);
    });
  });
});
