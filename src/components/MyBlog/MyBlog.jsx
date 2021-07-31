import React from 'react';
import { getId } from '../Helper/helper';
import styles from './MyBlog.module.css';
class MyBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      isExistEmail: '',
      isValidName: false,
      isValidSurname: false,
      isValidEmail: false,
      isValidPassword: false,
    };
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
    const nameValidator = /^[a-zA-Z]+$/;
    const validName = nameValidator.test(event.target.value);
    if (validName) {
      this.setState({
        isValidName: true,
      });
    } else {
      this.setState({
        isValidName: false,
      });
    }
  };

  handleChangeSurname = (event) => {
    this.setState({
      surname: event.target.value,
    });
    const surnameValidator = /^[a-zA-Z]+$/;
    const validSurname = surnameValidator.test(event.target.value);
    if (validSurname) {
      this.setState({
        isValidSurname: true,
      });
    } else {
      this.setState({
        isValidSurname: false,
      });
    }
  };

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []
    for (let i = 0; i < user.length; i++) {
      if (user[i].email === event.target.value) {
        this.setState({
          isExistEmail: 'This email is already taken',
        })
        break
      } else {
        this.setState({
          isExistEmail: '',
        });
      }
    }
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

  setLocalStorage = () => {
    let user = [];
    if (localStorage.user) {
      user = JSON.parse(localStorage.user);

      user.push({
        id: getId(user),
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        password: this.state.password,
      });
      localStorage.user = JSON.stringify(user);
    } else {
      user = [
        {
          id: getId([]),
          name: this.state.name,
          surname: this.state.surname,
          email: this.state.email,
          password: this.state.password,
        },
      ];
      localStorage.user = JSON.stringify(user);
    }
    window.location = '/';
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
    const validUser =
      this.state.isValidName &&
      this.state.isValidSurname &&
      this.state.isValidEmail &&
      this.state.isValidPassword;
    return (
      <div className={styles.blogContainer}>
        <p className={styles.registrationText}>Registration</p>
        <input
          onChange={this.handleChangeName}
          className={styles.inputField}
          placeholder="Name"
        />
        <input
          onChange={this.handleChangeSurname}
          className={styles.inputField}
          placeholder="Surname"
        />
        <input
          type="email"
          onChange={this.handleChangeEmail}
          className={styles.inputField}
          placeholder="Email"
        />
        <p>{this.state.isExistEmail}</p>
        <input
          type="password"
          onChange={this.handleChangePassword}
          className={styles.inputField}
          placeholder="Password"
        />

        <button
          disabled={!validUser}
          className={styles.signInBtn}
          onClick={() => this.setLocalStorage()}
        >
          Sign in
        </button>
      </div>
    );
  }
}
export default MyBlog;
