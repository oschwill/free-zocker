import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ScreenShotItem = ({ img }) => {
  const [showFullPic, setShowFullPic] = useState(false);

  const handleShowFullPic = () => {
    setShowFullPic(!showFullPic);
  };

  return (
    <>
      <img
        src={img.image}
        alt={img.image}
        key={img.id}
        className="cursor-pointer"
        onClick={handleShowFullPic}
      />
      {showFullPic && (
        <div className="fixed top-0 left-0 z-30 w-[100vw] h-[100vh] bg-opacity-75 bg-gray-900 flex justify-center items-center">
          <FontAwesomeIcon
            icon={faXmark}
            style={{ color: '#ffffff', height: '60px' }}
            className="ml-auto fixed top-[5%] right-0 cursor-pointer hover:opacity-75 lg:right-5 xl:right-[3%] 2xl:right-[10%]  "
            onClick={handleShowFullPic}
          />
          <img src={img.image} alt={img.image} className="h-[75vh]" />
        </div>
      )}
    </>
  );
};

ScreenShotItem.propTypes = {
  img: PropTypes.object,
};

export default ScreenShotItem;
