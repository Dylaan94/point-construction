import React from "react";
import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// image import
import sampleImage from "../images/sampleImage.png";

// updates opacity to 1 for current slide
const updateOpacity = (id) => {
  document.getElementById(id).style["opacity"] = 1;
};

// resets opacity back to 0.6 for previous slide
const resetOpacity = (id) => {
  document.getElementById(id).style["opacity"] = 0.6;
};

export default function CustomCarousel() {
  return (
    <Container>
      <Swiper
        spaceBetween={100}
        slidesPerView={1.4}
        centeredSlides={true}
        breakpoints={{
          // when width is over 920px
          920: {
            slidesPerView: 1.4,
          },
          // when width is over 0px
          0: {
            slidesPerView: 1,
          },
        }}
        onSlideChange={(swiper) => {
          resetOpacity(swiper.previousIndex);
          updateOpacity(swiper.activeIndex);
        }}
        onSwiper={(swiper) => console.log(swiper)}
        initialSlide={1}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className={"sampleImage"} id="0" src={sampleImage} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={"sampleImage"} id="1" src={sampleImage} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={"sampleImage"} id="2" src={sampleImage} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

const Container = styled.div``;

const Image = styled.img`
  width: 70vw;
  box-sizing: border-box;
  opacity: 0.6;

  @media screen and (max-width: 920px) {
    width: 100vw;
  }
`;
