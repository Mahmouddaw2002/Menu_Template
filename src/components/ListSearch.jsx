import React, { useState } from "react";

const ListSearch = ({ filterbySearch }) => {
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    filterbySearch(search);
    filterbySearch("");
  };
  return (
    <div className="z-10 absolute top-16 right-0 left-0 bg-[#0d2d64] p-5 flex justify-center items-center border-t-[1px] border-t-[aqua]">
      <input
        placeholder="ابحث"
        className="outline-none text-[#0d2d64] rounded-[10px] px-[22px] py-[10px]"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button
        onClick={onSearch}
        className="bg-[aqua] text-[black] mr-[10px] p-[5px] rounded-[10px] font-semibold"
      >
        ابحث
      </button>
    </div>
  );
};

export default ListSearch;
