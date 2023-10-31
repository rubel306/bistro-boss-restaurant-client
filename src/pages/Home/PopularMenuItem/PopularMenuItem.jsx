import React from "react";

const PopularMenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-28"
        src={image}
        alt=""
      />
      <div>
        <h3 className="font-[Cinzel] text-xl uppercase">{name} --------</h3>
        <p className="text-[#737373] text-lg ">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl">${price}</p>
    </div>
  );
};

export default PopularMenuItem;
