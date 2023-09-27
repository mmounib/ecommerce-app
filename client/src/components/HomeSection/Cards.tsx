import { Dispatch, SetStateAction } from "react";
import { ImCross } from "react-icons/im";

interface setProps {
  state: Dispatch<SetStateAction<boolean>>;
}

interface card {
    image: string,
    header: string,
    price: number,
    item: number
}

const CardsList = ({image, header, price, item}: card) => {
    return (
        <div className="flex gap-6 my-6">
            <img src={image} alt={header} className="border-[1px] border-gray-600 p-4 h-[120px] w-[120px]"/>
            <div className="flex flex-col gap-2">
                <h1 className="text-black font-bold text-xl capitalize">{header}</h1>
                <span className=" text-green-700 text-2xl font-semibold">${price}</span>
                <div className="flex mt-auto mb-1 border-[1px] border-gray-400">
                    <span className="bg-favorite py-1 px-4 text-white text-lg">-</span>
                    <span className="text-lg px-5  my-auto ">{item}</span>
                    <span className="bg-favorite py-1 px-4 text-white text-lg">+</span>
                </div>
                {/* <p className="mt-auto mb-1 text-lg rounded-[5px]">{item} items</p> */}
            </div>

        </div>
    )
}

const Cards = ({ state }: setProps) => {
  return (
    <div className=" bg-white w-[500px] px-6 right-0 absolute top-14 z-10">
      <ImCross
        size={15}
        className="absolute right-0 m-3 cursor-pointer z-20"
        onClick={() => state(false)}
      />
      <div className="flex flex-col gap-4 items-center mt-4">
        <h1 className="uppercase text-black font-extrabold text-3xl">
          your cart
        </h1>
        <span className="border-[1px] border-gray-800 w-full h-[1px]"></span>
      </div>
      <CardsList image="../../../src/assets/shirtre.png" header="original black tshirt" price={172.5} item={3}/>
      <CardsList image="../../../src/assets/shirtre.png" header="original black tshirt" price={172.5} item={3}/>
      <CardsList image="../../../src/assets/shirtre.png" header="original black tshirt" price={172.5} item={3}/>
    </div>
  );
};

export default Cards;
