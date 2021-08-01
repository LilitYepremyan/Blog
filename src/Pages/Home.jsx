import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ShowPosts from '../components/Posts/showPost';

export default function Home() {
  return (
    <>
      <Header />
      <ShowPosts />
      <Footer />
    </>
  );
}
