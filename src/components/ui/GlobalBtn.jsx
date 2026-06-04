import PropTypes from 'prop-types';

const GlobalBtn = ({ 
  textBtn, 
  bg, 
  color, 
  fontSize, 
  paddingX, 
  borderRadius, 
  paddingY, 
  border, 
  fontWeight, 
  roundedBl = '', 
  roundedR = '', 
  roundedTr = '',
  onClick 
}) => {
  return (
    <button 
      onClick={onClick}
      className={`${bg} ${color} ${paddingX} ${paddingY} ${fontSize} ${borderRadius} ${border} ${fontWeight} ${roundedBl} ${roundedR} ${roundedTr} cursor-pointer`}
    >
      {textBtn}
    </button>
  );
};

// This section satisfies ESLint by validating your incoming props
GlobalBtn.propTypes = {
  textBtn: PropTypes.string.isRequired,
  bg: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  paddingX: PropTypes.string,
  borderRadius: PropTypes.string,
  paddingY: PropTypes.string,
  border: PropTypes.string,
  fontWeight: PropTypes.string,
  roundedBl: PropTypes.string,
  roundedR: PropTypes.string,
  roundedTr: PropTypes.string,
  onClick: PropTypes.func
};

export default GlobalBtn;

// import React from 'react'

// const GlobalBtn = ({ textBtn, bg, color, fontSize, paddingX, borderRadius, paddingY, border, fontWeight, roundedBl, roundedR, roundedTr }) => {
//     return (
//         <>
//             <button className={`${bg} ${color} ${paddingX} ${paddingY} ${fontSize} ${borderRadius} ${border} ${fontWeight} 
//             ${roundedBl} 
//             ${roundedR} 
//             ${roundedTr} 
//             cursor-pointer`}>
//                 {textBtn}
//             </button>
//         </>
//     )
// }

// export default GlobalBtn