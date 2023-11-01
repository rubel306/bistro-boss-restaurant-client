import React from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import SectionCover from "../../../Shared/SectionCover/SectionCover";
import BorderdBottomBtn from "../../../components/BorderdBottomBtn/BorderdBottomBtn";

const MenuCategory = ({ items, title, description, img }) => {
  return (
    <div className="my-12">
      {title && (
        <SectionCover
          img={img}
          title={title}
          description={description}
        ></SectionCover>
      )}
      <div className="grid grid-cols-2 gap-8 my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <BorderdBottomBtn text={"ORDER YOUR FAVOURITE FOOD"}></BorderdBottomBtn>
      </div>
    </div>
  );
};

export default MenuCategory;
