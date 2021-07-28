import React from 'react';
import styles from './Login.module.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isValidEmail: false,
      isValidPassword: false,
    };
  }

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
    const emailValidator =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = emailValidator.test(event.target.value);

    if (validEmail) {
      this.setState({
        isValidEmail: true,
      });
    } else {
      this.setState({
        isValidEmail: false,
      });
    }
  };

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
    const passwordValidator =
      /^(?=.*[0-9])(?=.*[!@#$%^&*?])[a-zA-Z0-9!@#$%^&*?]{6,16}$/;
    const validPassword = passwordValidator.test(event.target.value);
    if (validPassword) {
      this.setState({
        isValidPassword: true,
      });
    } else {
      this.setState({
        isValidPassword: false,
      });
    }
  };
  handleSubmit = () => {
    const user = JSON.parse(localStorage.user);
    const result = user.filter((el) => {
      return (
        el.email === this.state.email && el.password === this.state.password
      );
    })[0];
    if (result.length === 0) {
      throw new Error('No such account exists');
    } else {
      window.location = '/';
    }
  };

  render() {
    const validUser = this.state.isValidEmail && this.state.isValidPassword;
    return (
      <div className={styles.blogContainer}>
        <p className={styles.registrationText}>Log in</p>

        <input
          type="email"
          onChange={this.handleChangeEmail}
          className={styles.inputField}
          placeholder="Email"
          value={this.state.email}
        />
        <input
          type="password"
          onChange={this.handleChangePassword}
          className={styles.inputField}
          placeholder="Password"
          value={this.state.password}
        />
        <button
          disabled={!validUser}
          className={styles.signInBtn}
          onClick={this.handleSubmit}
        >
          Sign in
        </button>
      </div>
    );
  }
}
export default Login;
