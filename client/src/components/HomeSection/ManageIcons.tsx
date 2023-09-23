import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";

const ManageIcons = () => {
  return (
    <div className="flex items-center text-sm gap-4">
      <MdOutlineAccountCircle size={25} className="cursor-pointer" />
      <AiOutlineShoppingCart size={25} className="cursor-pointer" />
      <LuLogOut size={30} className="ml-10 cursor-pointer"/>
    </div>
  );
};

export default ManageIcons;
