import Hexagon from "./Hexagon";
import PlusIcon from "./Plus";
import Square from "./Square";

const Shapes = () => {
    return (
        <div>
            <div className="absolute bottom-0 left-[49%] z-10">
                <PlusIcon type={1} />
            </div>
            <div className="absolute right-0 top-[7.5rem] sm:top-[1.375rem]">
                <PlusIcon type={2} />
            </div>

            <div className="absolute top-[28rem] -right-4 sm:top-72 sm:-right-12">
                <Hexagon color="bg-shapeColors-dark" size="w-8 h-[1.125rem] sm:w-[5.3125rem] sm:h-[3.125rem]" opacity="opacity-[26%]" />
            </div>
            <div className="absolute top-[31.5rem] sm:top-[30.625rem] left-[75%]">
                <Hexagon color="bg-shapeColors-dark" size="w-6 h-4 sm:w-[4rem] sm:h-[2.25rem]" />
            </div>

            <div className="absolute bottom-[5rem] left-[81%] sm:top-[45%] sm:left-[52%]">
                <Square color="bg-white" size="w-6 h-6 sm:w-[4.75rem] sm:h-[4.75rem]" opacity="opacity-30" radius="rounded-md sm:rounded-2xl"/>
            </div>
            <div className="absolute bottom-[9.625rem] left-[52%] sm:bottom-[10.625rem] sm:left-[65%]">
                <Square color="bg-white" size="w-7 h-7 sm:w-[2.8125rem] sm:h-[2.8125rem]" opacity="opacity-30" radius="rounded-md sm:rounded-2xl" />
            </div>
            <div className="absolute bottom-[5.75rem] right-[25%] sm:bottom-[13.25rem] sm:right-[15%]">
                <Square color="bg-white" size="w-[0.625rem] h-[0.625rem] sm:w-16 sm:h-16" opacity="opacity-20" radius="rounded-sm sm:rounded-2xl" />
            </div>
            <div className="absolute bottom-[3rem] right-[6.875rem] sm:top-[13.125rem] sm:right-[10%]">
                <Square color="bg-white" size="w-[1.125rem] h-[1.125rem] sm:w-16 sm:h-16" opacity="opacity-20" radius="rounded-sm sm:rounded-2xl" />
            </div>
            <div className="absolute bottom-[14rem] right-[2.125rem] sm:bottom-[16rem] sm:right-[31%]">
                <Square color="bg-white" size="w-6 h-6 sm:w-[1.625rem] sm:h-[1.625rem]" opacity="opacity-10 sm:opacity-20" radius="rounded-md" />
            </div>

            <div className="absolute center opacity-30">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1090" height="1258" viewBox="0 0 1089.4599579608237 1258" >
                    <path fill="#032184" d="M492.7684547533455 29.999999999999996Q544.7299789804118 0 596.6915032074781 30L1037.4984337337573 284.5Q1089.4599579608237 314.5 1089.4599579608237 374.5L1089.4599579608237 883.5Q1089.4599579608237 943.5 1037.4984337337573 973.5L596.6915032074781 1228Q544.7299789804118 1258 492.7684547533455 1228L51.96152422706631 973.5Q0 943.5 0 883.5L0 374.5Q0 314.5 51.96152422706632 284.5Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Shapes;
