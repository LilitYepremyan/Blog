import { Box } from '@material-ui/core';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { lorem } from '../constants/lorem';

export default function About() {
  return (
    <>
      <Header />
      <Box width="50%" lineHeight="1.7" margin=" 20px auto">
        {lorem}
      </Box>
      <Footer />
    </>
  );
}
