import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Card from "../components/Card";

import { items } from "../data";

const HomePage = () => {
  const [itemsData, setItemsData] = useState(items);

  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];

  const filterbyCategory = (category) => {
    if (category === "الكل") {
      setItemsData(items);
    } else {
      const newArrayCategory = items.filter(
        (item) => item.category === category
      );
      setItemsData(newArrayCategory);
    }
  };

  const filterbySearch = (word) => {
    if (word !== "") {
      const newArrayCategory = items.filter((item) => item.title === word);
      setItemsData(newArrayCategory);
    }
  };
  return (
    <>
      <Navbar filterbySearch={filterbySearch} />
      <Header filterbyCategory={filterbyCategory} allCategory={allCategory} />
      <div className="overflow-y-scroll h-screen p-5 border-[1px] my-10  lg:mx-40  flex flex-wrap justify-center items-center gap-9">
        <Card itemsData={itemsData} />
      </div>
    </>
  );
};

export default HomePage;
