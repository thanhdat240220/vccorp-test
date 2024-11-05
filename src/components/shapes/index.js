import './index.scss'
import Hexagon from "./hexagon/Hexagon";
import HexagonBottom from "./bottom-hexagon-svg/BottomHexagonSvg";
import PlusIcon from "./plus/Plus";
import Square from "./square/Square";

const Shapes = () => {
    return (
        <div className='shapes'>
            <div className="absolute bottom-0 left-[48%] z-10">
                <PlusIcon type={1} />
            </div>
            <div className="absolute right-0 top-[7.5rem] sm:top-[1.375rem]">
                <PlusIcon type={2} />
            </div>

            <div className="absolute top-[27rem] -right-4 sm:top-72 sm:-right-12">
                <Hexagon color="bg-shapeColors-dark" size="w-8 h-[1.125rem] sm:w-[5.3125rem] sm:h-[3.125rem]" opacity="opacity-[26%]" />
            </div>
            <div className="absolute top-[31.25rem] sm:top-[30.625rem] left-[75%]">
                <Hexagon color="bg-shapeColors-dark" size="w-6 h-4 sm:w-[4rem] sm:h-[2.25rem]" />
            </div>

            <div className="absolute top-[34rem] left-[81%] sm:top-[45%] sm:left-[50%]">
                <Square color="bg-white" size="w-6 h-6 sm:w-[4.75rem] sm:h-[4.75rem]" opacity="opacity-30" radius="rounded-md sm:rounded-2xl"/>
            </div>
            <div className="absolute bottom-[10rem] left-[52%] sm:bottom-[9rem] sm:left-[63%]">
                <Square color="bg-white" size="w-7 h-7 sm:w-[2.8125rem] sm:h-[2.8125rem]" opacity="opacity-30" radius="rounded-md sm:rounded-xl" />
            </div>
            <div className="absolute bottom-[5.75rem] right-[27%] sm:bottom-[13.25rem] sm:right-[15%]">
                <Square color="bg-white" size="w-[0.625rem] h-[0.625rem] sm:w-16 sm:h-16" opacity="opacity-20" radius="rounded-sm sm:rounded-2xl" />
            </div>
            <div className="absolute bottom-[3rem] right-[6.875rem] sm:top-[13.125rem] sm:right-[10%]">
                <Square color="bg-white" size="w-[1.125rem] h-[1.125rem] sm:w-16 sm:h-16" opacity="opacity-20" radius="rounded-sm sm:rounded-2xl" />
            </div>
            <div className="absolute bottom-[14rem] right-[2.125rem] sm:bottom-[15.75rem] sm:right-[31%]">
                <Square color="bg-white" size="w-6 h-6 sm:w-[1.625rem] sm:h-[1.625rem]" opacity="opacity-10 sm:opacity-20" radius="rounded-md" />
            </div>

            <div className="absolute bottom-hexagon-svg opacity-30">
                <HexagonBottom />
            </div>
        </div>
    );
};

export default Shapes;
