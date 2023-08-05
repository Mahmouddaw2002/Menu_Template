import React from "react";

const Header = ({ filterbyCategory, allCategory }) => {
  const onFilter = (category) => {
    filterbyCategory(category);
  };

  return (
    
      <div>
        <h2 className="border-b-[3px] border-b-[#0d2d64] w-fit mx-auto pb-4 p-8 text-[#0d2d64] text-[25px] font-bold text-center">
          قائمة الطعام
        </h2>

        <ul className="py-6 flex justify-center items-center gap-10 flex-wrap">
          {allCategory.length >= 1 ? (
            allCategory.map((cat) => {
              return (
                <li
                  key={cat}
                  onClick={() => onFilter(cat)}
                  className="cursor-pointer hover:font-bold hover:bg-[aqua] font-semibold border-2 border-solid border-[#0d2d64] px-4 py-2"
                >
                  {cat}
                </li>
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )}
        </ul>
      </div>
  
  );
};

export default Header;
