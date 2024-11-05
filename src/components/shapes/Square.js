import React from "react";

const Square = ({ color = "bg-blue-500", size = "w-24 h-[13.5rem]", opacity = "opacity-10", radius = "rounded-2xl" }) => {
    return (
        <div className={`${color} ${size} ${opacity} ${radius}`}></div>
    );
};

export default Square;
