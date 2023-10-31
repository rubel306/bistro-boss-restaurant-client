import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const CategorySlider = () => {
  return (
    <section>
      <SectionTitle
        heading={"From 11:00am to 10:00pm"}
        subHeading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-14 mt-12"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <div className="-mt-24 text-white text-center text-3xl font-[Cinzel]">
            <p>Salads</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <div className="-mt-24 text-white text-center text-3xl font-[Cinzel]">
            <p>Soups</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <div className="-mt-24 text-white text-center text-3xl font-[Cinzel]">
            <p>pizzas</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <div className="-mt-24 text-white text-center text-3xl font-[Cinzel]">
            <p>Desserts</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <div className="-mt-24 text-white text-center text-3xl font-[Cinzel]">
            <p>Salads</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CategorySlider;
