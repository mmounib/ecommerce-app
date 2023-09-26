import { Link } from "react-router-dom";
import { Features, ShopNow, Trends } from "../../exports";

const Home = () => {
  return (
    <>
      <section className="flex lg:flex-row sm:flex-col sm:gap-14 lg:gap-20 h-[600px] lg:mx-8 sm:mx-3 items-start lg:mt-10 sm:mt-8 relative">
        <div className="max-w-[50%] my-auto">
          <h1 className="capitalize text-8xl font-extrabold text-black">
            hello there! what would you like to buy ?
          </h1>
          <p className=" lg:mt-6 sm:mt-3 w-[80%]">
            Discover a world of possibilities as you explore our wide range of
            products carefully curated just for you. From Shoes to Jackets, we
            have something for every taste and need. Whether you're looking for
            the latest fashion, cutting-edge electronics, or essential everyday
            items, we've got you covered.
          </p>
          <Link
            to="/catalog"
            className="rounded-[10px] bg-favorite text-white py-3 px-10 inline-block lg:mt-24 sm:mt-6"
          >
            Shop Now
          </Link>
        </div>
        <div className="w-full h-full">
          <img
            src="../../../src/assets/shopimage.jpg"
            alt="ShopImage"
            className="w-[870px] absolute max-sm:relative h-[600px]"
          />
        </div>
      </section>
      <ShopNow />
      <Trends />
      <Features />
    </>
  );
};

export default Home;
