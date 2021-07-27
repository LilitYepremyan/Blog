import React from 'react';
import styles from './MyBlog.module.css';

class MyBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      isValidName: false,
      isValidSurname: false,
      isValidEmail: false,
      isValidPassword: false,
      // users: localStorage.getItem('testUsers')
      //   ? JSON.parse(localStorage.getItem('testUsers'))
      //   : [],
      // // testInput: '',
      // testsInputs: { name: '', surname: '', email: '' , password: ''},
    };
  }

  // componentDidUpdate() {
  //   console.log('777', this.state.users);
  // }

  // createUser = (name,surname,email,password) => {
  //   const oldUsers = this.state.users;
  //   const newUser = {
  //     name,
  //     surname,
  //     email,
  //     password
  //   };
  //   let users = [...oldUsers, newUser];
  //   localStorage.setItem('testUsers', JSON.stringify(users));
  //   this.setState({
  //     users,
  //   });
  // };

  // testUserInputHandler = (e) => {
  //   if (e.target.value === '') {
  //     return;
  //   }
  //   this.setState({
  //     testInputs: e.target.value,
  //   });
  // };

  handleChangeName = (event) => {
    // if(event.target.value ===''){
    //   return
    // }

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
    // if(event.target.value ===''){
    //   return
    // }

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
    // if(event.target.value ===''){
    //   return
    // }

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
    // if(event.target.value ===''){
    //   return
    // }

    this.setState({
      password: event.target.value, //password
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

  saveToLocal = () => {
    localStorage.setItem('user', 
        JSON.stringify({
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        password: this.state.password,
      }),
    );
  };

  render() {
    const validUser =
      this.state.isValidName &&
      this.state.isValidSurname &&
      this.state.isValidEmail &&
      this.state.isValidPassword;
    return (
      <div className={styles.blogContainer}>
        {/* <label>Enter Name:</label>
        <input onChange={(e) => this.testUserInputHandler(e)} />
        <button onClick={() => this.createUser(this.state.testInput)}>
          LogIn777
        </button> */}

        <form action="">
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
          <input
            type="password"
            onChange={this.handleChangePassword}
            className={styles.inputField}
            placeholder="Password"
          />
          <button
            disabled={!validUser}
            className={styles.signInBtn}
            onClick={this.saveToLocal}
            // onClick={() => this.createUser(this.state.testInputs)}
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
export default MyBlog;
