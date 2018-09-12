import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';


describe('Pagination component', () => {
  describe('Have 2 pages', () => {
    const props = {
      pagesNumber: 2,
      currentPage: 2,
    };

    const wrapper = shallow(<Pagination {...props} />);

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('renders without crashing', () => {
      expect(wrapper).toHaveLength(1);
    });

    test('renders 2 links', () => {
      expect(wrapper.find('Link')).toHaveLength(2);
    });

    test('renders link with .nav-item_active class', () => {
      expect(wrapper.find('.nav-item_active')).toHaveLength(1);
    });
  });


  describe('Have 0 pages', () => {
    const props = {
      pagesNumber: 0,
    };

    const wrapper = shallow(<Pagination {...props} />);

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('renders without crashing', () => {
      expect(wrapper.find('.pagination')).toHaveLength(1);
    });

    test('renders 0 links', () => {
      expect(wrapper.find('Link')).toHaveLength(0);
    });
  });
});
