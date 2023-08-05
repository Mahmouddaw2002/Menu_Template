import React from "react";
import Zoom from "react-reveal/Zoom";

import lun from "../assets/lun.png";

const Card = ({ itemsData }) => {

  return (
    <>
      <Zoom left>
        {itemsData.length > 1 ? (
          itemsData.map((item) => {
            return (
              <div
                key={item.id}
                className=" lg:pl-5 p-3 lg:p-0 rounded-3xl border-[1px] flex gap-5 flex-wrap lg:flex-nowrap "
              >
                <img
                  className="w-full lg:w-[25%] rounded-3xl"
                  src={lun}
                  alt=""
                />

                <div className="py-7 flex flex-col gap-y-8 w-full">
                  <div className="font-semibold flex justify-between items-center text-[20px] text-[#0d2d64]">
                    <h3 className="text-2xl">{item.title}</h3>
                    <h3 className=" font-semibold text-red-500">
                      {item.price}
                    </h3>
                  </div>
                  <p className="text-[#72716c]">{item.description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h3>لا يوجد اصناف</h3>
        )}
      </Zoom>
    </>
  );
};

export default Card;
