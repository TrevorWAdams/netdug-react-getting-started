import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SampleFormField extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired
  };

  state = {
    value: this.props.value,
    error: false
  };

  componentWillReceiveProps(update) {
    this.setState({ value: update.value });
  }

  onChange = evt => {
    const name = this.props.name;
    const value = evt.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;

    this.setState({ value, error });

    this.props.onChange({ name, value, error });
  };

  render() {
    return (
      <div>
        <input
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.onChange}
        />
        <span style={{ color: 'red' }}>
          {this.state.error}
        </span>
      </div>
    );
  }
}

export default SampleFormField;
