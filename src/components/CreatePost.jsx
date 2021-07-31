import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

export default class CreatePost extends React.Component {
  state = {
    title: '',
    post: '',
  };

  handleChange = (props) => (event) => {
    this.setState({ ...props, [props]: event.target.value });
  };

  handleSubmit = () => {
    const prevLocalStorage = localStorage.getItem('posts')
      ? JSON.parse(localStorage.getItem('posts'))
      : [];
    const currentPost = [
      ...prevLocalStorage,
      { title: this.state.title, post: this.state.post },
    ];
    localStorage.setItem('posts', JSON.stringify(currentPost));
    this.setState({
      title: '',
      post: '',
    });
  };

  render() {
    const emptyInputValues = this.state.title === '' || this.state.post === '';
    return (
      <div>
        <h2>Create post</h2>

        <FormControl fullWidth>
          <InputLabel>Title</InputLabel>
          <Input
            id="title"
            value={this.state.title}
            onChange={this.handleChange('title')}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Post</InputLabel>
          <Input
            id="post"
            value={this.state.post}
            onChange={this.handleChange('post')}
            multiline
            rows={2}
          />
        </FormControl>

        <Button
          variant="contained"
          color="purple"
          size="large"
          fullWidth
          onClick={this.handleSubmit}
          disabled={emptyInputValues}
        >
          Create Post
        </Button>
      </div>
    );
  }
}
