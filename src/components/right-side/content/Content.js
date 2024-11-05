import React from "react";

function Content({
    description = "",
    author = "",
    role = ""
}) {
    return (
        <div className="container max-w-[22rem] h-full flex flex-col justify-between mt-[4.5rem] sm:mt-0">
            <div className="content text-white font-semibold text-base sm:text-[1.75rem] sm:leading-[2.75rem]">
                {description}
            </div>
            <div className="author">
                <div className="name text-textCustom pt-7 font-bold uppercase text-sm sm:pt-6 sm:text-[1.75rem]">{author}</div>
                <div className="role text-white pt-[0.375rem] text-xs sm:pt-3 sm:pb-3 sm:text-lg">{role}</div>
            </div>
        </div>
    )
}

export default Content;
