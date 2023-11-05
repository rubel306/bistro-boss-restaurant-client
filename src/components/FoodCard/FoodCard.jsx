import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuitemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Your food is added on the cart ",
            });
          }
          console.log(data);
        });
    } else {
      Swal.fire({
        title: "Please Login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-slate-100 text-center relative">
      <img className="w-full" src={image} alt="" />
      <p className="font-semibold text-lg bg-[#111827] text-white w-24 p-4 text-center absolute right-5 top-5 z-10">
        ${price}
      </p>
      <h2 className="font-bold text-3xl mt-8 mb-1">{name}</h2>
      <p className="text-black px-8 text-sm mb-6">{recipe}</p>
      <button
        onClick={() => handleAddToCart(item)}
        className="px-8 py-4 bg-[#E8E8E8] border-b-4 rounded-lg border-[#BB8506] uppercase font-semibold text-[#BB8506] mb-12 hover:bg-[#1F2937]"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default FoodCard;
