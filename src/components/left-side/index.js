import { useEffect, useState } from "react";
import HexagonImageType1 from "./hexagon-image/HexagonImageType1";
import HexagonImageType2 from "./hexagon-image/HexagonImageType2";
import Hexagon from "../shapes/hexagon/Hexagon";

const LeftSide = ({
  imagesConfig
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  const checkIsMobile = () => {
    if (window.innerWidth < 800) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(checkIsMobile());

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <div className="image-container max-h-fit -mt-[1.85rem] sm:mt-0">
        <HexagonImageType1
          size={isMobile ? 'sm' : 'md'}
          src={imagesConfig.hexagonType1Url}
        />
      </div>
      <div className={`image-container max-h-fit absolute top-[55%] ${isMobile ? 'left-[120px]' : 'sm:left-[170px]'}`}>
        <HexagonImageType2
          size={isMobile ? 'sm' : 'md'}
          src={imagesConfig.hexagonType2Url}
        />
      </div>
      <div className="absolute top-[18%] right-[18%] sm:top-[8%] sm:right-[5%] z-20">
        <Hexagon color="bg-shapeColors-light" size="w-14 h-8 sm:w-[9.1875rem] sm:h-[5.25rem]" opacity="opacity-30" radius='rounded-sm sm:rounded' />
      </div>
    </div>
  );
}

export default LeftSide;
