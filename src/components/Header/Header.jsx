import React from 'react';
import styles from './Header.module.css';
import { Button } from '@material-ui/core';

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.headerContainer}>
        <Button href="/">Home</Button>
        <Button href="/create-post">Create Post</Button>
        <Button href="/registration"> Registration</Button>
        <Button href="/about">About</Button>
        <Button href="/login">Log in</Button>
      </div>
    );
  }
}
