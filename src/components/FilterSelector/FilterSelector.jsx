import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


class FilterSelector extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    options: PropTypes.array, // eslint-disable-line
    handler: PropTypes.func.isRequired,
  }

  static defaultProps = {
    options: [],
  };

  state = {
    value: '',
  }

  handleSelectChange = (e) => {
    e.persist();
    const { handler, type } = this.props;

    this.setState(prevProps => ({
      ...prevProps, value: e.target.value,
    }), () => {
      const { value } = this.state;
      handler({
        type,
        value,
      });
    });
  }

  render() {
    const { value } = this.state;
    const { options } = this.props;

    return (
      <Fragment>
        {
          options.length
            ? (
              <div className="filter-select-wrapper form-group">
                <select
                  className="form-control"
                  value={value}
                  onChange={this.handleSelectChange}
                >
                  <option value="">Все</option>
                  {
                    options.map(i => (
                      <option key={i} value={i}>{i}</option>
                    ))
                  }
                </select>
              </div>
            )
            : null
        }
      </Fragment>
    );
  }
}

export default FilterSelector;
