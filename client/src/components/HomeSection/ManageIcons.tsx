import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { useState } from "react";
import { Cards } from "../../exports";

const ManageIcons = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="flex items-center text-sm gap-4 relative">
      <MdOutlineAccountCircle size={25} className="cursor-pointer" />
      <AiOutlineShoppingCart size={25} className="cursor-pointer" onClick={() => setClick(!click)} />
      {click && (
        <>
          <Cards state={setClick}/>
          
        </>
      )}
      <LuLogOut size={30} className="ml-10 cursor-pointer"/>
    </div>
  );
};

export default ManageIcons;
