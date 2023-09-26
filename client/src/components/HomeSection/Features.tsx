import { PiTextUnderlineFill } from "react-icons/pi";

interface featureList {
  icon: React.ReactNode;
  header: string;
  text: string;
}
const FeatureComponent = ({ icon, header, text }: featureList) => {
  return (
    <div className="bg-white w-[250px] h-[250px] rounded-[10px] py-3 px-6 flex flex-col gap-6">
      {icon}
      <div className="flex flex-col gap-2">
        <h2 className="text-black font-extrabold text-3xl">{header}</h2>
        <p className="font-light text-base text-black">{text}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="mt-24">
      <div className="flex flex-col gap-14">
        <h1 className="text-black text-center font-extrabold text-5xl">
          Our Key Features
        </h1>
        <div className="flex gap-4 bg-gray-200 items-center justify-around rounded-[5px] w-full min-h-[450px]">
          <FeatureComponent
            icon={<PiTextUnderlineFill size={40} className="bg-favorite text-white p-2 rounded-[5px] h-[50px] w-[50px]"/>}
            header="Easy To Use"
            text="Discover a world of possibilities as you explore our products"
          />
          <FeatureComponent
            icon={<PiTextUnderlineFill size={40} className="bg-red-950 bg-opacity-80 p-2 text-white rounded-[5px] h-[50px] w-[50px]"/>}
            header="Easy To Use"
            text="Discover a world of possibilities as you explore our products"
          />
          <FeatureComponent
            icon={<PiTextUnderlineFill size={40} className="bg-blue-950 text-blue-300 p-2 rounded-[5px] h-[50px] w-[50px]"/>}
            header="Easy To Use"
            text="Discover a world of possibilities as you explore our products"
          />
          <FeatureComponent
            icon={<PiTextUnderlineFill size={40} className="bg-yellow-900 bg-opacity-40 text-yellow-900 p-2 rounded-[5px] h-[50px] w-[50px]"/>}
            header="Easy To Use"
            text="Discover a world of possibilities as you explore our products"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
