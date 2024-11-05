import "./Hexagon.scss";
import React from "react";

const Hexagon = ({ color = "bg-blue-500", size = "", opacity = "opacity-1", radius = "rounded-sm" }) => {
    return (
        <div className={`hexagon ${color} ${size} ${opacity} ${radius}`}></div>
    );
};

export default Hexagon;
