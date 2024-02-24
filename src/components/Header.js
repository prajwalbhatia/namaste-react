import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between m-2 bg-pink-100 shadow-md">
      <div className="logo-container w-40">
        <img className="w-46" src={LOGO_URL} />
      </div>
      <div className="flex-1 flex justify-end items-center">
        <ul className="flex">
          <li className="px-4">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
