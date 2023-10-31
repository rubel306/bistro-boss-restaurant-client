import React from "react";
import introBg from "../../../assets/home/chef-service.jpg";

const BistroIntro = () => {
  return (
    <div
      className="p-32 bg-fixed bg-contain my-20"
      style={{ backgroundImage: `url(${introBg})`, backgroundSize: "cover" }}
    >
      <div className="text-center bg-white p-32">
        <h2 className="text-5xl font-[Cinzel]">Bistro Boss</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroIntro;
