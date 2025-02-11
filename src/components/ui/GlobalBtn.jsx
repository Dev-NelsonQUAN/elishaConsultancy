import React from 'react'

const GlobalBtn = ({ textBtn, bg, color, fontSize, paddingX, borderRadius, paddingY, border, fontWeight, roundedBl, roundedR, roundedTr }) => {
    return (
        <>
            <button className={`${bg} ${color} ${paddingX} ${paddingY} ${fontSize} ${borderRadius} ${border} ${fontWeight} 
            ${roundedBl} 
            ${roundedR} 
            ${roundedTr} 
            cursor-pointer`}>
                {textBtn}
            </button>
        </>
    )
}

export default GlobalBtn