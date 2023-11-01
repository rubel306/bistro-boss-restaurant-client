import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="pt-12 pb-28">
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      ></SectionTitle>
      <div className="testimonials mt-8">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper px-6 text-center"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div>
                <Rating
                  className="mx-auto mb-12"
                  style={{ maxWidth: 180 }}
                  value={testimonial.rating}
                  readOnly
                />
                <FaQuoteLeft className="w-24 h-24 mx-auto mb-12"></FaQuoteLeft>
                <p className="text-lg text-[#444]">{testimonial.details}</p>
                <h2 className="font-semibold text-[#CD9003] my-2 text-3xl">
                  {testimonial.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
