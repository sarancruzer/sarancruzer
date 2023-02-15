import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
// internal
import cate_1 from "@assets/img/product/category/product-cat-1.jpg";
import cate_2 from "@assets/img/product/category/product-cat-2.jpg";
import cate_3 from "@assets/img/product/category/product-cat-3.jpg";
import cate_4 from "@assets/img/product/category/product-cat-4.jpg";
import SectionWrapper from "@elements/section-wrapper";
import SingleCategory from "./single-category";

// products category data
export const products_category = [
  {
    img: cate_1,
    title: "Call Phone &Tablets",
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    img: cate_2,
    title: "Game & Video",
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    img: cate_3,
    title: "Sport Watches",
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    img: cate_4,
    title: "Computers & Laptop",
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
];

const ShopCategoryArea = ({ element_style = false }) => {
  const [loop,setLoop] = useState(false);
  useEffect(() => setLoop(true),[])
  return (
    <section className="product__category pt-100 pb-100">
      <div className="container">
        {element_style && (
          <SectionWrapper
            title="Minimal & Clean Design"
            subtitle="Shop Category Slider"
          />
        )}
        <div className="row">
          <div className="col-xxl-12">
            <div className="product__category-slider">
              <Swiper
                className="product__category-slider-active swiper-container"
                slidesPerView={4}
                spaceBetween={30}
                loop={loop}
                modules={[Scrollbar]}
                scrollbar={{
                  el: ".tp-scrollbar",
                  clickable: true,
                }}
                breakpoints={{
                  1601: {
                    slidesPerView: 4,
                  },
                  1400: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                }}
              >
                {products_category.map((item, i) => (
                  <SwiperSlide
                    key={i}
                  >
                    <SingleCategory item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="tp-scrollbar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCategoryArea;
