import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenuItem from "../PopularMenuItem/PopularMenuItem";
import BorderdBottomBtn from "../../../components/BorderdBottomBtn/BorderdBottomBtn";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenus = data.filter((item) => item.category === "popular");
        setMenu(popularMenus);
      });
  }, []);
  return (
    <div className="mb-28">
      <SectionTitle
        heading={" FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-8 my-12">
        {menu.map((item) => (
          <PopularMenuItem key={item._id} item={item}></PopularMenuItem>
        ))}
      </div>
      <div className="text-center ">
        <BorderdBottomBtn text={"View Full Menu"}></BorderdBottomBtn>
      </div>
    </div>
  );
};

export default PopularMenu;
