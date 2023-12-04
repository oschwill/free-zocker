import PropTypes from 'prop-types';
import ScreenShotItem from './ScreenShotItem';

const ScreenShots = ({ images }) => {
  return (
    <section className="grid grid-cols-2 pl-[10%] pt-[4%] gap-x-16 mr-16">
      {images &&
        images.map((img) => {
          return <ScreenShotItem img={img} key={img.id} />;
        })}
    </section>
  );
};

ScreenShots.propTypes = {
  images: PropTypes.array,
};

export default ScreenShots;
