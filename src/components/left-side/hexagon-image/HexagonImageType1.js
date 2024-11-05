import React from "react";

function HexagonImageType1({
    src = "",
    size = 'md' // sm|md
}) {
    const getSize = (size) => {
        switch (size) {
            case 'md':
                return getMediumSize();
            case 'sm':
                return getSmallSize();
            default:
                return null;
        }
    }
    const getSmallSize = () => {
        return (
            <div className="relative">
                <div className="relative z-10">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="297" height="377" viewBox="0 0 297 377">
                        <path fill="#fff" d="M138.56406460551017 4.999999999999999Q147.22431864335456 0 155.88457268119896 4.999999999999999L285.78838324886476 80Q294.44863728670913 85 294.44863728670913 95L294.44863728670913 245Q294.44863728670913 255 285.78838324886476 260L155.88457268119896 335Q147.22431864335456 340 138.56406460551017 335L8.660254037844387 260Q0 255 0 245L0 95Q0 85 8.660254037844387 80Z">
                        </path>
                        <defs>
                            <clipPath id="clip-hexagon">
                                <path d="M138.56406460551017 4.999999999999999Q147.22431864335456 0 155.88457268119896 4.999999999999999L285.78838324886476 80Q294.44863728670913 85 294.44863728670913 95L294.44863728670913 245Q294.44863728670913 255 285.78838324886476 260L155.88457268119896 335Q147.22431864335456 340 138.56406460551017 335L8.660254037844387 260Q0 255 0 245L0 95Q0 85 8.660254037844387 80Z" />
                            </clipPath>
                        </defs>
                        <image href={src} width="297" height="377" clipPath="url(#clip-hexagon)" preserveAspectRatio="xMidYMid slice" />
                    </svg>
                </div>
                <div className="absolute -top-[10px] -left-[11px] z-0">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="316" height="364" viewBox="0 0 316 364">
                        <path fill="none" stroke="#fff" strokeWidth="3" d="M148.956 4.999Q157.617 0 166.277 4.999L306.573 86Q315.233 91 315.233 101L315.233 263Q315.233 273 306.573 278L166.277 359Q157.617 364 148.956 359L8.66 278Q0 273 0 263L0 101Q0 91 8.66 86Z"></path>
                        <path fill="#389df9" d="M148.95636945092343 4.999999999999999Q157.61662348876783 0 166.27687752661222 4.999999999999999L306.5729929396913 86Q315.23324697753566 91 315.23324697753566 101L315.23324697753566 263Q315.23324697753566 273 306.5729929396913 278L166.27687752661222 359Q157.61662348876783 364 148.95636945092343 359L8.660254037844387 278Q0 273 0 263L0 101Q0 91 8.660254037844387 86Z"></path>
                    </svg>
                </div>
            </div>
        );
    };

    const getMediumSize = () => {
        return (
            <div className="relative">
                <div className="relative z-10">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="482" height="556" viewBox="0 0 481.5101245041479 556">
                        <path fill="#fff" d="M232.09480821422954 4.999999999999999Q240.75506225207394 0 249.41531628991834 4.999999999999999L472.8498704663035 134Q481.5101245041479 139 481.5101245041479 149L481.5101245041479 407Q481.5101245041479 417 472.8498704663035 422L249.41531628991834 551Q240.75506225207394 556 232.09480821422954 551L8.660254037844387 422Q0 417 0 407L0 149Q0 139 8.660254037844387 134Z">
                        </path >
                        <defs>
                            <clipPath id="clip-hexagon">
                                <path d="M232.0948 5Q240.755 0 249.415 5L472.85 134Q481.51 139 481.51 149L481.51 407Q481.51 417 472.85 422L249.415 551Q240.755 556 232.0948 551L8.66 422Q0 417 0 407L0 149Q0 139 8.66 134Z" />
                            </clipPath>
                        </defs>
                        <image href={src} width="481" height="556" clipPath="url(#clip-hexagon)" preserveAspectRatio="xMidYMid slice" />
                    </svg >
                </div >
                <div className="absolute -top-[18px] -left-[18px] z-0">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="519" height="565" viewBox="0 0 517 565">
                        <path fill="none" stroke="#fff" strokeWidth="2" d="M250.281 5Q258.942 0 267.602 5L509.223 144.5Q517.883 149.5 517.883 159.5L517.883 432.5Q517.883 442.5 509.223 447.5L267.602 585Q258.942 590 250.281 585L8.66 447.5Q0 442.5 0 432.5L0 159.5Q0 149.5 8.66 144.5Z"></path>
                        <path fill="#389df9" d="M250.281 5Q258.942 0 267.602 5L498.223 144.5Q506.883 149.5 506.883 159.5L506.883 432.5Q506.883 442.5 498.223 447.5L267.602 585Q258.942 590 250.281 585L17.66 447.5Q9 442.5 9 432.5L9 159.5Q9 149.5 17.66 144.5Z"></path>
                    </svg>
                </div>
            </div >
        );
    }

    return getSize(size);
}

export default HexagonImageType1;
