import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { DataProviderContext } from "context/DataProviderContext";

const Navbar = () => {
  const { setKeywords } = useContext(DataProviderContext);
  const [search, setSearch] = useState("");

  const handleEnterKeyDown = (key) => {
    if (key === "Enter") {
      setKeywords(search);
    }
  };

  return (
    <nav className="h-14 bg-blue-500 w-full mx-auto px-2 md:px-16">
      <ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-white">
        <h1 className="text-xl">BD-Shop</h1>
        <li className="flex bg-white mx-auto h-9 w-full max-w-lg  rounded-full pr-3">
          <input
            className="h-9 rounded-full w-full text-sm border-0 pl-4 focus:ring-0 outline-none text-black"
            type="text"
            value={search}
            name="search"
            placeholder="Type product name here to search"
            onKeyDown={(e) => handleEnterKeyDown(e.key)}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setKeywords(search)}>
            <BiSearchAlt className="text-blue-500" />
          </button>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <Link to="/cart">
          <li title="cart" className="bg-blue-400 p-2 rounded-full">
            <BsFillCartFill className="text-white " />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
