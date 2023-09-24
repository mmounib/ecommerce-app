import { Link } from "react-router-dom";

interface shopitem {
  header: string;
  image: string;
  text: string;
}
const ShopItem = ({ header, image, text }: shopitem) => {
  return (
    <div className="flex bg-amber-100 bg-opacity-30 shadow-customShadow rounded-[10px] py-4 px-6 gap-4">
      <div className="flex max-w-[50%]  flex-col gap-2">
        <h2 className="text-black font-semibold text-2xl">{header}</h2>
        <p className="text-black ml-1 font-light text-base">{text}</p>
        <Link to="/catalog" className="text-favorite text-lg mt-auto font-medium">
          Shop Now
        </Link>
      </div>
      <img src={image} alt="ShopItem" className="flex-1 w-[120px] h-[200px]"/>
    </div>
  );
};
const ShopNow = () => {
  return (
    <section className=" mt-16 w-[75%] mx-auto">
      <div className="flex items-center gap-14 justify-between">
        <ShopItem
          header="Latest Clothes"
          image="../../../src/assets/jacket.png"
          text="Shop the latest clothes trend in our website"
        />
        <ShopItem
          header="New Collection"
          image="../../../src/assets/shoe.png"
          text="Shop the latest clothes trend in our website"
        />
        <ShopItem
          header="Trending Products"
          image="../../../src/assets/jean.png"
          text="Shop the latest clothes trend in our website"
        />
      </div>
    </section>
  );
};

export default ShopNow;
