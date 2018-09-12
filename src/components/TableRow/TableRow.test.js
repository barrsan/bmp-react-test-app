import React from 'react';
import { shallow } from 'enzyme';
import TableRow from './TableRow';


describe('TableRow component', () => {
  const props = {
    name: 'Test name',
    place: 'Test place',
    organization: '',
    scheme: [
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
      },
    ],
  };

  const wrapper = shallow(<TableRow {...props} />);

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('renders columns according to the scheme', () => {
    expect(wrapper.find('td').at(0).text()).toBe(props.name);
    expect(wrapper.find('td').at(1).text()).toBe(props.organization);
    expect(wrapper.find('td').at(2).text()).toBe(props.place);
  });
});
