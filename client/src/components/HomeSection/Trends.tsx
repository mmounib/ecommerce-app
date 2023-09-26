import { Link } from "react-router-dom";
import {
  BsArrowRightShort,
  BsFillArrowUpRightCircleFill,
} from "react-icons/bs";

interface products {
  image: string;
  price: number;
  name: string;
}

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface HorizontalCardScrollProps {
  animationDuration: number; // Duration of each card animation in seconds
  delayBetweenCards: number; // Delay between card animations in seconds
}

const HorizontalCardScroll: React.FC<HorizontalCardScrollProps> = ({
  animationDuration,
  delayBetweenCards,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<gsap.Tween | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const cardsCount = 10;
      const cardWidth = container.offsetWidth;

      const animation = gsap.to(container, {
        x: -(cardsCount - 1) * cardWidth,
        duration: (cardsCount - 1) * animationDuration,
        repeat: 1,
        ease: "linear",
        paused: true,
      });
      animationRef.current = animation;
    }
  }, [animationDuration, delayBetweenCards]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.resume();
    }
  };

  return (
    <div className="overflow-hidden flex items-center">
      <div
        className="flex gap-4"
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <PopularProducts
          image="../../../src/assets/shoe.png"
          price={78.5}
          name="Air Max 98"
        />
        <PopularProducts
          image="../../../src/assets/shoe.png"
          price={78.5}
          name="Air Max 98"
        />
        <PopularProducts
          image="../../../src/assets/shoe.png"
          price={78.5}
          name="Air Max 98"
        />
        <PopularProducts
          image="../../../src/assets/shoe.png"
          price={78.5}
          name="Air Max 98"
        />
        <PopularProducts
          image="../../../src/assets/shoe.png"
          price={78.5}
          name="Air Max 98"
        />

        <PopularProducts
          image="../../../src/assets/shoe.png"
          price={78.5}
          name="Air Max 98"
        />

        <PopularProducts
          image="../../../src/assets/shoe.png"
          price={78.5}
          name="Air Max 98"
        />
      </div>
    </div>
  );
};

const PopularProducts = ({ image, price, name }: products) => {
  return (
    <div className="flex flex-col gap-4 w-[250px] bg-favorite bg-opacity-20 rounded-[10px] items-center py-4 px-8">
      <img
        src={image}
        alt={name}
        className="w-[150px] h-[170px] object-cover"
      />
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl text-black">{name}</h2>
          <span className="font-light text-lg text-black">{price}$</span>
        </div>
        <Link to="/catalog">
          <BsFillArrowUpRightCircleFill size={30} />
        </Link>
      </div>
    </div>
  );
};

const Trends = () => {
  return (
    <section className="mt-24 flex max-w-[90%] mx-auto">
      <div className="flex flex-col gap-6">
        <span className="text-favorite capitalize ml-4 font-extrabold text-lg flex items-center">
          <span className="border-2 h-[2px] border-favorite w-[80px] mr-2"></span>
          popular trends
        </span>
        <h1 className="uppercase w-[350px] text-5xl mr-2 max-sm:text-2xl text-black text-left font-bold">
          most popular products
        </h1>
        <Link
          to="/catalog"
          className="flex gap-2 items-center text-xl mt-4 text-favorite"
        >
          See All <BsArrowRightShort size={20} />{" "}
        </Link>
      </div>
      <div className="flex  w-full mr-24 gap-14 overflow-hidden">
        <HorizontalCardScroll animationDuration={55} delayBetweenCards={55} />
        {/* <PopularProducts /> */}
        {/* <Swiper
          spaceBetween={20}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide> <PopularProducts image="../../../src/assets/shoe.svg" price={78.5} name="Air Max 98"/> </SwiperSlide>
          <SwiperSlide><PopularProducts image="../../../src/assets/shoe.svg" price={78.5} name="Air Max 98" /></SwiperSlide>
          <SwiperSlide><PopularProducts image="../../../src/assets/shoe.svg" price={78.5} name="Air Max 98"/></SwiperSlide>
          <SwiperSlide><PopularProducts image="../../../src/assets/shoe.svg" price={78.5} name="Air Max 98"/></SwiperSlide>
        </Swiper> */}
      </div>
    </section>
  );
};

export default Trends;
