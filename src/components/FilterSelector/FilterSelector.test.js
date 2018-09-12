import React from 'react';
import { shallow } from 'enzyme';
import FilterSelector from './FilterSelector';


describe('FilterSelector component', () => {
  const mockSetExhibitsFilter = jest.fn();
  const initialState = {
    value: '',
  };

  describe('Options not empty', () => {
    const props = {
      type: 'place',
      options: ['v1', 'v2', 'v3'],
      handler: mockSetExhibitsFilter,
    };

    const wrapper = shallow(<FilterSelector {...props} />);

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('renders without crashing', () => {
      expect(wrapper).toHaveLength(1);
    });

    test('initialize with initial state', () => {
      expect(wrapper.state()).toEqual(initialState);
    });

    describe('When typing into search input', () => {
      const value = 'v2';

      beforeEach(() => {
        wrapper.find('select').simulate('change', {
          persist: () => {},
          target: {
            value,
          },
        });
      });

      test('updates value field in state', () => {
        expect(wrapper.state().value).toEqual(value);
      });

      test('calls the props.handler', () => {
        expect(mockSetExhibitsFilter).toBeCalled();
      });
    });

    afterAll(() => {
      wrapper.setState(initialState);
    });
  });


  describe('Options is empty', () => {
    const props = {
      type: 'place',
      options: [],
      handler: mockSetExhibitsFilter,
    };

    const wrapper = shallow(<FilterSelector {...props} />);

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('renders without crashing', () => {
      expect(wrapper).toHaveLength(1);
    });
  });
});
