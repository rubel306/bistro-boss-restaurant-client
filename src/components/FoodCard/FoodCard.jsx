const FoodCard = ({ item }) => {
  const { name, recipe, image } = item;
  return (
    <div className="bg-slate-100 text-center">
      <img className="w-full" src={image} alt="" />
      <h2 className="font-bold text-3xl mt-8 mb-1">{name}</h2>
      <p className="text-black px-8 text-sm mb-6">{recipe}</p>
      <button className="px-8 py-4 bg-[#E8E8E8] border-b-4 rounded-lg border-[#BB8506] uppercase font-semibold text-[#BB8506] mb-12 hover:bg-[#1F2937]">
        Add To Cart
      </button>
    </div>
  );
};

export default FoodCard;
