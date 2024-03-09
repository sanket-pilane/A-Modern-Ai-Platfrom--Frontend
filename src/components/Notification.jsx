import React from "react";
import { notificationImages } from "../contants";
import { notification1 } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center backdrop-blur p-4 pr-6 bg-n-9/40 border border-n-1/10 rounded-2xl gap-4`}
    >
      <img
        src={notification1}
        alt="Notification"
        width={64}
        height={64}
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold justify-between">{title}</h6>
        <div className="flex items-center text-base">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex overflow-hidden w-6 h-6 border-2 border-n-12 rounded-full"
              >
                <img
                  src={item}
                  alt={item}
                  width={20}
                  height={20}
                  className="w-full"
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13 ml-7">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
