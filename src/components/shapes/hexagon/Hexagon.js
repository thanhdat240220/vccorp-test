import "./Hexagon.scss";
import React from "react";

const Hexagon = ({ color = "bg-blue-500", size = "", opacity = "opacity-1", radius = "rounded-sm" }) => {
    // const height = width / 1.75; can use this if receive only width property

    return (
        <div className={`hexagon ${color} ${size} ${opacity} ${radius}`}></div>
    );
};

export default Hexagon;
