import React from 'react';
import { shallow } from 'enzyme';
import { ExhibitsContainer } from './ExhibitsContainer';


describe('Exhibits container', () => {
  const props = {
    setExhibitsFilter: () => {},
    setExhibitsSearchString: () => {},
  };

  const wrapper = shallow(<ExhibitsContainer {...props} />);

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
