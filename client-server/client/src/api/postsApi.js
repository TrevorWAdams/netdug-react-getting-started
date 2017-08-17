const BASE_API_ENDPOINT = 'http://localhost:8080/api';

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }
};

const parseJSON = response => {
  return response.json();
};

class postsApi {
  static createPost(data) {
    return fetch(`${BASE_API_ENDPOINT}/posts`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(checkStatus);
  }

  static deletePost(data) {
    const id = data.id;
    return fetch(`${BASE_API_ENDPOINT}/posts/${id}`, {
      method: 'delete',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(checkStatus);
  }

  static getPost(id, cb) {
    return fetch(`${BASE_API_ENDPOINT}/posts/${id}`, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(cb);
  }

  static getPosts(success) {
    return fetch(`${BASE_API_ENDPOINT}/posts`, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(success);
  }

  static updatePost(data) {
    const id = data.id;
    return fetch(`${BASE_API_ENDPOINT}/posts/${id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(checkStatus);
  }
}

export default postsApi;
