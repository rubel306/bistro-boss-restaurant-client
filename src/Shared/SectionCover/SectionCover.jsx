import React from "react";
import { Parallax } from "react-parallax";

const SectionCover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the section bg"
      strength={-200}
    >
      <div className="h-[700px] flex flex-col px-20 justify-center items-center">
        <div
          style={{ backgroundColor: "rgba(21, 21, 21, 0.6)" }}
          className=" text-white px-72 text-center py-32"
        >
          <h2 className="font-bold font-[Cinzel] text-6xl uppercase py-2">
            {title}
          </h2>
          <p className="font-[Cinzel] text-2xl">{description}</p>
        </div>
      </div>
    </Parallax>
  );
};

export default SectionCover;
