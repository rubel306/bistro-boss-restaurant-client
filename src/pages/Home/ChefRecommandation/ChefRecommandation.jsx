import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/featured.jpg";
const ChefRecommandation = () => {
  return (
    <div className="mb-28">
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"Should Try"}
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-8 mt-12">
        <div className="bg-slate-100 text-center">
          <img className="w-full" src={img1} alt="" />
          <h2 className="font-bold text-3xl mt-8 mb-1">Caeser Salad</h2>
          <p className="text-black px-8 text-sm mb-6">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <button className="px-8 py-4 bg-[#E8E8E8] border-b-4 rounded-lg border-[#BB8506] uppercase font-semibold text-[#BB8506] mb-12">
            Add To Cart
          </button>
        </div>
        <div className="bg-slate-100 text-center">
          <img className="w-full" src={img1} alt="" />
          <h2 className="font-bold text-3xl mt-8 mb-1">Caeser Salad</h2>
          <p className="text-black px-8 text-sm mb-6">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <button className="px-8 py-4 bg-[#E8E8E8] border-b-4 rounded-lg border-[#BB8506] uppercase font-semibold text-[#BB8506] mb-12">
            Add To Cart
          </button>
        </div>
        <div className="bg-slate-100 text-center">
          <img className="w-full" src={img1} alt="" />
          <h2 className="font-bold text-3xl mt-8 mb-1">Caeser Salad</h2>
          <p className="text-black px-8 text-sm mb-6">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <button className="px-8 py-4 bg-[#E8E8E8] border-b-4 rounded-lg border-[#BB8506] uppercase font-semibold text-[#BB8506] mb-12">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommandation;
