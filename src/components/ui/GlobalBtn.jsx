import React from 'react'

const GlobalBtn = ({ textBtn, bg, color, fontSize, paddingX, borderRadius, paddingY, border, fontWeight }) => {
    return (
        <>
            <button className={`${bg} ${color} ${paddingX} ${paddingY} ${fontSize} ${borderRadius} ${border} ${fontWeight} cursor-pointer`}>
                {textBtn}
            </button>
        </>
    )
}

export default GlobalBtn