import { NavLink } from "react-router-dom";
import ManageIcons from "../HomeSection/ManageIcons";

const Navbar = () => {
  return (
    <div className=" bg-green-200 mt-4 rounded-[10px] bg-opacity-30 text-black w-full">
      <nav className="py-8 px-12 flex items-center justify-between">
        <h1 className="text-4xl text-favorite font-bold">Logo</h1>
        <ul className="flex items-center gap-12 text-lg">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/something">SomethingElse</NavLink>
          </li>
        </ul>
        <ManageIcons />
      </nav>
    </div>
  );
};

export default Navbar;
