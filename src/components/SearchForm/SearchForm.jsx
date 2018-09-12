import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';


class SearchForm extends PureComponent {
  static propTypes = {
    setSearchString: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.searchDebounced = debounce(500, this.search);
  }

  search = (searchString) => {
    const { setSearchString } = this.props;
    setSearchString({
      searchString,
    });
  }

  handleChange = (e) => {
    e.persist();
    this.setState(prevState => (
      { ...prevState, value: e.target.value }
    ), () => {
      const { value } = this.state;
      this.searchDebounced(value);
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="search-form form-group">
        <input
          className="form-control"
          placeholder="Поиск по названию"
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}


export default SearchForm;
