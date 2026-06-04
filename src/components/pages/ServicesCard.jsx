import PropTypes from 'prop-types';

const ServicesCard = ({ img, titleTxt, pTxt }) => {
  return (
    <div className='rounded-[5px] w-92 mb-2'>
        <div className='h-60'>
            <img 
              className='size-full object-cover rounded-t-[5px]'
              src={img} 
              alt={titleTxt || 'Services Image'} 
            />
        </div>

        <div className='bg-white py-6 px-4 flex flex-col items-center rounded-b-[5px] mb-10 h-40'>
            <h1 className='font-bold text-center text-[22px]'>{titleTxt}</h1>
            <p className='font-medium text-center w-60'>{pTxt}</p>
        </div>
    </div>
  ) 
} 

ServicesCard.propTypes = {
  img: PropTypes.string.isRequired,
  titleTxt: PropTypes.string.isRequired,
  pTxt: PropTypes.string.isRequired,
};

export default ServicesCard;

