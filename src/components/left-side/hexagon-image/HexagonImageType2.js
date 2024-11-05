import React from "react";

function HexagonImageType2({
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
            <div className="relative z-10">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="365" height="414" viewBox="0 0 365.4627203970331 422">
                    <defs>
                        <clipPath id="clip-path">
                            <path d="M101.32497224277932 4.999999999999999Q109.9852262806237 0 118.64548031846809 4.999999999999999L211.31019852340302 58.5Q219.9704525612474 63.5 219.9704525612474 73.5L219.9704525612474 180.5Q219.9704525612474 190.5 211.31019852340302 195.5L118.64548031846809 249Q109.9852262806237 254 101.32497224277932 249L8.660254037844387 195.5Q0 190.5 0 180.5L0 73.5Q0 63.5 8.660254037844387 58.5Z" />
                        </clipPath>
                    </defs>
                    <image href={src} width="366" height="420" clipPath="url(#clip-path)" preserveAspectRatio="xMidYMid slice" />
                    <path fill="none" stroke="#07f9fe" strokeWidth="4" d="M101.32497224277932 4.999999999999999Q109.9852262806237 0 118.64548031846809 4.999999999999999L211.31019852340302 58.5Q219.9704525612474 63.5 219.9704525612474 73.5L219.9704525612474 180.5Q219.9704525612474 190.5 211.31019852340302 195.5L118.64548031846809 249Q109.9852262806237 254 101.32497224277932 249L8.660254037844387 195.5Q0 190.5 0 180.5L0 73.5Q0 63.5 8.660254037844387 58.5Z" />
                </svg>
            </div>
        );
    };

    const getMediumSize = () => {
        return (
            <div className="relative z-10">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="365" height="414" viewBox="0 0 365.4627203970331 422">
                    <defs>
                        <clipPath id="clip-path">
                            <path d="M174 4 Q182 0 191 5 L357 100 Q365 105 365 115 L365 307 Q365 317 357 322 L191 418 Q182 423 174 418 L9 322 Q0 317 0 307 L0 115 Q0 105 9 100 Z" />
                        </clipPath>
                    </defs>
                    <image href={src} width="366" height="420" clipPath="url(#clip-path)" preserveAspectRatio="xMidYMid slice" />
                    <path fill="none" stroke="#07f9fe" strokeWidth="6" d="M174 4 Q182 0 191 5 L357 100 Q365 105 365 115 L365 307 Q365 317 357 322 L191 418 Q182 423 174 418 L9 322 Q0 317 0 307 L0 115 Q0 105 9 100 Z" />
                </svg>
            </div>
        );
    }

    return getSize(size);
}

export default HexagonImageType2;
