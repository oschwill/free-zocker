import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import { useState } from 'react';
import SliderButton from './SliderButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const RecentlyAdded = ({ getRecentlyAdded }) => {
  const [slidePosition, setSlidePosition] = useState(0);

  const movePosition = 84;
  const maxSlidePosition = (getRecentlyAdded().length / 4 - 1) * movePosition;

  const slideGallery = (type) => {
    switch (type) {
      case 'prev':
        if (slidePosition < 0) {
          setSlidePosition((cur) => cur + movePosition);
        }
        break;
      case 'next':
        if (slidePosition > -maxSlidePosition) {
          setSlidePosition((cur) => cur - movePosition);
        }
        break;

      default:
        break;
    }
  };

  return (
    <section className="flex flex-col w-full justify-start pl-[10%] pt-[4%] overflow-hidden relative">
      <h2 className="text-white text-2.5rem mb-16">Recently Added</h2>

      <SliderButton slideGallery={slideGallery} classes="left-[7%]" type="prev">
        <FontAwesomeIcon
          className="text-buttonBackgroundColor m-auto"
          icon={faPlay}
          rotation={180}
          style={{ height: '60px' }}
        />
      </SliderButton>
      <SliderButton slideGallery={slideGallery} classes="right-[3.5%]" type="next">
        <FontAwesomeIcon
          icon={faPlay}
          className="text-buttonBackgroundColor m-auto "
          style={{ height: '60px' }}
        />
      </SliderButton>
      <section className=" w-[83vw] overflow-hidden relative">
        <section
          className="flex gap-[1vw] w-[10000px] transition-all duration-500"
          style={{ transform: `translateX(${slidePosition}vw)` }}
        >
          {/* CARD 1 START */}
          {getRecentlyAdded().map((item) => {
            return <ItemCard item={item} key={item.id} />;
          })}
        </section>
      </section>
    </section>
  );
};

RecentlyAdded.propTypes = {
  getRecentlyAdded: PropTypes.func,
};

export default RecentlyAdded;
