import React from "react";
import { Helmet } from "react-helmet-async";
import SectionCover from "../../../Shared/SectionCover/SectionCover";
import menuBg from "../../../assets/menu/banner3.jpg";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <SectionCover
        img={menuBg}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></SectionCover>

      <h2>this is a menu page</h2>
    </div>
  );
};

export default Menu;
