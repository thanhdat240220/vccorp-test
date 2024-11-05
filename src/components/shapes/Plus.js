import React from "react";

const PlusIcon = ({ type = 1, fill = "none", }) => {
    return (
        type === 1 ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 89" fill={fill} className="sm:size-[6.5625rem] size-12">
                <path d="M69.7849 105.666H35.7257V70.0134H0.117188V35.9542H35.7257V0.345703H69.7849V35.9542H105.437V70.0134H69.7849V105.666ZM36.8462 104.545H68.6732V68.9017H104.282V37.0747H68.6732V1.50115H36.8462V37.1097H1.27263V68.9017H36.8812L36.8462 104.545Z" fill="#07F9FE" />
                <path opacity="0.6" d="M104.842 36.5148H69.2338V0.90625H36.2863V36.5148H0.677734V69.4623H36.2863V105.071H69.2338V69.4623H104.842V36.5148Z" fill="white" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 131" fill={fill} className="sm:size-[8.125rem] size-12">
                <path d="M129.382 44.9899H85.4296V1.03711H44.7614V44.9899H0.808594V85.6581H44.7614V129.611H85.4296V85.6581H129.382V44.9899Z" fill="white" />
                <path d="M86.1104 130.346H44.07V86.3389H0.117188V44.2985H44.07V0.345703H86.1104V44.2985H130.117V86.3389H86.1104V130.346ZM45.453 128.963H84.7382V84.9667H128.691V45.6815H84.7382V1.77191H45.453V45.7247H1.54339V84.9667H45.4962L45.453 128.963Z" fill="#07F9FE" />
            </svg>
        )
    );
}

export default PlusIcon;
