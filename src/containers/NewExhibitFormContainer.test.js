import React from 'react';
import { shallow } from 'enzyme';
import { NewExhibitFormContainer } from './NewExhibitFormContainer';


describe('Exhibits container', () => {
  const props = {
    createExhibit: () => {},
  };

  const wrapper = shallow(<NewExhibitFormContainer {...props} />);

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
