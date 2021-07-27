import React from 'react';
import { Box } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import styles from './Footer.module.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Box className={styles.footer}>
          <FacebookIcon />
          <PinterestIcon />
          <InstagramIcon />
          <TwitterIcon />
        </Box>
      </footer>
    );
  }
}
