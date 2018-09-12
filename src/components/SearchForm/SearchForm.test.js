import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';


describe('SearchForm component', () => {
  const mockSetSearchString = jest.fn();
  const initialState = {
    value: '',
  };
  const props = {
    setSearchString: mockSetSearchString,
  };

  const wrapper = shallow(<SearchForm {...props} />);

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('initialize with initial state', () => {
    expect(wrapper.state()).toEqual(initialState);
  });


  describe('When typing into search input', () => {
    const value = 'test';

    beforeEach(() => {
      wrapper.find('input').simulate('change', {
        persist: () => {},
        target: {
          value,
        },
      });
    });

    test('updates value field in state', () => {
      expect(wrapper.state().value).toEqual(value);
    });

    test('calls the props.setSearchString', () => {
      setTimeout(() => {
        expect(mockSetSearchString).toBeCalled();
      }, 500);
    });
  });

  afterAll(() => {
    wrapper.setState(initialState);
  });
});
