import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import RecipeReviewCard from '../components/Posts/post';

export default function Home() {
  return (
    <>
      <Header />
      <RecipeReviewCard />
      <Footer />
    </>
  );
}
