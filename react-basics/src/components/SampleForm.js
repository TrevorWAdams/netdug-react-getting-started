import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';
import Field from './SampleFormField';
import './SampleForm.css';

class SampleForm extends Component {
  state = {
    fields: {
      title: '',
      content: '',
      email: ''
    },
    fieldErrors: {},
    posts: []
  };

  onFormSubmit = evt => {
    const posts = this.state.posts;
    const post = this.state.fields;

    evt.preventDefault();

    if (this.validate()) return;

    this.setState({
      posts: posts.concat(post),
      fields: {
        title: '',
        content: '',
        email: ''
      }
    });
  };

  onInputChange = ({ name, value, error }) => {
    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({ fields, fieldErrors });
  };

  validate = () => {
    const post = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

    if (!post.title) return true;
    if (!post.content) return true;
    if (!post.email) return true;
    if (errMessages.length) return true;

    return false;
  };

  render() {
    return (
      <div>
        <h1>Create Post</h1>

        <form onSubmit={this.onFormSubmit}>
          <Field
            placeholder="Title"
            name="title"
            value={this.state.fields.title}
            onChange={this.onInputChange}
            validate={val => (val ? false : 'Title Required')}
          />

          <br />

          <Field
          placeholder="Content"
          name="content"
          value={this.state.fields.content}
          onChange={this.onInputChange}
          validate={val => (val ? false : 'Content Required')}
        />

        <br />

          <Field
            placeholder="Email"
            name="email"
            value={this.state.fields.email}
            onChange={this.onInputChange}
            validate={val => (isEmail(val) ? false : 'Invalid Email')}
          />

          <br />

          <input type="submit" disabled={this.validate()} />
        </form>

        <div>
          <h3>Posts</h3>
          <ul>
            {this.state.posts.map(({ title, content, email }, i) =>
              <li key={i}>
                {title} - {content} ({email})
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default SampleForm;
