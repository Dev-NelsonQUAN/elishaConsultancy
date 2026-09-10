import PropTypes from 'prop-types';

const CompLayout = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1728px] mx-auto">
        {children}
      </div>
    </div>
  );
};

CompLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CompLayout;
