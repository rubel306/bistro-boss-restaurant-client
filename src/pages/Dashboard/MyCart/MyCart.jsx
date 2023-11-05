import React from "react";
import useCart from "../../../hooks/useCart";
import { FaRegTrashAlt } from "react-icons/fa";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div className="w-4/5 mx-auto bg-white p-8">
      <div className="flex justify-between uppercase my-8 items-center">
        <h2 className="font-bold text-3xl">Total Orders: {cart.length}</h2>
        <p className="font-bold text-3xl">Total Price: ${totalPrice}</p>
        <button className="btn btn-outline btn-xs">Pay</button>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white rounded-lg">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-sm text-white bg-red-600 hover:bg-red-800">
                      <FaRegTrashAlt></FaRegTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
