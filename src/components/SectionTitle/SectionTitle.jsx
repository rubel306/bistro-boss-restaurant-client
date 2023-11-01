import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/12 mx-auto text-center my-4">
      <p className="text-[#D99904] text-lg my-4">--- {subHeading} ---</p>
      <h3 className="uppercase text-3xl font-semibold py-5 border-y-4 border-[#E8E8E8]">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
