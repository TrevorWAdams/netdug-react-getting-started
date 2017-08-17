import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class PostForm extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  };

  state = {
    fields: {
      id: this.props.id,
      title: this.props.title,
      content: this.props.content
    }
  };

  onFormSubmit = evt => {
    const fields = this.state.fields;
    console.log(fields);
    //TODO: Add or Edit post in posts then reset form
    evt.preventDefault();
  };

  onInputChange = evt => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {this.props.postId === 0
          ? <div className="PageTitle">Add Post</div>
          : <div className="PageTitle">Edit Post</div>}
        <FormGroup>
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            placeholder="Title"
            name="title"
            value={this.state.fields.title}
            onChange={this.onInputChange}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Content</ControlLabel>
          <FormControl
            type="text"
            placeholder="Content"
            name="content"
            value={this.state.fields.content}
            onChange={this.onInputChange}
          />
        </FormGroup>
        <Button bsStyle="primary" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default PostForm;
