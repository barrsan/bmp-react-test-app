import React from 'react';
import { shallow } from 'enzyme';
import Exhibits from './Exhibits';


describe('Exhibits component', () => {
  const props = {
    setExhibitsFilter: () => {},
    setExhibitsSearchString: () => {},
  };

  const wrapper = shallow(<Exhibits {...props} />);

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('SearchForm')).toHaveLength(1);
    expect(wrapper.find('Table')).toHaveLength(1);
    expect(wrapper.find('Pagination')).toHaveLength(1);
  });
});
