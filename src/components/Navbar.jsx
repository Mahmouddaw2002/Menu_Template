import React, { useState } from "react";

import list from "../assets/list.png";
import ListSearch from "./ListSearch";
import LightSpeed from "react-reveal/LightSpeed";

const Navbar = ({ filterbySearch }) => {
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState("");

  const clickList = () => {
    setClick((click) => !click);
  };

  const onSearch = () => {
    filterbySearch(search);
    filterbySearch("");
  };

  return (
    <LightSpeed bottom>
      <div className="relative bg-[#0d2d64] h-16  text-white flex justify-between px-5 lg:px-0 lg:justify-around items-center">
        <div className="text-xl font-extrabold text-[aqua]">مطعم جديد</div>
        <img
          src={list}
          alt="list"
          className="w-7 cursor-pointer lg:hidden"
          onClick={clickList}
        />

        {click && <ListSearch filterbySearch={filterbySearch} />}
        <div className="hidden lg:flex">
          <input
            placeholder="ابحث"
            className="outline-none text-[#0d2d64] rounded-[10px] px-[22px] py-[10px]"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            onClick={() => onSearch()}
            className="bg-[aqua] text-[black] mr-[10px] p-[5px] rounded-[10px] font-semibold"
          >
            ابحث
          </button>
        </div>
      </div>
    </LightSpeed>
  );
};

export default Navbar;
