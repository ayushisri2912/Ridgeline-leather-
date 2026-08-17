import React from 'react'
import HeroSection from '../Components/HomeComponents/HeroSection'
import FeaturedCategories from '../Components/HomeComponents/FeaturedCategories'
import NewArrival from '../Components/HomeComponents/NewArrival';
import Craftsmanship from '../Components/HomeComponents/Craftsmanship';
import RidgelineStandard from '../Components/HomeComponents/RidgelineStandard';
import RidgelineJournal from '../Components/HomeComponents/RidgelineJournal';
import CustomerReviews from '../Components/HomeComponents/CustomerReviews';
import GetInTouch from '../Components/HomeComponents/GetInTouch';
import Newsletter from '../Components/HomeComponents/Newsletter';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <NewArrival />
      <Craftsmanship />
      <RidgelineStandard />
      <RidgelineJournal />
      <CustomerReviews />
      <GetInTouch />
      <Newsletter />
    </>
  );
};

export default Home
