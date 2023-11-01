import React from "react";
import { Helmet } from "react-helmet-async";
import SectionCover from "../../../Shared/SectionCover/SectionCover";
import menuBg from "../../../assets/menu/banner3.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../hooks/useMenu/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const salads = menu.filter((item) => item.category === "salad");
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
      {/* offer menu item  */}
      <SectionTitle
        heading="TODAY'S OFFER"
        subHeading="Don't miss"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu items  */}
      <MenuCategory
        items={desserts}
        title={"dessert"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={dessertBg}
      ></MenuCategory>

      {/* Pizza menu items  */}
      <MenuCategory
        items={pizzas}
        title={"pizza"}
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={pizzaBg}
      ></MenuCategory>

      {/* salad menu items  */}
      <MenuCategory
        items={salads}
        title={"salad"}
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={saladBg}
      ></MenuCategory>

      {/* soup menu items  */}
      <MenuCategory
        items={soups}
        title={"soup"}
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={soupBg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
