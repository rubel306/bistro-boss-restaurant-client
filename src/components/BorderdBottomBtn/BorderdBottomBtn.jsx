import React from "react";

const BorderdBottomBtn = ({ text }) => {
  return (
    <button className="uppercase text-xl border-b-4 border-black p-5 rounded-lg font-semibold">
      {text}
    </button>
  );
};

export default BorderdBottomBtn;
