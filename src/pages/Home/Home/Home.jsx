import React from "react";
import Banner from "../Banner/Banner";
import CategorySlider from "../CategorySlider/CategorySlider";
import BistroIntro from "../BistroIntro/BistroIntro";
import PopularMenu from "../PopularMenu/PopularMenu";
import CallUs from "../CallUs/CallUs";
import ChefRecommandation from "../ChefRecommandation/ChefRecommandation";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategorySlider></CategorySlider>
      <BistroIntro></BistroIntro>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefRecommandation></ChefRecommandation>
    </div>
  );
};

export default Home;
