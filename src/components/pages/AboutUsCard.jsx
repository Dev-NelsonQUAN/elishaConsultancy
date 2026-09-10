import PropTypes from 'prop-types';

const AboutUsCard = ({ img, title, content }) => {
  return (
    <div className='rounded-[5px] shadow-2xl gap-10 flex py-10 px-5 bg-[#EC6401] pb-20'>
      <div className='w-15'>
        <img 
          className='size-full object-contain'
          src={img} 
          alt={title || 'Icon'} 
        />
      </div>

      <div>
        <h2 className='text-[30px] font-bold'>{title}</h2>
        <p className='text-[20px] max-w-xl font-medium'>{content}</p>
      </div>
    </div>
  );
};

AboutUsCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default AboutUsCard;