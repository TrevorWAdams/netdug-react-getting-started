import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength60 = maxLength(60);

class PostForm extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) =>
    <div>
      <input {...input} placeholder={label} type={type} />
      <div>
        {touched &&
          error &&
          <span>
            {error}
          </span>}
      </div>
    </div>;

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <div>
            <Field
              name="title"
              type="text"
              component={this.renderField}
              placeholder="Title"
              validate={[required, maxLength60]}
            />
          </div>
        </div>
        <div>
          <label>Content</label>
          <div>
            <Field
              name="content"
              type="text"
              component={this.renderField}
              placeholder="Content"
              validate={[required]}
            />
          </div>
        </div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </form>
    );
  }
}

PostForm = reduxForm({
  form: 'postform'
})(PostForm);

PostForm = connect(state => ({
  initialValues: state.posts.post
}))(PostForm);

export default PostForm;
