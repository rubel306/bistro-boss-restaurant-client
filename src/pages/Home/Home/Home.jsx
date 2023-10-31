import React from "react";
import Banner from "../Banner/Banner";
import CategorySlider from "../CategorySlider/CategorySlider";
import BistroIntro from "../BistroIntro/BistroIntro";
import PopularMenu from "../PopularMenu/PopularMenu";
import CallUs from "../CallUs/CallUs";
import ChefRecommandation from "../ChefRecommandation/ChefRecommandation";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategorySlider></CategorySlider>
      <BistroIntro></BistroIntro>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefRecommandation></ChefRecommandation>
      <FeaturedMenu></FeaturedMenu>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
