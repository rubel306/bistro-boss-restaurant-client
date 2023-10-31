import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredBg from "../../../assets/home/featured.jpg";
import BorderdBottomBtn from "../../../components/BorderdBottomBtn/BorderdBottomBtn";
import "./FeaturedMenu.css";

const FeaturedMenu = () => {
  return (
    <div
      className="py-32 bg-fixed bg-black relative z-10 featuredMenu"
      style={{
        backgroundImage: `url(${featuredBg})`,
        backgroundSize: "cover",
      }}
    >
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="flex gap-8 items-center mt-8 px-32">
        <div>
          <img src={featuredBg} alt="" />
        </div>
        <div className="text-white">
          <p>March 20, 2023</p>
          <h3>WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <BorderdBottomBtn text={"Read More"}></BorderdBottomBtn>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMenu;
