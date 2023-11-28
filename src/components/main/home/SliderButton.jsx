import PropTypes from 'prop-types';

const SliderButton = ({ children, slideGallery, classes, type }) => {
  return (
    <button
      className={`text-white transition-all duration-300 absolute ${classes} top-[50%] rounded-3xl w-32 p-8  hover:bg-gray-800 hover:opacity-75 z-[8] `}
      onClick={() => slideGallery(type)}
    >
      {children}
    </button>
  );
};

SliderButton.propTypes = {
  children: PropTypes.object,
  slideGallery: PropTypes.func,
  classes: PropTypes.string,
  type: PropTypes.string,
};

export default SliderButton;
