"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/homePageBanner.mp4" type="video/mp4" />
        </video>
        <div className={styles.title}>
          <h1>Distribuidor de las mejores marcas</h1>
        </div>
      </div>
      <div className={styles.brands}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img alt="test1" src="/jm-logo-transparent-bg.png" />
            <p className="legend">Logo</p>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="test2" src="/jm-logo-transparent-bg.png" />
            <p className="legend">Legend 3</p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="products">products</div>
      <div className="categories">categories</div>
      <div className="catalogs">catalogs  </div>
    </div>
  );
}
